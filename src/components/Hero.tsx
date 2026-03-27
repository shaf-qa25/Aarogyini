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
        </motion.div>

        {/* Right Side 3D iPhone Mockup */}
        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="iphone-mockup"
            animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="iphone-screen">
              {/* Fake App Header */}
              <div className="app-header">
                <div>
                  <span className="app-greeting">Good Morning,</span>
                  <p className="app-username">Sarah</p>
                </div>
                <div className="app-avatar"></div>
              </div>

              {/* Circular Cycle Tracker */}
              <div className="cycle-tracker-wrapper">
                <div className="cycle-ring">
                  <div className="cycle-progress"></div>
                  <div className="cycle-inner glass">
                    <span className="cycle-day">Day 14</span>
                    <span className="cycle-phase">Ovulation</span>
                  </div>
                </div>
              </div>

              {/* Today's Insights */}
              <div className="insights-container">
                <h4 className="insights-title">Today's Insights</h4>
                <div className="insight-card glass">
                  <div className="insight-icon bg-lavender">✨</div>
                  <div className="insight-text">
                    <p>High Energy Expected</p>
                    <span>Peak estrogen levels</span>
                  </div>
                </div>
                <div className="insight-card glass">
                  <div className="insight-icon bg-coral">💧</div>
                  <div className="insight-text">
                    <p>Stay Hydrated</p>
                    <span>Water intake is low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone Hardware Details */}
            <div className="iphone-notch"></div>
            <div className="iphone-button volume-up"></div>
            <div className="iphone-button volume-down"></div>
            <div className="iphone-button power"></div>
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
