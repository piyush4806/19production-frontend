import React, { useState } from 'react';
import { BarChart2, ShieldCheck, Mail, CheckCircle, Lock, LogOut } from 'lucide-react';

/**
 * Secret Administrative CMS Dashboard View (INR and Password-Protected Login Gate)
 */
export default function Admin({ 
  inquiries, 
  analytics, 
  onUpdateInquiryStatus,
  onExit
}) {
  const [activeTab, setActiveTab] = useState('analytics');

  // Dynamic login credential verification gate
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('19p_admin_auth') === 'true';
  });
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.toLowerCase() === 'admin' && pass === '19production') {
      setIsAuthenticated(true);
      sessionStorage.setItem('19p_admin_auth', 'true');
      setErrorMsg('');
    } else {
      setErrorMsg('❌ Invalid Username or Password. Please try again!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('19p_admin_auth');
    setUser('');
    setPass('');
  };

  if (!isAuthenticated) {
    return (
      <div className="container fade-in-view" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '3rem 0' }}>
        <div className="glass-card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', border: '1px solid var(--border-accent)', borderRadius: '12px', background: 'var(--bg-card)', boxShadow: 'var(--glass-shadow)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', background: 'var(--accent-red-bg)', color: 'var(--accent-red)', width: '56px', height: '56px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1.5px solid var(--border-accent)' }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-primary)' }}>CMS Control Gate</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>Enter security credentials to unlock the administrative console.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {errorMsg && (
              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid #ef4444', color: '#ef4444', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem', textAlign: 'center', fontWeight: 700 }}>
                {errorMsg}
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 800 }}>Username *</label>
              <input 
                type="text" 
                required 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
                placeholder="admin" 
                style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.8rem 1rem', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 800 }}>Password *</label>
              <input 
                type="password" 
                required 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="••••••••" 
                style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', padding: '0.8rem 1rem', borderRadius: '6px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }} 
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', fontSize: '0.85rem', marginTop: '0.5rem', borderRadius: '99px' }}
            >
              Sign In to CMS
            </button>

            <button 
              type="button" 
              onClick={onExit}
              className="btn-secondary" 
              style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', fontSize: '0.85rem', borderRadius: '99px', background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', cursor: 'pointer' }}
            >
              ← Exit to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container fade-in-view">
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-red)', fontWeight: 700, letterSpacing: '0.05em' }}>CONTROL CENTER</span>
        <h2 style={{ display: 'block', marginBottom: '0.5rem' }}>19Production CMS</h2>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Secret administrator dashboard to manage studio booking inquiries, review client project briefs, and inspect traffic analytics.
        </p>
      </div>

      <div className="admin-layout">
        {/* Sidebar Nav */}
        <div className="admin-sidebar">
          <div className="admin-sidebar-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 className="admin-sidebar-title">Admin<span>Panel</span></h4>
                <span className="admin-sidebar-subtitle">Local Secure Console</span>
              </div>
              <button 
                onClick={onExit} 
                title="Exit to Website"
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>

          <ul className="admin-nav">
            <li className={`admin-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}>
              <button onClick={() => setActiveTab('analytics')}>
                <BarChart2 size={16} />
                Analytics
              </button>
            </li>
            <li className={`admin-nav-item ${activeTab === 'inquiries' ? 'active' : ''}`}>
              <button onClick={() => setActiveTab('inquiries')}>
                <Mail size={16} />
                Quote requests ({inquiries.filter(i => i.status === 'pending').length})
              </button>
            </li>
            <li className="admin-nav-item" style={{ marginTop: 'auto', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <button onClick={handleLogout} style={{ color: 'var(--accent-red)' }}>
                <LogOut size={16} />
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="admin-main-panel">
          
          {/* Tab 1: Analytics Dashboard */}
          {activeTab === 'analytics' && (
            <div>
              <div className="admin-panel-header">
                <h3 className="admin-panel-title">Studio Analytics</h3>
              </div>

              <div className="admin-stats-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div className="admin-stat-card">
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Page Sessions</span>
                  <div className="admin-stat-val" style={{ color: 'var(--text-primary)' }}>{analytics.pageViews}</div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Live sessions tracked</span>
                </div>
                <div className="admin-stat-card">
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Quotes Submitted</span>
                  <div className="admin-stat-val" style={{ color: 'var(--text-primary)' }}>{inquiries.length}</div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-red)' }}>Quotes logged in DB</span>
                </div>
                <div className="admin-stat-card">
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Pending Action</span>
                  <div className="admin-stat-val" style={{ color: 'var(--text-primary)' }}>{inquiries.filter(i => i.status === 'pending').length}</div>
                  <span style={{ fontSize: '0.7rem', color: '#ff9600' }}>Awaiting callback</span>
                </div>
              </div>

              {/* Pure CSS Sleek Analytics Charts Bar */}
              <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700 }}>Traffic Engagement</h4>
              <div style={{ background: 'var(--bg-pure)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    <span>Traffic views</span>
                    <strong>{analytics.pageViews} visits</strong>
                  </div>
                  <div style={{ height: '8px', background: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, var(--accent-red-dark) 0%, var(--accent-red) 100%)', borderRadius: '4px' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Quote Intake Manager */}
          {activeTab === 'inquiries' && (
            <div>
              <div className="admin-panel-header">
                <h3 className="admin-panel-title">Incoming Quote Inquiries</h3>
              </div>

              {inquiries.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Client details</th>
                        <th>Service Required</th>
                        <th>Calculated Budget</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map((inq) => (
                        <tr key={inq.id}>
                          <td style={{ color: 'var(--text-secondary)' }}>{inq.date}</td>
                          <td style={{ color: 'var(--text-primary)' }}>
                            <div style={{ fontWeight: 700 }}>{inq.clientName}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{inq.clientEmail}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>IG: {inq.clientInstagram}</div>
                            {inq.clientPhone && <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Phone: {inq.clientPhone}</div>}
                          </td>
                          <td style={{ color: 'var(--text-primary)' }}>
                            <div>{inq.requestedService}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '300px', marginTop: '0.4rem', lineHeight: '1.4' }}>
                              <strong style={{color: 'var(--text-secondary)'}}>Brief:</strong> {inq.projectBrief}
                            </div>
                          </td>
                          <td style={{ fontWeight: 700, color: 'var(--accent-red)' }}>{inq.estimatedQuote}</td>
                          <td>
                            <span className={`admin-badge badge-${inq.status}`}>
                              {inq.status}
                            </span>
                          </td>
                          <td>
                            {inq.status === 'pending' ? (
                              <button 
                                className="admin-badge badge-contacted"
                                style={{ cursor: 'pointer', background: 'var(--accent-red-bg)', color: 'var(--accent-red)', border: '1px solid var(--accent-red)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                                onClick={() => onUpdateInquiryStatus(inq.id, 'contacted')}
                              >
                                <CheckCircle size={10} /> Mark contacted
                              </button>
                            ) : (
                              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Closed</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No quote inquiries have been submitted yet. Test booking systems to generate data!
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
