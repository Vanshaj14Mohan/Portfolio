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

        {/* Python Terminal Toy */}
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
            <button className="terminal-run-btn interactive" onClick={runSim} disabled={isRunning}>
              <Play size={12} /> {isRunning ? "Running..." : "Run Sim"}
            </button>
          </div>
          <div className="terminal-body">
            <p className="code-comment"># Evaluate candidate potential</p>
            <p className="code-line"><span className="keyword">import</span> machine_learning <span className="keyword">as</span> ml</p>
            <p className="code-line"><span className="keyword">import</span> vanshaj</p>
            <br />
            <p className="code-line">model = ml.<span className="function">load_model</span>(<span className="string">'industry_standard_v2'</span>)</p>
            <p className="code-line">prediction = model.<span className="function">predict</span>(vanshaj.profile)</p>
            <br />

            {terminalOutput && (
              <div className="terminal-output animate-in">
                {terminalOutput.split('\n').map((line, i) => (
                  <p key={i} className="output-line">{line}</p>
                ))}
              </div>
            )}
            {!terminalOutput && <p className="code-prompt">&gt; Click 'Run Sim' to execute...</p>}
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

