import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import CertificatesModal from './CertificatesModal';
import './Achievements.css';

const achievementsList = [
  {
    name: "IBM AI Fundamentals Certificate (September 2025)",
    link: "https://drive.google.com/file/d/1eAJBddv_vK_dGcctMzsfws-CJccZy74k/view?usp=drive_link"
  },
  {
    name: "Introduction to Prompt Engineering with GitHub Copilot (July 2025)",
    link: "https://drive.google.com/file/d/1XuCydB5FHyj-FQnPK_P8czXW3WClY_RV/view?usp=sharing"
  },
  {
    name: "Introduction to Generative AI Studio (June 2025)",
    link: "https://drive.google.com/file/d/1ntGX2_HGDnieKxq2XJk4ou26cl2oMBtl/view?usp=sharing"
  },
  {
    name: "Gemini For Google Workspace (July 2025)",
    link: "https://drive.google.com/file/d/1EQAe5SUs4T8GjYs-HqPt8daTGLE6GDcR/view?usp=sharing"
  },
  {
    name: "Deloitte Cyber Job Simulations (June 2025)",
    link: "https://drive.google.com/file/d/1uOI1DuYabYraqWs5nw6ELN1V5h7KdC0l/view?usp=sharing"
  },
  {
    name: "Deloitte Data Analytics Job Simulations (June 2025)",
    link: "https://drive.google.com/file/d/1qdjhRLXqnHDLXspIuDFe6U0orwE10xJm/view?usp=sharing"
  },
  {
    name: "HP LIFE Introduction to Cyber Awareness (June 2025)",
    link: "https://drive.google.com/file/d/1PrCbjbg8Pf1UNiy0CP9tvlmtJzHVSiOH/view?usp=sharing"
  },
  {
    name: "HP LIFE Data Science and Analytics Certificate (Dec 2024)",
    link: "https://drive.google.com/file/d/1mA3nA3lFi75fBMKe5vgICC2hyBy2CxLN/view?usp=sharing"
  },
  {
    name: "MERN Stack Web Development Certificate (Aug 2024)",
    link: "https://drive.google.com/file/d/1Q5YgIwjf9gDVtb-UObQga8yWUOxJgj8l/view?usp=sharing"
  },
  {
    name: "Python Data Science Project Certificate (April 2024)",
    link: "https://drive.google.com/file/d/11SnydV-zYlsEN6FXk3hTmrsZjLdN-4Jz/view?usp=sharing"
  },
  {
    name: "Python Data Science Project Completion (March 2024)",
    link: "https://drive.google.com/file/d/1a3cN6FYFy5bd6H82UbnQnumIpB5EhefT/view?usp=sharing"
  },
  {
    name: "Python 101 For Data Science (April2024)",
    link: "https://drive.google.com/file/d/15IlTQACmqQX4NZOvtPI-1zK20_i4bDVY/view?usp=sharing"
  }
];

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // We show top 4 on the main page, and ALL 13 in the Modal overlay.
  const displayedAchievements = achievementsList.slice(0, 4);

  return (
    <section id="achievements" className="container achievements-section">
      <div className="section-header">
        <span className="section-number">04.</span>
        <h2>Milestones & Certifications</h2>
        <div className="section-line"></div>
      </div>

      <div className="achievements-card card">
        <ul className="achievements-list">
          {displayedAchievements.map((item, idx) => (
            <li key={idx}>
              <Award size={20} className="achievement-icon" />
              <a href={item.link} target="_blank" rel="noreferrer" className="achievement-link">
                <span>{item.name}</span>
                <ExternalLink size={14} className="hover-icon" />
              </a>
            </li>
          ))}
        </ul>

        <div className="view-all-container">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary view-all-btn"
          >
            <ExternalLink size={18} /> View All Certificates
          </button>
        </div>
      </div>

      <CertificatesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificates={achievementsList}
      />
    </section>
  );
};

export default Achievements;
