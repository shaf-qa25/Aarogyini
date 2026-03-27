import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';
import Ballpit from '../ui/Ballpit'; // Import Ballpit instead of BlobCursor

const Hero: React.FC = () => {
  return (
    <section className="hero-section container">
      {/* Integrated Ballpit Component in the background.
        We match colors with your pink and lavender theme.
        Z-index -1 ensures it stays behind content.
      */}
      <Ballpit
        ballCount={20} // Adjusted count for performance and visual balance
        ballColors={['#E75480', '#C3B4F3', '#FF8E8E']} // Matches your brand colors
        ballSizes={[15, 20, 25, 30]} // Randomized sizes
        gravity={0.5} // Lower gravity for a slower, more premium feel
        restitution={0.8} // Very bouncy
        zIndex={-1} // Stays behind content
      />

      <div className="hero-grid">
        {/* Left Side Content (Remains Same) */}
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
            <a
              href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-anchor"
            >
              <button className="btn btn-primary">
                Download App <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Side - App Render (Remains Same) */}
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
            <img
              src="/demo.gif"
              alt="App Demo"
              className="hero-video-render"
              loading="eager"
            />
          </motion.div>

          {/* Decorative Blobs (Remains Same) */}
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