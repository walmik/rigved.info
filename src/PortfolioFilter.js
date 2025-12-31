import React from 'react';

export default function PortfolioFilter({ activeFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'professional', label: 'Professional' },
    { key: 'personal', label: 'Personal' },
    { key: 'student', label: 'Student' },
  ];

  return (
    <div className="portfolio-filter">
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
