import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-text-group">
          <p>Built with React & Vite by Vanshaj P Mohan.</p>
          <p className="footer-subtext">Designed for performance and data-driven insights.</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vanshajpmohan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/VanshajKum1406" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:vanshajkumar145@gmail.com" aria-label="Mail">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
