import React, { useState, useEffect } from 'react';
import { ZoomIn } from 'lucide-react';
import { initialGallery } from '../data/initialPortfolio';

/**
 * BTS & Studio Gallery View (With robust image loading fallbacks and perfect alignments)
 */
export default function Gallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/gallery`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setGalleryItems(data);
        } else {
          setGalleryItems(initialGallery);
        }
      })
      .catch(err => {
        console.error(err);
        setGalleryItems(initialGallery);
      });
  }, []);
  
  const categories = ['ALL', 'Studio', 'Shoots', 'Vibe'];

  const filteredImages = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '0.05em' }}>BEHIND THE SCENES</span>
        <h2 style={{ display: 'block', marginBottom: '1rem' }}>Studio & Vibe Gallery</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Take a look inside the 19Production space. Capture clips, vocal booths, custom lighting configurations, and high-end gear in action. Click on any block to zoom.
        </p>
      </div>

      {/* Gallery Filter Nav */}
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

      {/* Gallery Photos Grid */}
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <div 
            key={img.id} 
            className="gallery-card"
            onClick={() => onSelectImage(img)}
            style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
          >
            <img 
              className="gallery-image" 
              src={img.imageUrl} 
              alt={img.title} 
              loading="lazy" 
              onError={(e) => {
                // If remote Unsplash or other external URL fails, load local logo gracefully for perfect alignment
                e.target.src = '/logo_original.jpg';
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div className="gallery-card-overlay">
              <span className="gallery-card-cat" style={{ color: 'var(--accent-red)', fontWeight: 800 }}>{img.category}</span>
              <h4 className="gallery-card-title" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{img.title}</h4>
              
              <div 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.6)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff'
                }}
              >
                <ZoomIn size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
