import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink } from 'lucide-react';
import './CertificatesModal.css';

const CertificatesModal = ({ isOpen, onClose, certificates }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content cert-modal card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="cert-modal-header">
            <h2>All Milestones & Certifications</h2>
            <p className="cert-modal-subtitle">A comprehensive archive of all professional achievements and credentials.</p>
          </div>

          <div className="cert-grid">
            {certificates.map((cert, idx) => (
              <a 
                key={idx} 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="cert-card"
              >
                <div className="cert-icon-box">
                  <Award size={28} />
                </div>
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <span className="view-link">
                    View Document <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificatesModal;
