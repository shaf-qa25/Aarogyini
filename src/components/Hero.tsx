import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
            <Sparkles size={16} /> A New Era of Menstrual Health
          </div>
          <h1 className="hero-title">
            Your Cycle, <br /><span className="text-gradient">Decoded.</span>
          </h1>
          <p className="hero-subtitle">
            A premium, privacy-first platform designed to understand your body. Track, learn, and grow with confidence.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Download App <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
          {/* Hero Actions
<div className="hero-actions">
  <a 
    href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <button className="btn btn-primary">
      Download App <ArrowRight size={18} style={{ marginLeft: '8px' }} />
    </button>
  </a>
</div> */}
        </motion.div>

        {/* Right Side 3D iPhone Mockup */}
        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="video-wrapper"
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Using img for GIF directly for better compatibility */}
            <img
              src="/demo.gif"
              alt="App Demo"
              className="hero-video-render"
              loading="eager"
            />
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            className="floating-blob blob-1"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="floating-blob blob-2"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
