import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Computer Vision & AI',
    skills: ['OpenCV', 'MediaPipe', 'Agentic AI', 'Gesture Recognition', 'TensorFlow', 'Scikit-learn', 'Pycaw']
  },
  {
    title: 'Data Science & Analytics',
    skills: ['Python', 'Pandas', 'NumPy', 'Predictive Modeling', 'Feature Engineering', 'Statistical Analysis']
  },
  {
    title: 'Data Visualization & BI',
    skills: ['Streamlit', 'Plotly', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Data Engineering & Cloud',
    skills: ['SQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS / Linux', 'Data Pipelines']
  },
  {
    title: 'Software & Web Dev',
    skills: ['C / C++', 'JavaScript', 'React.js', 'Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Developer Tools & UI',
    skills: ['Git / GitHub', 'Tailwind CSS', 'Bootstrap', 'Jupyter', 'Postman', 'Figma']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container skills-section">
      <div className="section-header">
        <span className="section-number">03.</span>
        <h2>Technical Arsenal</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div className="skill-category card" key={idx}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-dot"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
