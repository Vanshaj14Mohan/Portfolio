import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Download, Code, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 1000 : 100, parseInt(Math.random() * 50 + 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="typewriter-text text-gradient">
      {`${words[index].substring(0, subIndex)}${subIndex === words[index].length ? "" : ""}`}
      <span className="cursor-blink">|</span>
    </span>
  );
};

const Hero = () => {
  const [terminalOutput, setTerminalOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runSim = () => {
    setIsRunning(true);
    setTerminalOutput("Initializing model...\nLoading datasets: Vanshaj_Resume.csv [OK]\nCompiling skills... 100%\n\n> predict(hire_vanshaj)\n");
    setTimeout(() => {
      setTerminalOutput(prev => prev + "[SYSTEM] Analyzing probability...\n");
      setTimeout(() => {
        setTerminalOutput(prev => prev + "\n>>> OUTPUT: 99.9% CHANCE OF SUCCESS\n>>> RECOMMENDATION: STRONG HIRE.");
        setIsRunning(false);
      }, 1200);
    }, 800);
  };

  return (
    <section id="hero" className="container hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <motion.div
            className="intro-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal size={16} /> Welcome to my workspace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="title-gradient">Vanshaj P Mohan</span>.<br />
            I am a <TypeWriter words={["Data Scientist", "Computer Vision Enthusiast", "MERN Developer"]} />
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Data Scientist and Developer finalizing my MCA at Christ University.
            I specialize in building real-time computer vision applications,
            interactive data dashboards, and intelligent ML pipelines. You can find me analyzing
            data or contributing to one of my 2,400+ GitHub contributions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Vanshaj Resume.pdf" download className="btn btn-secondary btn-outline">
              <Download size={18} /> Download CV
            </a>
            <a href="https://github.com/Vanshaj14Mohan" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub Profile
            </a>
          </motion.div>
        </div>

        {/* Python Terminal Toy - Fully Interactive Version */}
        <motion.div
          className="hero-terminal desktop-only"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="terminal-title"><Code size={14} /> predict_hire.py</div>
          </div>
          <div className="terminal-body" onClick={() => document.getElementById('terminal-input').focus()}>
            <p className="code-comment"># Welcome to the interactive Vanshaj console.</p>
            <p className="code-comment"># Type 'help' for commands, or 'python predict_hire.py'</p>
            <br />
            
            <div className="terminal-history">
              {terminalOutput.split('\n').map((line, i) => (
                <p key={i} className={line.startsWith('>>>') ? "output-line highlight-green" : "output-line"}>{line}</p>
              ))}
            </div>

            <div className="terminal-input-row" style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <span className="terminal-prompt" style={{ color: 'var(--primary-color)', marginRight: '8px' }}>~$</span>
              <input 
                id="terminal-input"
                type="text" 
                className="terminal-input"
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'var(--text-primary)', 
                  fontFamily: 'var(--mono-font)', 
                  outline: 'none', 
                  flex: 1,
                  fontSize: '0.9rem'
                }}
                autoComplete="off"
                disabled={isRunning}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const cmd = e.target.value.trim().toLowerCase();
                    e.target.value = '';
                    
                    setTerminalOutput(prev => prev + (prev ? '\n' : '') + `~$ ${cmd}`);
                    
                    if (cmd === 'python predict_hire.py') {
                      setIsRunning(true);
                      setTimeout(() => setTerminalOutput(prev => prev + '\nLoading parameters... [OK]'), 400);
                      setTimeout(() => setTerminalOutput(prev => prev + '\nAnalyzing Vanshaj.profile...'), 800);
                      setTimeout(() => {
                        setTerminalOutput(prev => prev + "\n>>> OUTPUT: 99.9% CHANCE OF SUCCESS\n>>> RECOMMENDATION: STRONG HIRE. REACH OUT IMMEDIATELY.");
                        setIsRunning(false);
                      }, 1600);
                    } else if (cmd === 'help') {
                      setTerminalOutput(prev => prev + '\nAvailable commands:\n- python predict_hire.py\n- clear\n- whoami');
                    } else if (cmd === 'clear') {
                      setTerminalOutput('');
                    } else if (cmd === 'whoami') {
                      setTerminalOutput(prev => prev + '\nrecruiter_guest');
                    } else if (cmd === '') {
                      // Do nothing for empty
                    } else {
                      setTerminalOutput(prev => prev + `\nCommand not found: ${cmd}. Type 'help' for options.`);
                    }
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="data-mesh-bg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      ></motion.div>
    </section>
  );
};

export default Hero;

