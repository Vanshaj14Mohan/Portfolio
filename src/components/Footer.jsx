import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="terminal-prompt">
              <span className="term-user">vanshaj</span>
              <span className="term-at">@</span>
              <span className="term-host">portfolio</span>
              <span className="term-colon">:</span>
              <span className="term-path">~$</span>
              <span className="term-cursor">_</span>
            </h3>
            <p className="footer-tagline">Transforming complex data into actionable insights.</p>
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
