import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* The close button is now sticky at the top-right of the ENTIRE modal */}
          <div className="modal-close-wrapper">
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="modal-image-container">
            <div className="modal-image-overlay"></div>
            <img src={project.image} alt={project.title} className="modal-image" />
          </div>

          <div className="modal-body">
            {/* Sticky Glass Title Bar */}
            <div className="modal-sticky-header">
              <h2 className="modal-title">{project.title}</h2>
            </div>
            
            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="badge">{t}</span>
              ))}
            </div>

            <div className="modal-description">
              <p>{project.longDescription || project.description}</p>
            </div>

            {project.features && (
              <div className="modal-features">
                <h3>Key Features & Implementation</h3>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={18} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Github size={18} /> View Source
              </a>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary btn-outline">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
