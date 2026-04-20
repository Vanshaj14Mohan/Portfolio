import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Spy Scroll mechanic
      const sections = ['about', 'projects', 'skills', 'achievements', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Adjust 100 for navbar height offset
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#">V.Mohan<span className="dot">.</span></a>
        </div>

        <div className="nav-links desktop-only">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}><span className="nav-num">01.</span> About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}><span className="nav-num">02.</span> Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}><span className="nav-num">03.</span> Skills</a>
          <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}><span className="nav-num">04.</span> Achievements</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}><span className="nav-num">05.</span> Contact</a>
        </div>

        <div className="social-links desktop-only">
          <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/vanshajpmohan/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="#contact" className="btn btn-primary btn-sm">Let's Connect</a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}><span className="nav-num">01.</span> About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}><span className="nav-num">02.</span> Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}><span className="nav-num">03.</span> Skills</a>
          <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}><span className="nav-num">04.</span> Achievements</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}><span className="nav-num">05.</span> Contact</a>
        </div>
        <div className="mobile-social-links">
          <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer"><Github size={22} /></a>
          <a href="https://www.linkedin.com/in/vanshajpmohan/" target="_blank" rel="noreferrer"><Linkedin size={22} /></a>
        </div>
        <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Let's Connect</a>
      </div>
    </nav>
  );
};

export default Navbar;
