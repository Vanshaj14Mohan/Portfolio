import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Twitter, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("vanshajkumar145@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="container contact-section">
      <motion.div
        className="section-header center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-number">05.</span>
        <h2>What's Next</h2>
        <div className="section-line"></div>
      </motion.div>

      <motion.div
        className="contact-content card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="contact-title">Connect with me</h3>
        <p className="contact-desc">
          I'm currently looking for new opportunities as a Data Scientist or Data Analyst.
          Whether you have a question, a project idea, or just want to network,
          I'll try my best to get back to you!
        </p>

        <a href="mailto:vanshajkumar145@gmail.com" className="btn btn-primary contact-btn">
          <Send size={18} /> Say Hello
        </a>

        <div className="contact-socials">
          <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vanshajpmohan/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/VanshajKum1406" target="_blank" rel="noreferrer" aria-label="X (Twitter)" title="X (Twitter)">
            <Twitter size={24} />
          </a>

          <div className="email-copy-container" style={{ position: 'relative' }}>
            <button
              onClick={copyEmail}
              aria-label="Copy Email"
              title="Copy vanshajkumar145@gmail.com"
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', padding: 0 }}
              className="social-icon-btn"
            >
              {copied ? <Check size={24} color="#00e5ff" /> : <Mail size={24} />}
            </button>
            {copied && (
              <span className="copied-tooltip">
                Email ID Copied!
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
