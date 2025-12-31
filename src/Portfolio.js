import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Data from './data';
import PortfolioFilter from './PortfolioFilter';
import PortfolioFeatured from './PortfolioFeatured';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get featured items
  const featuredItems = useMemo(() => {
    return Object.entries(Data)
      .filter(([, item]) => item.featured)
      .sort((a, b) => (a[1].order || 999) - (b[1].order || 999));
  }, []);

  // Get filtered items
  const filteredItems = useMemo(() => {
    return Object.entries(Data)
      .filter(([, item]) => {
        if (activeFilter === 'all') return true;
        return item.category === activeFilter;
      })
      .sort((a, b) => (a[1].order || 999) - (b[1].order || 999));
  }, [activeFilter]);

  return (
    <main className="portfolio-container fadeIn">
      <PortfolioFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {activeFilter === 'all' && <PortfolioFeatured items={featuredItems} />}

      <section className="portfolioItems">
        <h2 className="portfolio-section-title">
          {activeFilter === 'all' ? 'All Projects' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Work`}
        </h2>
        <ul>
          {filteredItems.map(([key, item]) => (
            <li key={key} className={`portfolio-item-card category-${item.category}`}>
              <Link to={'/item/' + key}>
                <div className="thumbnail-wrapper">
                  <img className="thumbnail" src={item.poster} alt={item.title} />
                  {item.category && <span className="category-badge">{item.category}</span>}
                </div>
                <div className="item-info">
                  <h3 className="item-title">{item.title}</h3>
                  {item.client && <p className="item-client">{item.client}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
