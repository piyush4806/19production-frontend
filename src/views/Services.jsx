import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Music, AudioLines, Mic, Camera, Film, PlayCircle, Video, Image } from 'lucide-react';

/**
 * Services Selection View
 */
export default function Services({ onSelectService }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  // Map descriptive icon components based on service category
  const renderServiceIcon = (id) => {
    switch (id) {
      case 'beat-production':
        return <Music size={24} />;
      case 'mixing-mastering':
        return <AudioLines size={24} />;
      case 'music-recording':
        return <Mic size={24} />;
      case 'video-shoots':
        return <Camera size={24} />;
      case 'music-video-editing':
        return <Film size={24} />;
      case 'reels-editing':
        return <PlayCircle size={24} />;
      case 'cinematic-editing':
        return <Video size={24} />;
      case 'cover-art-visuals':
        return <Image size={24} />;
      default:
        return <Check size={24} />;
    }
  };

  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>WHAT WE OFFER</span>
        <h2 style={{ display: 'block', marginBottom: '1rem' }}>Studio Capabilities</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          We provide end-to-end solutions for your audio and visual projects. Select any service to access our real-time budget calculator and request a custom quote.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card glass-card">
            {/* Service Header Icon */}
            <div className="service-icon" style={{ color: service.accentColor, borderColor: `rgba(212,175,55,0.15)` }}>
              {renderServiceIcon(service.id)}
            </div>

            <h3>{service.title}</h3>
            <p className="service-desc">{service.description}</p>

            {/* Bullets List */}
            <ul className="service-bullets">
              {service.features.map((feat, idx) => (
                <li key={idx}>
                  <Check size={14} style={{ color: 'var(--accent-red)' }} />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Service Footer Price & Trigger */}
            <div className="service-footer">
              <span className="service-price">{service.price}</span>
              <button 
                className="service-action-btn"
                onClick={() => onSelectService(service)}
              >
                Get Quote
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
