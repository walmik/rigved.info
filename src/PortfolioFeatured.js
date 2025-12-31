import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioFeatured({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="portfolio-featured">
      <h2 className="featured-title">Featured Work</h2>
      <div className="featured-grid">
        {items.map(([key, item]) => (
          <Link to={'/item/' + key} key={key} className="featured-card">
            <div className="featured-image-wrapper">
              <img src={item.poster} alt={item.title} className="featured-image" />
              <span className="featured-badge">Featured</span>
            </div>
            <div className="featured-content">
              <h3 className="featured-card-title">{item.title}</h3>
              {item.client && <p className="featured-client">{item.client}</p>}
              <p className="featured-description">{item.shortDescription}</p>
              {item.tags && (
                <div className="featured-tags">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
