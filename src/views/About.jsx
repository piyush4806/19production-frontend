import React from 'react';
import { Award, Zap, HardDrive, Compass, ChevronRight, Speaker } from 'lucide-react';

/**
 * About Brand & Studio View
 */
export default function About() {
  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>WHO WE ARE</span>
        <h2 style={{ display: 'block', marginBottom: '1.5rem' }}>Behind 19Production</h2>
      </div>

      <div className="about-grid">
        {/* Story Intro Column */}
        <div className="about-intro-col">
          <h3>Sound & Visuals That Hit Different</h3>
          <p>
            Established in <strong>2026</strong>, 19Production was born out of a desire to bridge the gap between high-fidelity sound production and raw, cinematic visuals. We don't just record tracks or edit clips—we craft high-impact creative identities for modern artists, rappers, vocalists, and digital creators.

          </p>
          <p>
            Our core creative philosophy takes inspiration from modern hip-hop imagery, high-contrast lighting, and gritty, fast-paced editing styles similar to Travis Scott's projects. We ensure that every beat we lease, every stem we master, and every frame we deliver contains maximum impact and commercial competitive edge.
          </p>

          {/* Quick Stats Panel */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">50+</div>
              <div className="stat-label">Videos Shot</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">200+</div>
              <div className="stat-label">Beats Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2026</div>
              <div className="stat-label">Year Started</div>
            </div>

          </div>
        </div>

        {/* Gear and Hardware Column */}
        <div className="gear-col">
          <h3>The Weaponry (Studio & Gear)</h3>
          <p style={{ marginBottom: '2rem' }}>
            A creative vision is only as good as the tools that capture it. We utilize industry-standard recording, filming, and post-production equipment to ensure stunning results.
          </p>

          <div className="gear-grid">
            {/* Audio Gear Card */}
            <div className="gear-card">
              <span className="gear-category">Audio Capture & SSL</span>
              <h4 className="gear-title">Recording & Synthesizers</h4>
              <ul className="gear-list">
                <li>Neumann U87 Condenser Mic</li>
                <li>Apollo Twin X Quad Interface</li>
                <li>SSL Analog Mastering Bus</li>
                <li>Yamaha HS8 Studio Monitors</li>
              </ul>
            </div>

            {/* Video Gear Card */}
            <div className="gear-card">
              <span className="gear-category">Visual capture</span>
              <h4 className="gear-title">Cinematic Camera Rigs</h4>
              <ul className="gear-list">
                <li>RED Komodo 6K Camera</li>
                <li>Sony FX3 (A-Roll & Gimbal)</li>
                <li>Sigma Art Premium Prime Lenses</li>
                <li>Aputure LED Studio Lighting</li>
              </ul>
            </div>

            {/* Software Workstations */}
            <div className="gear-card software-card">
              <span className="gear-category">Post-Production</span>
              <h4 className="gear-title">Editing & Production Suites</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                We execute all edits and audio engineering in professional, fully licensed software environments:
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '0.8rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={12} style={{ color: 'var(--accent-red)' }} /> Pro Tools / Ableton Live</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={12} style={{ color: 'var(--accent-red)' }} /> FL Studio (Beats & Compositions)</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={12} style={{ color: 'var(--accent-red)' }} /> Premiere Pro & DaVinci Resolve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
