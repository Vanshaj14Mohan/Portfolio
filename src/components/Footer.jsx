import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import MatrixRain from './MatrixRain';
import './Footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [clicks, setClicks] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyrightClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks === 3) {
      setShowMatrix(true);
      setClicks(0);
      
      // Auto-hide after 8 seconds
      setTimeout(() => setShowMatrix(false), 8000);
    }
  };

  return (
    <footer className="footer-section">
      {showMatrix && <MatrixRain />}
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
            <span 
               onClick={handleCopyrightClick} 
               style={{ cursor: 'pointer', userSelect: 'none' }}
               title="Click me 3 times!"
            >
              &copy;
            </span> {new Date().getFullYear()} Vanshaj P Mohan. All rights reserved.
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
