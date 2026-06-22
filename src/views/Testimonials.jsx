import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

/**
 * Client Reviews & Testimonials View
 */
export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Lil Kiddo",
      role: "Trap Artist / Vocalist",
      quote: "19Production produced the beat and engineered the vocals for my last mixtape. The mix is absolutely insane—it punches harder than anything I've released before. The bass hits different, and the vocals sit perfectly in the center. 10/10 will shoot my next music video with them too.",
      stars: 5,
      init: "LK"
    },
    {
      id: 2,
      name: "Samira Sen",
      role: "Commercial Fashion Model",
      quote: "We shot a brand promotional video with the crew. They storyboarded the entire conceptual model reel, set up dynamic colored neon lighting, and used a RED camera to capture closeups. The editing with speed ramps and visual transitions made the promo look extremely premium.",
      stars: 5,
      init: "SS"
    },
    {
      id: 3,
      name: "T-Spit",
      role: "Hip Hop Lyricist / YouTuber",
      quote: "My YouTube shorts and Instagram reels editing used to take hours and had zero retention. 19P redesigned my dynamic kinetic captions, added punchy sound effects, and color graded the logs. My followers grew by 35% in a single month of consistent posting. Highly recommended!",
      stars: 5,
      init: "TS"
    },
    {
      id: 4,
      name: "Shadow Records",
      role: "Indie Music Label",
      quote: "We delegated 4 full-length cinematic shoots and mixing-mastering packages for our label artists. The crew delivered ahead of schedule. The DaVinci Resolve color grading and macro-shot overlays in the video edits were outstanding. Fully professional crew.",
      stars: 5,
      init: "SR"
    }
  ];

  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>CLIENT REVIEWS</span>
        <h2 style={{ display: 'block', marginBottom: '1rem' }}>Artist & Brand Feedback</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Hear from the rappers, singers, fashion models, and creative brands that have recorded in our booth, licensed our trap instrumentals, and shot music videos with us.
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((rev) => (
          <div key={rev.id} className="testimonial-card glass-card">
            {/* Quote Icon */}
            <div style={{ color: 'var(--accent-red)', opacity: 0.15, position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <MessageSquare size={48} />
            </div>

            {/* Stars Row */}
            <div style={{ display: 'flex', gap: '2px', color: '#ff9600', marginBottom: '1.2rem' }}>
              {Array(rev.stars).fill(0).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" />
              ))}
            </div>

            <p className="testimonial-quote">"{rev.quote}"</p>

            {/* Review User Info */}
            <div className="testimonial-user">
              <div className="user-avatar-placeholder">
                {rev.init}
              </div>
              <div className="user-details">
                <span className="user-name">{rev.name}</span>
                <span className="user-role">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
