import React from 'react';
import { ArrowRight, Film, Flame, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';

/**
 * Home Landing Page View (Upgraded Minimalist Matte-Titanium Theme, Simplified CTAs & Shadows Removed)
 */
export default function Home({ onNavigate }) {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="fade-in-view"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ position: 'relative' }}
    >
      {/* Animated Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Three.js 3D Interactive Ambient Scene (Warm Gold/Bronze Starfield) */}
        <ThreeBackground />

        {/* Minimal ambient light overlays (shadows and heavy glow pulses removed) */}
        <div className="hero-ambient-orbs" style={{ pointerEvents: 'none' }}>
          <div className="ambient-orb orb-1" style={{ filter: 'none', background: 'none' }} />
          <div className="ambient-orb orb-2" style={{ filter: 'none', background: 'none' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div className="hero-content" variants={itemVariants}>
              <div className="hero-tagline">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-red)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em' }}>
                  <Flame size={14} fill="currentColor" />
                  STATIONED IN 2026
                </span>
              </div>
              
              {/* Monochromatic Solid Title (No glowing drop shadow as requested) */}
              <h1 className="hero-title" style={{ fontWeight: 950, letterSpacing: '-0.02em', margin: '0.5rem 0 1.2rem 0', color: 'var(--text-primary)', textShadow: 'none' }}>
                19PRODUCTION
              </h1>
              
              <p className="hero-description" style={{ color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '2.2rem', textShadow: 'none' }}>
                Creating cinematic audio and visuals that hit different. We specialize in custom high-fidelity music composition, master mixing, cinematic 4K/6K video shoots, and gritty post-production editing for modern artists, brands, and content creators.
              </p>
              
              {/* Premium Matte Button Styling (Shadows and glows completely removed, high-contrast flat layout) */}
              <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.button 
                  className="btn-primary" 
                  onClick={() => onNavigate('services')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ boxShadow: 'none', textShadow: 'none', border: '1px solid var(--accent-red)' }}
                >
                  <Film size={18} />
                  Book a Shoot
                </motion.button>
                <motion.button 
                  className="btn-secondary" 
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ boxShadow: 'none', textShadow: 'none' }}
                >
                  Contact Crew
                </motion.button>
              </div>

              {/* Connect strip */}
              <div className="hero-social-strip" style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span className="social-title" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 800 }}>Connect:</span>
                <div className="social-icons-row" style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.instagram.com/19production?igsh=NXJwMnN3MjBqMzEx" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://wa.me/917021237875" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Flat Solid Logo Visual (Container removed, perfect fit image directly) */}
            <motion.div 
              className="hero-visual" 
              variants={itemVariants}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img 
                src="/logo_original.jpg" 
                alt="19Production Official Logo" 
                className="hero-logo-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Visual Masterpieces (Featuring 19Production Video Shoots) */}
      <section className="featured-row" style={{ padding: '4.5rem 0', background: 'var(--bg-pure)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header-compact" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '0.08em' }}>EXCLUSIVE DROPS</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginTop: '0.2rem', color: 'var(--text-primary)' }}>Featured Project Shoots</h3>
            </div>
            <button 
              style={{ background: 'none', border: 'none', color: 'var(--accent-red)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', fontSize: '0.85rem' }}
              onClick={() => onNavigate('gallery')}
            >
              Explore Gallery <ArrowRight size={16} />
            </button>
          </div>

          <div className="featured-releases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Project Card 1: Made For Bollywood */}
            <div className="release-card glass-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem', boxShadow: 'none' }}>
              <div 
                className="release-art"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '6px', 
                  backgroundImage: 'url("https://img.youtube.com/vi/tl4qmWOXYfo/maxresdefault.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: 'none'
                }}
              />
              <div className="release-info" style={{ flexGrow: 1 }}>
                <span className="release-tag" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-red)' }}>LATEST VIDEO RELEASE</span>
                <h4 className="release-title" style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '0.1rem', color: 'var(--text-primary)' }}>Made For Bollywood</h4>
                <p className="release-desc" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Official Music Video (Directorial Project by Bhavesh)</p>
              </div>
              <button 
                className="btn-secondary" 
                style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px', justifyContent: 'center', display: 'flex', alignItems: 'center', boxShadow: 'none', border: '1px solid var(--border-subtle)' }}
                onClick={() => onNavigate('gallery')}
                title="Watch Video"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Project Card 2: Neon Vibe */}
            <div className="release-card glass-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem', boxShadow: 'none' }}>
              <div 
                className="release-art"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '6px', 
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: 'var(--accent-red)',
                  boxShadow: 'none'
                }}
              >
                NV
              </div>
              <div className="release-info" style={{ flexGrow: 1 }}>
                <span className="release-tag" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-red)' }}>CINEMATIC SHOOT</span>
                <h4 className="release-title" style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '0.1rem', color: 'var(--text-primary)' }}>NEON VIBE VIDEO</h4>
                <p className="release-desc" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>Lil Shadow (4K Anamorphic Video Shoot)</p>
              </div>
              <button 
                className="btn-secondary" 
                style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px', justifyContent: 'center', display: 'flex', alignItems: 'center', boxShadow: 'none', border: '1px solid var(--border-subtle)' }}
                onClick={() => onNavigate('gallery')}
                title="Watch Video"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Director Profile Spotlight (With Recent Portrait Image & Shadows Removed) */}
      <section style={{ padding: '5.5rem 0', background: 'var(--bg-deep)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Owner Recent Portrait (Shadows completely removed, clean border styling) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                <div style={{ position: 'absolute', inset: '8px -8px -8px 8px', border: '1px solid var(--accent-red)', borderRadius: '8px', zIndex: 0 }} />
                <img 
                  src="/owner.jpg" 
                  alt="Bhavesh - Founder & Director" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', position: 'relative', zIndex: 1, border: '1px solid var(--border-subtle)' }}
                />
              </div>
            </motion.div>

            {/* Owner Bio (Flat Clean Styling) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '0.08em' }}>
                THE DIRECTIVE VOICE
              </span>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)', textShadow: 'none' }}>
                Meet Bhavesh <span style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-muted)' }}>(Founder & Director)</span>
              </h3>
              
              <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '1.05rem', borderLeft: '2px solid var(--accent-red)', paddingLeft: '1rem', margin: '1.2rem 0', textShadow: 'none' }}>
                "Born to express, not to impress."
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.8rem', textShadow: 'none' }}>
                Bhavesh founded 19Production in 2026 to bring a gritty, high-contrast, commercial-grade aesthetic to India's independent hip-hop scene and brand campaigns. Wearing both the director's cap and the primary executive headset, he pushes the boundary of modern visual storytelling.
              </p>

              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.2rem' }}>
                <div>
                  <h5 style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Cinematography</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Gritty lighting, anamorphic frames, fast speed-ramps.</p>
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Audio Engineering</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Heavy saturated compositions and crystal clear vocal staging.</p>
                </div>
              </div>

              <motion.button 
                className="btn-primary" 
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: 'none' }}
              >
                <Sparkles size={16} /> Connect Directly
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
