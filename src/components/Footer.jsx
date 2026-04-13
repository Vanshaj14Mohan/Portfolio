import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Vanshaj P Mohan</h3>
            <p className="footer-tagline">Transforming complex data into actionable insights.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vanshaj-p-mohan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vanshajmohan@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Vanshaj P Mohan. All rights reserved.
          </p>
          <p className="built-with">
            Built with React & Vite. Designed for performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
