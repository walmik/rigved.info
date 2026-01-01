import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import Data from './data';

export default function PortfolioItem() {
  const { id } = useParams();
  const key = id || window.location.hash.replace('#/item/', '');
  const item = Data[key];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % item.media.length);
  };

  const goToPrev = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + item.media.length) % item.media.length);
  };

  const renderLightboxContent = () => {
    const media = item.media[currentMediaIndex];

    if (media.type === 'image') {
      return <img src={media.path} alt={media.title || item.title} className="lightbox-image" />;
    }

    if (media.type === 'video') {
      return (
        <video controls autoPlay className="lightbox-video">
          <source src={media.path} type="video/mp4" />
        </video>
      );
    }

    if (media.type === 'youtube') {
      return (
        <div className="lightbox-video-wrapper">
          <iframe
            src={media.path}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  };

  const getMediaGrid = () => {
    return (
      <div className="media-grid">
        {item.media.map((m, i) => {
          if (m.type === 'image') {
            return (
              <div
                className="media-grid-item"
                key={m.path || i}
                onClick={() => openLightbox(i)}
              >
                <img src={m.path} alt={m.title || item.title} />
                <div className="media-grid-overlay">
                  <span className="media-grid-icon">🔍</span>
                </div>
                {m.title && <p className="media-grid-caption">{m.title}</p>}
              </div>
            );
          }

          if (m.type === 'video') {
            return (
              <div
                className="media-grid-item"
                key={m.path || i}
                onClick={() => openLightbox(i)}
              >
                <video muted poster={m.poster}>
                  <source src={m.path} type="video/mp4" />
                </video>
                <div className="media-grid-overlay">
                  <span className="media-grid-icon">▶</span>
                </div>
                {m.title && <p className="media-grid-caption">{m.title}</p>}
              </div>
            );
          }

          if (m.type === 'youtube') {
            return (
              <div
                className="media-grid-item media-grid-video"
                key={m.path || i}
                onClick={() => openLightbox(i)}
              >
                <div className="youtube-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${m.path.split('/').pop().split('?')[0]}/hqdefault.jpg`}
                    alt={m.title || item.title}
                  />
                  <div className="media-grid-overlay">
                    <span className="media-grid-icon">▶</span>
                  </div>
                </div>
                {m.title && <p className="media-grid-caption">{m.title}</p>}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const getMarkdown = () => {
    return (
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.markdown}</ReactMarkdown>
      </div>
    );
  };

  return (
    <>
      <div className="portfolioItem fade-in">
        {/* Back button */}
        <Link to="/" className="back-button">
          ← Back to Portfolio
        </Link>

        {/* Hero section with title and metadata */}
        <div className="item-hero">
          <h1 className="item-title">{item.title}</h1>

          <div className="item-meta">
            {item.client && (
              <span className="meta-item">
                <strong>Client:</strong> {item.client}
              </span>
            )}
            {item.dateRange && (
              <span className="meta-item">
                <strong>Timeline:</strong> {item.dateRange}
              </span>
            )}
            {item.category && (
              <span className="meta-item">
                <strong>Type:</strong> {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
            )}
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="item-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description section */}
        {item.shortDescription && (
          <div className="item-description">
            <p className="lead-text">{item.shortDescription}</p>
          </div>
        )}

        {item.longDescription && (
          <div className="item-long-description">
            <p>{item.longDescription}</p>
          </div>
        )}

        {/* Media gallery grid */}
        {item.media && item.media.length > 0 && (
          <div className="media-gallery-section">
            <h3 className="media-gallery-title">Media Gallery</h3>
            {getMediaGrid()}
          </div>
        )}

        {/* Project Summary */}
        {(item.technicalApproach || item.impact || item.skills) && (
          <div className="project-summary">
            {item.technicalApproach && (
              <div className="summary-section">
                <h3 className="summary-title">Technical Approach</h3>
                <p>{item.technicalApproach}</p>
              </div>
            )}

            {item.impact && (
              <div className="summary-section">
                <h3 className="summary-title">Impact & Results</h3>
                <p>{item.impact}</p>
              </div>
            )}

            {item.skills && item.skills.length > 0 && (
              <div className="summary-section">
                <h3 className="summary-title">Key Skills Demonstrated</h3>
                <ul className="skills-list">
                  {item.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Detailed content (fallback for items without summary) */}
        {!item.technicalApproach && !item.impact && !item.skills && item.markdown && getMarkdown()}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>

          {item.media.length > 1 && (
            <>
              <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
                ‹
              </button>
              <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                ›
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {renderLightboxContent()}
            {item.media[currentMediaIndex].title && (
              <p className="lightbox-caption">{item.media[currentMediaIndex].title}</p>
            )}
          </div>

          {item.media.length > 1 && (
            <div className="lightbox-counter">
              {currentMediaIndex + 1} / {item.media.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
