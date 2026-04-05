import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <div className="section-header">
        <span className="section-number">01.</span>
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-content">
        {/* Left Column: Portrait Profile Picture */}
        {/* RECOMMENDATION: Do not use Google Drive links here as they often block direct loading. Instead, save your photo in the public/ folder as profile.jpg and change src to "/profile.jpg" */}
        <div className="about-image-wrapper">
          <img
            src="/My Picture.jpg"
            alt="Vanshaj Profile"
            className="profile-image"
          />
        </div>

        {/* Right Column: Text & Timelines */}
        <div className="about-details-wrapper">
          <div className="about-text card">
            <p>
              Hello! My name is Vanshaj, and I enjoy turning complex datasets into powerful
              visualizations and automated workflows. My interest in data science stems from a
              desire to find the hidden stories within numbers.
            </p>
            <p>
              Currently, I am pursuing my <strong>Master of Computer Applications</strong> at Christ University while also
              completing a Credit Linked Program in Data Science at IIT Guwahati. This combination allows me
              to bridge the gap between heavy statistical modeling and robust software engineering.
            </p>
            <p>
              Recently, as a Data Science Intern at <strong>Digipodium</strong>, I optimized real-time computer vision pipelines,
              achieving 25-35 FPS on live gesture recognition software. I am also highly active in open-source
              communities, acting as a contributor for GirlScript Summer of Code and Social Summer of Code.
            </p>
          </div>

          {/* Education and Experience Timelines Side-by-Side */}
          <div className="about-timelines">
            <div className="sidebar-card card">
              <h3><GraduationCap size={20} /> Education</h3>
              <ul className="timeline">
                <li>
                  <h4>Data Science Program</h4>
                  <span className="date">2025-2026 | IIT Guwahati</span>
                </li>
                <li>
                  <h4>Master of Computer Applications</h4>
                  <span className="date">2024-2026 | Christ University</span>
                </li>
                <li>
                  <h4>BSc Statistics & Computer Science</h4>
                  <span className="date">2020-2023 | Lucknow University</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-card card">
              <h3><Briefcase size={20} /> Experience</h3>
              <ul className="timeline">
                <li>
                  <h4>React Developer</h4>
                  <span className="date">Jan '26 - Apr '26 | Lasa Finance</span>
                </li>
                <li>
                  <h4>Data Science Intern</h4>
                  <span className="date">May '25 - Jun '25 | Digipodium</span>
                </li>
                <li>
                  <h4>Open Source Contributor</h4>
                  <span className="date">2025 | GSSoC & SSoC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
