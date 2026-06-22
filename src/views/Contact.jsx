import React, { useState } from 'react';
import { Mail, MessageSquare, Send, ShieldCheck, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Contact & Advanced Session Booking View (With Glowing highlights for WhatsApp, Instagram and Email)
 */
export default function Contact({ onSubmitInquiry }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Beat Production');
  const [budget, setBudget] = useState('₹15,000 - ₹30,000');
  const [brief, setBrief] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = [
    'Under ₹5,000',
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹30,000',
    '₹30,000 - ₹60,000',
    '₹60,000 - ₹1,500,000',
    '₹1,500,000+'
  ];

  const services = [
    'Beat Production',
    'Mixing & Mastering',
    'Music Recording Session',
    'Cinematic Video Shoot',
    'Music Video Editing',
    'Reels / Shorts Editing Package',
    'Cinematic Short Film Edit',
    'Cover Art & Spotify Canvas',
    'Custom Production Package'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const inquiryData = {
      id: "inq-" + Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      clientName: name,
      clientEmail: email,
      clientInstagram: instagram || 'N/A',
      clientPhone: phone || 'N/A',
      requestedService: service,
      extras: `Budget: ${budget}`,
      estimatedQuote: budget,
      projectBrief: brief || 'No additional project brief provided.',
      status: 'pending'
    };

    onSubmitInquiry(inquiryData);
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hey 19Production Crew! I just submitted a booking inquiry:\n\n` +
      `• Name: ${name}\n` +
      `• Service: ${service}\n` +
      `• Budget: ${budget}\n` +
      `• Brief: ${brief}\n\n` +
      `Let's connect and lock down a session!`
    );
    window.open(`https://wa.me/917021237875?text=${text}`, '_blank');
  };


  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.55 }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>LET'S COLLABORATE</span>
        <h2 style={{ display: 'block', marginBottom: '1rem' }}>Secure a Session</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Have an upcoming single, model shoot, or cinematic music video? Fill out our booking form or ping our crew directly on WhatsApp/Instagram.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact info credentials */}
        <div className="contact-info-col">
          <h3>19Production Crew</h3>
          <p className="contact-info-desc">
            We operate out of our premium studio environment. Let's discuss your project timelines, arrangements, and editing aesthetics.
          </p>

          <div className="contact-info-links">
            <div className="contact-link-item">
              <div className="contact-icon-box" style={{ boxShadow: '0 0 10px rgba(124, 58, 237, 0.2)', color: 'var(--accent-red)' }}>
                <Mail size={18} />
              </div>
              <div>
                <span className="contact-label">Email Credentials</span>
                <div className="contact-val" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>contact@19production.com</div>
              </div>
            </div>

            <div className="contact-link-item">
              <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.1)', borderColor: '#25D366', color: '#25D366', boxShadow: '0 0 10px rgba(37, 211, 102, 0.3)' }}>
                <PhoneCall size={18} fill="currentColor" />
              </div>
              <div>
                <span className="contact-label" style={{ color: '#25D366', fontWeight: 800 }}>WhatsApp & Call</span>
                <div className="contact-val" style={{ color: '#25D366', fontWeight: 900, textShadow: '0 0 10px rgba(37, 211, 102, 0.4)', fontSize: '1.1rem' }}>+91 70212 37875</div>
              </div>

            </div>

            <div className="contact-link-item">
              <div className="contact-icon-box">
                <MessageSquare size={18} />
              </div>
              <div>
                <span className="contact-label">Location Base</span>
                <div className="contact-val">Mumbai, Maharashtra - Global Remote & On-Site</div>
              </div>
            </div>
          </div>

          {/* Social Direct Buttons with vibrant high-frequency glows */}
          <div className="contact-social-buttons" style={{ display: 'flex', gap: '0.8rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <motion.button 
              className="social-action-btn btn-whatsapp"
              onClick={() => window.open('https://wa.me/917021237875', '_blank')}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(37, 211, 102, 0.7)' }}

              whileTap={{ scale: 0.97 }}
              style={{ 
                background: '#25D366', 
                color: '#fff', 
                border: 'none', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 800, 
                cursor: 'pointer',
                boxShadow: '0 0 12px rgba(37, 211, 102, 0.4)'
              }}
            >
              <PhoneCall size={16} />
              WhatsApp Quick Chat
            </motion.button>
            
            <motion.button 
              className="social-action-btn btn-instagram"
              onClick={() => window.open('https://www.instagram.com/19production?igsh=NXJwMnN3MjBqMzEx', '_blank')}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(220, 39, 102, 0.6)' }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
                color: '#fff', 
                border: 'none', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 800, 
                cursor: 'pointer',
                boxShadow: '0 0 12px rgba(220, 39, 102, 0.3)'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram DM Direct
            </motion.button>
          </div>
        </div>

        {/* Booking intake form */}
        <div className="booking-form-card glass-card">
          {!isSuccess ? (
            <>
              <h3>Project Intake Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Artist / Brand Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Lil Shadow" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="contact@19production.com" 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Instagram Handle</label>
                    <input 
                      type="text" 
                      value={instagram} 
                      onChange={(e) => setInstagram(e.target.value)} 
                      placeholder="@yourusername" 
                    />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="+91 70212 37875" 
                    />
                  </div>

                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Requested Service</label>
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                      {services.map((serv, idx) => (
                        <option key={idx} value={serv} style={{ background: 'var(--bg-pure)', color: 'var(--text-primary)' }}>{serv}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Project Budget</label>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt} style={{ background: 'var(--bg-pure)', color: 'var(--text-primary)' }}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Brief / Vibe / Reference Tracks</label>
                  <textarea 
                    rows={4} 
                    value={brief} 
                    onChange={(e) => setBrief(e.target.value)} 
                    placeholder="Tell us about your single concept, visual aesthetics, speed caption preferences, references..."
                    style={{ resize: 'none' }}
                  />
                </div>

                <motion.button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', boxShadow: '0 0 15px var(--accent-red-glow)' }}
                  whileHover={{ scale: 1.01, boxShadow: '0 0 25px var(--accent-red-glow)' }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Send size={18} />
                  Submit Booking Request
                </motion.button>
              </form>
            </>
          ) : (
            /* Success Response Block */
            <div className="form-success-banner" style={{ display: 'block', border: '1px solid #1ebd58', background: 'rgba(30, 189, 88, 0.05)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', background: 'rgba(30, 189, 88, 0.1)', width: '60px', height: '60px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: '#1ebd58', marginBottom: '1.5rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>Intake Form Received!</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Your project brief for <strong>{service}</strong> has been logged into our database. The 19Production crew will review it immediately. Want to fast-track your booking? Bounce the details directly to our WhatsApp!
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', background: '#25d366', color: '#fff', border: 'none', justifyContent: 'center', boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)' }}
                  onClick={handleWhatsAppRedirect}
                >
                  <PhoneCall size={16} />
                  Fast-Track on WhatsApp
                </button>
                <button 
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setInstagram('');
                    setPhone('');
                    setBrief('');
                    setIsSuccess(false);
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
