import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium Glassmorphic Navigation Header (Circular Badge Logo, Theme Toggler, Glowing CTAs)
 */
export default function Navbar({ activePage, onNavigate, isAudioPlaying, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" style={{ backdropFilter: 'var(--glass-blur)', background: 'var(--glass-bg)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 2rem' }}>
        {/* Brand Identity / Logo - Circular badge completely removes square box look */}
        <motion.button 
          className="brand-logo" 
          onClick={() => handleNavigate('home')}
          onDoubleClick={() => handleNavigate('admin')}
          style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', outline: 'none' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/logo_original.jpg" 
            alt="19Production Logo" 
            style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: 'none' }} 
          />
          <div className="brand-name" style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.08em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--accent-red)' }}>19</span>PRODUCTION
          </div>
        </motion.button>

        {/* Widescreen Main Links */}
        <nav className="desktop-only">
          <ul className="nav-links" style={{ display: 'flex', gap: '1.8rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                <button 
                  onClick={() => handleNavigate(item.id)}
                  style={{ background: 'none', border: 'none', color: activePage === item.id ? 'var(--accent-red)' : 'var(--text-secondary)', fontWeight: 700, fontSize: '0.85rem', padding: '0.5rem 0', cursor: 'pointer', transition: 'color 0.2s ease', outline: 'none' }}
                >
                  {item.label}
                </button>
                {activePage === item.id && (
                  <motion.div 
                    layoutId="activeNavLine" 
                    className="active-line-indicator"
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--accent-red)', borderRadius: '2px' }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Widgets (Right) */}
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          {/* Active Audio Wave Indicator */}
          {isAudioPlaying && (
            <div className="nav-audio-widget fade-in-view" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Mix</span>
              <div className="nav-audio-waves">
                <div className="nav-audio-bar" />
                <div className="nav-audio-bar" />
                <div className="nav-audio-bar" />
                <div className="nav-audio-bar" />
              </div>
            </div>
          )}

          {/* Dynamic Theme Switcher */}
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'var(--btn-sec-bg)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              width: '36px',
              height: '36px',
              boxShadow: 'var(--glass-shadow)'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: 'var(--accent-red)' }} /> : <Moon size={18} style={{ color: 'var(--accent-red)' }} />}
          </motion.button>

          {/* Booking shortcut CTA - Premium Glowing Gold Button */}
          <motion.button 
            className="nav-cta-btn" 
            onClick={() => handleNavigate('contact')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(124, 58, 237, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: 'var(--accent-red)', 
              color: '#fff', 
              border: 'none', 
              padding: '0.55rem 1.2rem', 
              borderRadius: '99px', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              cursor: 'pointer', 
              letterSpacing: '0.03em',
              boxShadow: '0 4px 12px var(--accent-red-glow)'
            }}
          >
            Book Session
          </motion.button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          title="Toggle Navigation Menu"
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', outline: 'none' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}
          >
            <ul className="mobile-nav-list" style={{ listStyle: 'none', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {navItems.map((item) => (
                <li 
                  key={item.id}
                  className={`mobile-nav-item ${activePage === item.id ? 'active' : ''}`}
                >
                  <button 
                    onClick={() => handleNavigate(item.id)}
                    style={{ background: 'none', border: 'none', color: activePage === item.id ? 'var(--accent-red)' : 'var(--text-primary)', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                <button 
                  className="nav-cta-btn" 
                  style={{ width: '100%', background: 'var(--accent-red)', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '99px', fontWeight: 800, fontSize: '0.95rem' }}
                  onClick={() => handleNavigate('contact')}
                >
                  Book Session
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
