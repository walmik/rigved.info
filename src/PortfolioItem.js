import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, Link } from 'react-router-dom';
import Data from './data';

export default function PortfolioItem() {
  const { id } = useParams();
  const key = id || window.location.hash.replace('#/item/', '');
  const item = Data[key];

  const getMedia = () =>
    item.media.map((m, i) => {
      if (m.type === 'image') {
        return (
          <div className="media-item" key={m.path || i}>
            <img className="fullsize" src={m.path} alt={m.title || item.title} />
            {m.title && <p className="media-caption">{m.title}</p>}
          </div>
        );
      }

      if (m.type === 'video') {
        return (
          <div className="media-item" key={m.path || i}>
            <video playsInline autoPlay muted loop poster={m.poster}>
              <source src={m.path} type="video/mp4" />
            </video>
            {m.title && <p className="media-caption">{m.title}</p>}
          </div>
        );
      }

      if (m.type === 'youtube') {
        return (
          <div className="media-item" key={m.path || i}>
            <div className="video-wrapper">
              <iframe
                src={m.path}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {m.title && <p className="media-caption">{m.title}</p>}
          </div>
        );
      }
    });

  const getMarkdown = () => {
    return (
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.markdown}</ReactMarkdown>
      </div>
    );
  };

  return (
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

      {/* Media gallery */}
      {item.media && (
        <div className="media-gallery">
          {getMedia()}
        </div>
      )}

      {/* Detailed content */}
      {item.markdown && getMarkdown()}
    </div>
  );
}
