import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section container">
      <div className="hero-grid">
        {/* Left Side Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="glass-badge hero-badge">
            ✨ Clinical-grade Menstrual Health
          </div>
          <h1 className="hero-title">
            Empowering Your Cycle with <span className="text-gradient">Data-Driven Care.</span>
          </h1>
          <p className="hero-subtitle">
            Track, detect, and consult. A clinical-grade monitoring system for PCOS, infections, and hormonal health.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Start Your Journey <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-secondary">
              <Users size={18} style={{ marginRight: '8px' }} /> Join Anonymous Community
            </button>
          </div>
        </motion.div>

        {/* Right Side Video Placeholder */}
        <motion.div 
          className="hero-media"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="glass-panel video-placeholder">
            <div className="video-overlay">
              <div className="play-button">▶</div>
              <p>Abstract 3D Motion Video</p>
            </div>
          </div>
          {/* Decorative floating elements */}
          <motion.div 
            className="floating-blob blob-1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="floating-blob blob-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
