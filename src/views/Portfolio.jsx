import React, { useState, useEffect } from 'react';
import { Play, Eye, Video } from 'lucide-react';

/**
 * Filterable Video Portfolio View
 */
export default function Portfolio({ onSelectMedia }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/portfolio`)
      .then(res => res.json())
      .then(data => setPortfolioItems(data))
      .catch(err => console.error(err));
  }, []);

  const categories = ['ALL', 'Music Video', 'Reels', 'Model Shoot', 'Cinematic', 'Commercial'];

  const filteredItems = activeFilter === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>OUR SHOWCASE</span>
        <h2 style={{ display: 'block', marginBottom: '1rem' }}>Cinematic Reels</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Explore our video shoots, music video compositions, models tapes, and professional editing works. Click on any block to play the video in full cinematic mode.
        </p>
      </div>

      {/* Category Navigation Bar */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Media Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="portfolio-card neon-glow-hover"
            onClick={() => onSelectMedia(item)}
          >
            {/* Simulated Video Thumbnail with customizable dark gradient background */}
            <div 
              className="portfolio-thumbnail" 
              style={{ background: item.thumbnailColor || 'linear-gradient(135deg, #111111 0%, #222222 100%)' }}
            >
              <div className="thumbnail-icon">
                <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />
              </div>
            </div>

            {/* Content overlay */}
            <div className="portfolio-overlay">
              <span className="portfolio-cat">{item.category}</span>
              <h4 className="portfolio-title">{item.title}</h4>
              
              <div className="portfolio-tags-row">
                {(item.tags || []).map((tag, index) => (
                  <span key={index} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
