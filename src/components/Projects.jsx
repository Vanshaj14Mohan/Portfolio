import React, { useState } from 'react';
import { Github, ExternalLink, Activity, Folder, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './Projects.css';

const featuredProjects = [
  {
    title: 'Adidas Interactive Sales Dashboard',
    description: 'A comprehensive sales analytics dashboard built with Streamlit and Plotly providing real-time data visualization of Adidas performance metrics.',
    longDescription: 'This Streamlit-powered dashboard provides an interactive visualization of Adidas sales data with multiple analytical views. Key features include interactive Plotly charts, data expanders for detailed views, and download options for all visualized datasets. The dashboard offers a comprehensive overview of sales performance across different dimensions with a clean, user-friendly interface.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Excel'],
    github: 'https://github.com/Vanshaj14Mohan/Adidas-Project',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Retailer-wise total sales breakdown and monthly sales trends over time.',
      'State-level dimensions comparing total sales vs units sold.',
      'Regional and city sales distribution deep-dives via interactive treemaps.',
      'Additional insights into operating profit and granular unit pricing.',
      'Dynamic filters with data export capabilities to CSV/Excel formats.'
    ]
  },
  {
    title: 'WaveBrush & HandSight',
    description: 'An AI-powered real-time virtual painting system and gesture tracking pipeline using OpenCV and MediaPipe.',
    longDescription: 'WaveBrush is a real-time virtual painting application built using Python, OpenCV, and MediaPipe. It allows drawing and erasing through intuitive hand gestures, demonstrating computer vision’s potential in touchless interfaces, creative expression, and human-computer interaction, forming a foundation for future gesture-based interactive applications.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    github: 'https://github.com/Vanshaj14Mohan',
    link: '#',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Modular hand tracking approach for precise landmark detection.',
      'Allows drawing, erasing, and switching colors using hand gestures only — no mouse required.',
      'Optimized performance to achieve 25–35 FPS rendering in real-time.',
      'Forms a robust foundation for future touchless interfaces and gesture-based HCI.'
    ]
  },
  {
    title: 'SuperstoreViz Analytics Tool',
    description: 'A dynamic data visualization web application that enables users to upload custom datasets and explore dynamic trends through rich visual filtering.',
    longDescription: 'An interactive web application built using Streamlit and Plotly to visualize and analyze sales data from a Superstore dataset. This dashboard allows users to upload their own Excel or CSV files, filter data in real-time, and explore dynamic insights through a wide variety of visualizations ranging from Time Series Analysis to Monthly Sales Heatmaps.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    github: 'https://github.com/Vanshaj14Mohan/SuperstoreViz',
    link: '#',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Custom File Upload supports .csv, .xlsx, .xls, and .txt data formats for custom data input.',
      'Interactive Date Range Selector and Hierarchical Filtering (Region, State, City).',
      '9+ Visualizations including Segment/Category Pie Charts, Sales vs Profit Scatter Plots, and Ship Mode Box Plots.',
      'Automated generation of monthly sub-category summary pivot tables and downloadable CSV reports.'
    ]
  }
];

const archiveProjects = [
  {
    year: '2025',
    title: 'HandIQ — Real-Time Finger Counter',
    madeAt: 'Personal',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/Vanshaj14Mohan',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    description: 'A real-time hand tracking and finger counting application built using Python, MediaPipe, and OpenCV.',
    longDescription: 'This project demonstrates a real-time finger counting system using computer vision. Built with OpenCV and MediaPipe, it detects and counts fingers on the right hand only, and displays the result visually using overlay images and a dynamic interface. It is inspired by a modular hand tracking system developed earlier and reuses a custom-built HandTrackingModule.py for precise hand landmark detection.',
    features: [
      'Detects and counts fingers on the right hand accurately.',
      'Displays the result visually using overlay images and a dynamic interface.',
      'Reuses a custom-built HandTrackingModule.py for precise hand landmark detection.',
      'Demonstrates the potential of computer vision in gesture recognition and touchless user interfaces.'
    ]
  },
  {
    year: '2025',
    title: 'WaveVolume — Gesture Volume Control',
    madeAt: 'Personal',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'Pycaw'],
    github: 'https://github.com/Vanshaj14Mohan',
    link: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    description: 'A real-time hand tracking system using Python, MediaPipe, and OpenCV to intuitively control system volume.',
    longDescription: 'This project demonstrates real-time hand gesture-based volume control using MediaPipe, OpenCV, and pycaw. By measuring the distance between your thumb and index finger, you can intuitively control your system’s audio volume in real-time. Ideal for anyone exploring gesture recognition, computer vision, and interactive touchless applications.',
    features: [
      'Detects hand landmarks via webcam in real-time using MediaPipe.',
      'Intuitively controls system audio volume by measuring the distance between the thumb and index finger.',
      'Integrates pycaw to interact directly with the Windows system audio interface.',
      'Builds a foundation for gesture recognition, AR interfaces, and touchless HCI applications.'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container projects-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-number">02.</span>
        <h2>Featured Data Projects</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <motion.div 
            className="featured-project-card" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-image-container" onClick={() => setSelectedProject(project)}>
              <div className="project-image-overlay"></div>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            <div className={`project-content ${index % 2 !== 0 ? 'content-left' : 'content-right'}`}>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-desc-box card">
                <p>{project.description}</p>
              </div>
              
              <div className="project-tech-list">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="tech-item">{techItem}</span>
                ))}
              </div>

              <div className="project-links-bottom">
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(project)}
                  style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  Deep Dive <ArrowRight size={16} />
                </button>
                <a href={project.github} target="_blank" rel="noreferrer" title="View Source"><Github size={22} /></a>
                <a href={project.link} target="_blank" rel="noreferrer" title="Live Demo"><ExternalLink size={22} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="archive-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="archive-title">Other Notable Projects</h3>
        <div className="archive-table-container">
          <table className="archive-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-mobile">Made at</th>
                <th className="hide-mobile">Built with</th>
                <th>Deep Dive</th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((proj, idx) => (
                <tr key={idx}>
                  <td className="year">{proj.year}</td>
                  <td className="title">
                    <Folder size={16} className="folder-icon" />
                    {proj.title}
                  </td>
                  <td className="hide-mobile">{proj.madeAt}</td>
                  <td className="tech hide-mobile">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="archive-tech-badge">{t}</span>
                    ))}
                  </td>
                  <td className="link">
                    <button 
                      onClick={() => setSelectedProject(proj)} 
                      style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
                      title="View Deep Dive"
                    >
                      <ExternalLink size={18} className="hover-cyan" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Render the Deep Dive modal over the page layout */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
