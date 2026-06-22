import React, { useEffect } from 'react';
import { X, Play, Info, Calendar, User, ExternalLink, ArrowLeft } from 'lucide-react';

/**
 * Immersive Media Lightbox Component with YouTube embed and External Catalog Link support
 */
export default function Lightbox({ item, onClose }) {
  // Prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!item) return null;

  const isYoutube = item.videoUrl && item.videoUrl.includes('youtube.com');
  const isVideo = item.videoUrl !== undefined && !isYoutube;
  const isExternalLink = item.linkUrl !== undefined;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={32} />
        </button>

        {/* Media Window */}
        <div className="lightbox-media-wrapper">
          {isYoutube ? (
            <iframe
              className="lightbox-video"
              src={item.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', borderRadius: '8px', border: 'none' }}
              title={item.title}
            />
          ) : isVideo ? (
            <video 
              className="lightbox-video" 
              src={item.videoUrl} 
              controls 
              autoPlay 
              playsInline
              style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'contain' }}
            />
          ) : (
            <img 
              className="lightbox-image" 
              src={item.imageUrl} 
              alt={item.title} 
              onError={(e) => { e.target.src = '/logo_original.jpg'; }}
              style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'contain' }}
            />
          )}
        </div>

        {/* Caption Info */}
        <div className="lightbox-caption">
          <span className="lightbox-caption-cat">{item.category}</span>
          <h4 className="lightbox-caption-title">{item.title}</h4>
          
          <p className="lightbox-caption-desc" style={{ marginTop: '0.5rem', color: '#ccc' }}>
            {item.desc || 'Behind the scenes at 19Production Studio.'}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ marginTop: '1.2rem' }}>
              <button
                className="btn-secondary"
                onClick={onClose}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '4px', 
                  cursor: 'pointer', 
                  fontWeight: 800,
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <ArrowLeft size={14} />
                Back
              </button>
            </div>

            {isExternalLink && (
              <div style={{ marginTop: '1.2rem' }}>
                <button
                  className="btn-primary"
                  onClick={() => window.open(item.linkUrl, '_blank')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 800 }}
                >
                  View Shoot on WhatsApp Catalog
                  <ExternalLink size={14} />
                </button>
              </div>
            )}

            {item.youtubeUrl && (
              <div style={{ marginTop: '1.2rem' }}>
                <button
                  className="btn-secondary"
                  onClick={() => window.open(item.youtubeUrl, '_blank')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 800 }}
                >
                  Watch on YouTube
                  <Play size={14} fill="currentColor" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
