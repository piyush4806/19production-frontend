import React, { useState, useEffect } from 'react';
import { X, Calculator, ShieldCheck, Mail, Send } from 'lucide-react';

/**
 * Booking & Interactive Quote Calculator Modal (Full INR Indian Rupees version)
 */
export default function BookingModal({ service, onClose, onSubmitInquiry }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [details, setDetails] = useState('');
  
  // Custom calculator state
  const [stems, setStems] = useState(false);
  const [rushDelivery, setRushDelivery] = useState(false);
  const [customVibe, setCustomVibe] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set baseline prices based on active service in INR
  const getBasePrice = () => {
    if (!service) return 0;
    if (service.id === 'beat-production') return 15000;
    if (service.id === 'mixing-mastering') return 7500;
    if (service.id === 'music-recording') return 3000;
    if (service.id === 'video-shoots') return 40000;
    if (service.id === 'music-video-editing') return 9000;
    if (service.id === 'reels-editing') return 5000;
    if (service.id === 'cinematic-editing') return 25000;
    if (service.id === 'cover-art-visuals') return 4000;
    return 5000;
  };

  // Recalculate price dynamically when options are toggled in INR
  useEffect(() => {
    const base = getBasePrice();
    let additions = 0;

    if (stems) additions += 3000; // Separate Stems Option in INR
    if (rushDelivery) additions += 5000; // Express Delivery Option in INR
    if (customVibe) additions += 4000; // Revision Option in INR

    setTotalPrice(base + additions);
  }, [service, stems, rushDelivery, customVibe]);

  // Handle inquiry submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const summaryOfExtras = [];
    if (stems) summaryOfExtras.push("Separate Stems/Tracks (+ ₹3,000)");
    if (rushDelivery) summaryOfExtras.push("Rush 48-Hour Delivery (+ ₹5,000)");
    if (customVibe) summaryOfExtras.push("Additional Revisions Pack (+ ₹4,000)");

    const inquiryData = {
      id: "inq-" + Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      clientName: name,
      clientEmail: email,
      clientInstagram: instagram || 'N/A',
      requestedService: service.title,
      extras: summaryOfExtras.join(', ') || 'Standard Package',
      estimatedQuote: `₹${totalPrice.toLocaleString('en-IN')}`,
      projectBrief: details || 'No brief provided.',
      status: 'pending'
    };

    onSubmitInquiry(inquiryData);
    setIsSubmitted(true);
  };

  if (!service) return null;

  return (
    <div className="checkout-modal-backdrop" onClick={onClose}>
      <div 
        className="checkout-card" 
        style={{ maxWidth: '520px', border: '1px solid var(--accent-red)' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', zIndex: 10 }}
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="checkout-header" style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>
                <Calculator size={20} />
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>Session & Project Calculator</span>
              </div>
              <h3 className="checkout-title" style={{ color: 'var(--text-primary)' }}>{service.title} Quote</h3>
            </div>

            {/* Interactive Calculator Configuration */}
            <div className="checkout-item-details" style={{ marginBottom: '1.2rem', background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                <span>Base Rate</span>
                <span>₹{getBasePrice().toLocaleString('en-IN')}</span>
              </div>

              {/* Extra Addons Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.8rem', color: 'var(--text-primary)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Custom Project Add-Ons</span>
                
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', cursor: 'pointer' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={stems} onChange={() => setStems(!stems)} style={{ accentColor: 'var(--accent-red)' }} />
                    Multitrack Stems/WAVs
                  </span>
                  <span style={{ color: 'var(--accent-red)' }}>+₹3,000</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', cursor: 'pointer' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={rushDelivery} onChange={() => setRushDelivery(!rushDelivery)} style={{ accentColor: 'var(--accent-red)' }} />
                    Rush 48hr Delivery
                  </span>
                  <span style={{ color: 'var(--accent-red)' }}>+₹5,000</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', cursor: 'pointer' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={customVibe} onChange={() => setCustomVibe(!customVibe)} style={{ accentColor: 'var(--accent-red)' }} />
                    Expanded Revisions Pack
                  </span>
                  <span style={{ color: 'var(--accent-red)' }}>+₹4,000</span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Estimated Budget</span>
                <span className="checkout-item-price" style={{ margin: 0, color: 'var(--accent-red)' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Quote Submission Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div className="form-grid-2" style={{ gap: '0.8rem', marginBottom: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Your Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Lil Shadow" style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.6rem 0.8rem', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Email Address *</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="contact@domain.com" style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.6rem 0.8rem', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Instagram Username</label>
                <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="@yourhandle" style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.6rem 0.8rem', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Project Details / Brief</label>
                <textarea rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Tell us about the vibe, references, shoot concepts..." style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.6rem 0.8rem', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', resize: 'none', outline: 'none' }} />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '0.75rem', justifyContent: 'center', marginTop: '0.5rem', fontSize: '0.85rem' }}
              >
                <Send size={16} />
                Submit Quote Request
              </button>
            </form>
          </>
        ) : (
          /* Submission Success State */
          <div className="checkout-pay-success-step" style={{ padding: '2rem 0 1rem 0', color: 'var(--text-primary)' }}>
            <div className="pay-success-icon" style={{ background: 'var(--accent-red-bg)', borderColor: 'var(--accent-red)' }}>
              <ShieldCheck size={32} style={{ color: 'var(--accent-red)' }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginTop: '1rem', color: 'var(--text-primary)' }}>Quote Request Sent!</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.5rem 0 1.5rem 0' }}>
              We have received your calculated brief for <strong>{service.title}</strong> valued around <strong>₹{totalPrice.toLocaleString('en-IN')}</strong>. Our crew will review the details and reach out on Instagram or Email within 24 hours.
            </p>
            <button 
              className="btn-secondary" 
              style={{ width: '100%', padding: '0.7rem', justifyContent: 'center', fontSize: '0.8rem' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
