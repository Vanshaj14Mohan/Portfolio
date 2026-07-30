import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Vanshaj P Mohan</h3>
            <p className="footer-tagline">Transforming complex data into actionable insights.</p>
            <div className="status-widget">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for work</span>
              </div>
              <div className="status-time">
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Vanshaj P Mohan. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="back-to-top">
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
