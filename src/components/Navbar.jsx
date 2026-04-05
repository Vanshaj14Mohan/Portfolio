import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#">V.Mohan<span className="dot">.</span></a>
        </div>

        <div className="nav-links desktop-only">
          <a href="#about"><span className="nav-num">01.</span> About</a>
          <a href="#projects"><span className="nav-num">02.</span> Projects</a>
          <a href="#skills"><span className="nav-num">03.</span> Skills</a>
          <a href="#achievements"><span className="nav-num">04.</span> Achievements</a>
        </div>

        <div className="social-links desktop-only">
          <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/vanshajpmohan/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:vanshajkumar145@gmail.com" className="btn btn-primary btn-sm">Let's Connect</a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>01. About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>02. Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>03. Skills</a>
          <a href="#achievements" onClick={() => setMobileMenuOpen(false)}>04. Achievements</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
