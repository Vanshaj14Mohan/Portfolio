import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const MagneticIcon = ({ children, href }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a 
      href={href} 
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="magnetic-item"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </a>
  );
};

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
          
          <div className="footer-socials">
             <MagneticIcon href="https://github.com"><Github size={20}/></MagneticIcon>
             <MagneticIcon href="https://linkedin.com"><Linkedin size={20}/></MagneticIcon>
             <MagneticIcon href="mailto:vanshaj@example.com"><Mail size={20}/></MagneticIcon>
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
