import './App.css'
import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Lightbox from './components/Lightbox';
import Preloader from './components/Preloader';

// Views
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Portfolio from './views/Portfolio';
import Gallery from './views/Gallery';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';
import Admin from './views/Admin';

/**
 * Main 19Production Web Application Shell & Controller
 */
export default function App() {
  // Navigation Routing State
  const [activePage, setActivePage] = useState('home');
  
  // App Loading State
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic Data States (LocalStorage Synchronized)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('19p_theme') || 'dark'; // Cinematic Dark Mode as baseline default
  });
  const [portfolio, setPortfolio] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [analytics, setAnalytics] = useState({
    pageViews: 1,
    totalRevenue: 0
  });

  // Active Media Overlays State
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Modals Toggles State
  const [calculatorService, setCalculatorService] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  // Initialize Databases & LocalStorage on Mount
  useEffect(() => {
    // 1. Initial Portfolio Media
    fetch(`${import.meta.env.VITE_API_URL}/portfolio`)
      .then(res => res.json())
      .then(data => {
        setPortfolio(data);
        localStorage.setItem('19p_portfolio', JSON.stringify(data));
      })
      .catch(err => {
        console.error(err);
        const storedPortfolio = localStorage.getItem('19p_portfolio');
        if (storedPortfolio) {
          setPortfolio(JSON.parse(storedPortfolio));
        }
      });

    // 2. Initial Quote Inquiries from MongoDB
    fetch(`${import.meta.env.VITE_API_URL}/inquiries`)
      .then(res => res.json())
      .then(data => setInquiries(data))
      .catch(err => {
        console.error('Error fetching inquiries from DB:', err);
        const storedInquiries = localStorage.getItem('19p_inquiries_prod');
        if (storedInquiries) {
          setInquiries(JSON.parse(storedInquiries));
        }
      });

    // 3. Initial Analytics Tracker
    const storedAnalytics = localStorage.getItem('19p_analytics_prod');
    if (storedAnalytics) {
      const parsedAnalytics = JSON.parse(storedAnalytics);
      const updatedAnalytics = {
        ...parsedAnalytics,
        pageViews: parsedAnalytics.pageViews + 1
      };
      localStorage.setItem('19p_analytics_prod', JSON.stringify(updatedAnalytics));
      setAnalytics(updatedAnalytics);
    } else {
      const initialAnalytics = { pageViews: 1, totalRevenue: 0 };
      localStorage.setItem('19p_analytics_prod', JSON.stringify(initialAnalytics));
      setAnalytics(initialAnalytics);
    }
  }, []);

  // Synchronize dynamic theme state to HTML document element attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Dynamic SEO Title & Description Updater Hook
  useEffect(() => {
    let title = "19Production | Professional Music & Cinematic Video Production Studio";
    let description = "19Production specializes in heavy trap beat production, vocal mixing/mastering, professional 4K music video shoots, and gritty cinematic post-production editing for artists, brands, and content creators. Established 2026.";


    switch (activePage) {
      case 'home':
        title = "19Production | Professional Music & Cinematic Video Production Studio";
        break;
      case 'about':
        title = "About the Crew - Our Gear & Backstory | 19Production";
        description = "Discover the story of 19Production. Established in 2026, our studio crew utilizes industry-grade gear (Neumann U87 condenser mics, RED Komodo cameras) to capture high-fidelity compositions.";
        break;

      case 'services':
        title = "Audio Recording, Video Shoots & Gritty Editing Services | 19Production";
        description = "Explore 19Production's creative capabilities including vocal mixing/mastering, 4K camera shoots, reels editing, and visual cover arts. Get a customized quote instantly.";
        break;
      case 'beats-store':
        title = "Beats Store - Premium Trap, Drill, R&B & Boom Bap Instrumentals | 19Production";
        description = "Browse and license high-quality trap, drill, R&B, and boom bap beats in the 19Production Store. Includes instant multitrack stems and untagged WAV downloads after checkout.";
        break;
      case 'portfolio':
        title = "Cinematic Reels, Model Showcases & Music Video Portfolio | 19Production";
        description = "Watch music videos, vertical social reels, model showreels, and commercial editing projects directed and engineered by the 19Production team.";
        break;
      case 'gallery':
        title = "Behind the Scenes & Studio Vibe Gallery | 19Production";
        description = "Take a virtual tour inside the 19Production acoustically treated recording booth, colored neon studio lighting, and high-end cameras.";
        break;
      case 'testimonials':
        title = "Artist Reviews & Label Feedback | 19Production";
        description = "Read star-rated client reviews from rappers, singers, fashion models, and indie label managers speaking on their recording experience with 19Production.";
        break;
      case 'contact':
        title = "Book a Recording Session or 4K Video Shoot | 19Production";
        description = "Secure a session in our audio booth or schedule a music video shoot. Connect with the 19Production crew instantly via our intake form or WhatsApp direct fast-track.";
        break;
      case 'admin':
        title = "Secure CMS Control Console | 19Production";
        description = "Management console for tracking live analytics, reviewing custom quote requests, and managing store items.";
        break;
      default:
        break;
    }

    document.title = title;
    
    // Update Meta Description dynamically for standard SEO crawlers
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [activePage]);

  // Update Page Analytics on view swap
  const handleNavigation = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Increment page session metric in LocalStorage
    setAnalytics(prev => {
      const updated = { ...prev, pageViews: prev.pageViews + 1 };
      localStorage.setItem('19p_analytics_prod', JSON.stringify(updated));
      return updated;
    });
  };

  // Quote Intake Handlers
  const handleAddInquiry = async (inquiry) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry)
      });
      const savedInquiry = await response.json();
      setInquiries(prev => [savedInquiry, ...prev]);
    } catch (error) {
      console.error('Error saving inquiry:', error);
      // Fallback
      setInquiries(prev => {
        const updated = [inquiry, ...prev];
        localStorage.setItem('19p_inquiries_prod', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        setInquiries(prev => prev.map(inq => 
          inq.id === id ? { ...inq, status: newStatus } : inq
        ));
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error);
      // Fallback
      setInquiries(prev => {
        const updated = prev.map(inq => 
          inq.id === id ? { ...inq, status: newStatus } : inq
        );
        localStorage.setItem('19p_inquiries_prod', JSON.stringify(updated));
        return updated;
      });
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="app-container" data-theme={theme}>
      {/* Cinematic ambient gritty background texture overlay */}
      <div className="grain-overlay" />

      {/* Floating Glass Navigation Header with Theme Toggle */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigation} 
        isAudioPlaying={isPlaying}
        theme={theme}
        onToggleTheme={() => {
          const nextTheme = theme === 'dark' ? 'light' : 'dark';
          setTheme(nextTheme);
          localStorage.setItem('19p_theme', nextTheme);
        }}
      />

      {/* Primary Dynamic Main Routing View */}
      <main className="view-content">
        {activePage === 'home' && (
          <Home 
            onNavigate={handleNavigation} 
          />
        )}
        
        {activePage === 'about' && (
          <About />
        )}
        
        {activePage === 'services' && (
          <Services 
            onSelectService={(service) => setCalculatorService(service)}
          />
        )}
        
        {activePage === 'portfolio' && (
          <Portfolio 
            onSelectMedia={(item) => setLightboxItem(item)}
          />
        )}

        {activePage === 'gallery' && (
          <Gallery 
            onSelectImage={(img) => setLightboxItem(img)}
          />
        )}

        {activePage === 'testimonials' && (
          <Testimonials />
        )}

        {activePage === 'contact' && (
          <Contact 
            onSubmitInquiry={handleAddInquiry}
          />
        )}

        {activePage === 'admin' && (
          <Admin 
            inquiries={inquiries}
            analytics={analytics}
            onUpdateInquiryStatus={handleUpdateInquiryStatus}
            onExit={() => handleNavigation('home')}
          />
        )}
      </main>

      {/* Persistent Visual Footer */}
      <footer className="site-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#050505', padding: '3.5rem 0' }}>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>19<span>Production</span></h4>
              <p className="footer-desc" style={{ color: '#888', fontSize: '0.85rem' }}>
                Sound & Visuals That Hit Different. Studio-grade cinematic composition, mixing/mastering, 4K/6K filming, and post-production editing based in Mumbai.
              </p>
            </div>
            <div>
              <h5 className="footer-links-col">Explore Site</h5>
              <ul className="footer-links">
                <li><button onClick={() => handleNavigation('home')}>Home View</button></li>
                <li><button onClick={() => handleNavigation('about')}>About Backstory</button></li>
                <li><button onClick={() => handleNavigation('services')}>Studio Services</button></li>
              </ul>
            </div>
            <div>
              <h5 className="footer-links-col">Support & CMS</h5>
              <ul className="footer-links">
                <li><button onClick={() => handleNavigation('contact')}>Session Booking</button></li>
                <li><button onClick={() => handleNavigation('testimonials')}>Reviews</button></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', marginTop: '2.5rem', paddingTop: '1.5rem' }}>
            <p>© {new Date().getFullYear()} 19Production. All Rights Reserved. Tagline: Sound & Visuals That Hit Different.</p>
            <p style={{ fontSize: '0.7rem', color: '#555' }}>Designed by Google DeepMind Advanced Agentic AI</p>
          </div>
        </div>
      </footer>

      {/* Calculator Service Modal */}
      {calculatorService && (
        <BookingModal 
          service={calculatorService}
          onClose={() => setCalculatorService(null)}
          onSubmitInquiry={handleAddInquiry}
        />
      )}

      {/* Lightbox Modal */}
      {lightboxItem && (
        <Lightbox 
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </div>
  );
}
