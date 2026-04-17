import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Framer Motion Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* The Scroll Progress Beam */}
      <motion.div
        className="scroll-progress-beam"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--primary-color)',
          transformOrigin: '0%',
          scaleX: scaleX,
          zIndex: 9999,
          boxShadow: '0 0 15px var(--primary-color), 0 0 5px var(--primary-color)'
        }}
      />
      <div className="container nav-container">
        <div className="logo">
          <a href="#">V.Mohan<span className="dot">.</span></a>
        </div>

        <div className="nav-links desktop-only">
          <a href="#about"><span className="nav-num">01.</span> About</a>
          <a href="#projects"><span className="nav-num">02.</span> Projects</a>
          <a href="#skills"><span className="nav-num">03.</span> Skills</a>
          <a href="#achievements"><span className="nav-num">04.</span> Achievements</a>
          <a href="#contact"><span className="nav-num">05.</span> Contact</a>
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
          <a href="#about" onClick={() => setMobileMenuOpen(false)}><span className="nav-num">01.</span> About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}><span className="nav-num">02.</span> Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}><span className="nav-num">03.</span> Skills</a>
          <a href="#achievements" onClick={() => setMobileMenuOpen(false)}><span className="nav-num">04.</span> Achievements</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}><span className="nav-num">05.</span> Contact</a>
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
