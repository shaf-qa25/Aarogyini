import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, HeartPulse, Droplets } from 'lucide-react';
import './DetectionSuite.css';

const DetectionSuite: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="detection-suite section container">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Detection</span> Suite</h2>
        <p className="section-subtitle">Advanced monitoring capabilities powered by clinical data</p>
      </div>

      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Card 1: Disease Detection (Large) */}
        <motion.div variants={itemVariants} className="bento-card glass-panel bento-large">
          <div className="card-header">
            <div className="icon-wrapper bg-red">
              <Activity size={24} color="#FF8E8E" />
            </div>
            <h3>Disease Detection</h3>
          </div>
          <p className="card-description">Early indicators and visual tracking for complex conditions.</p>
          <div className="features-list">
            <div className="feature-item">
              <span className="dot dot-red"></span> Dysmenorrhea
            </div>
            <div className="feature-item">
              <span className="dot dot-orange"></span> Menorrhagia
            </div>
          </div>
          <div className="visual-chart-placeholder">
            {/* Abstract representation of a chart */}
            <div className="chart-bar" style={{ height: '40%' }}></div>
            <div className="chart-bar" style={{ height: '70%' }}></div>
            <div className="chart-bar" style={{ height: '50%' }}></div>
            <div className="chart-bar active" style={{ height: '90%' }}></div>
            <div className="chart-bar" style={{ height: '60%' }}></div>
          </div>
        </motion.div>

        {/* Card 2: Hormonal Tracking (Medium) */}
        <motion.div variants={itemVariants} className="bento-card glass-panel bento-medium">
          <div className="card-header">
            <div className="icon-wrapper bg-purple">
              <HeartPulse size={24} color="#6C5DD3" />
            </div>
            <h3>Hormonal Tracking</h3>
          </div>
          <p className="card-description">PCOS/PCOD monitoring with intelligent symptom aggregation.</p>
          <div className="tags-container">
            <span className="glass-badge tag">Acne Breakouts</span>
            <span className="glass-badge tag">Weight Fluctuation</span>
            <span className="glass-badge tag">Irregular Cycles</span>
            <span className="glass-badge tag">Fatigue</span>
          </div>
        </motion.div>

        {/* Card 3: Infection Alert (Medium) */}
        <motion.div variants={itemVariants} className="bento-card glass-panel bento-medium">
          <div className="card-header">
            <div className="icon-wrapper bg-blue">
              <ShieldAlert size={24} color="#3B82F6" />
            </div>
            <h3>Infection Alert</h3>
          </div>
          <p className="card-description">Real-time symptom correlation for common infections.</p>
          <div className="alert-box">
            <ShieldAlert size={20} className="alert-icon" />
            <div>
              <p className="alert-title">Safety Shield Active</p>
              <p className="alert-text">Monitoring for Yeast & UTI</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Hygiene Guide (Small/Wide) */}
        <motion.div variants={itemVariants} className="bento-card glass-panel bento-wide">
          <div className="card-header">
            <div className="icon-wrapper bg-green">
              <Droplets size={24} color="#10B981" />
            </div>
            <h3>Sustainable Hygiene Guide</h3>
          </div>
          <p className="card-description">Minimalist care practices for your body and the environment.</p>
          <div className="hygiene-items">
            <div className="hygiene-item">Menstrual Cups</div>
            <div className="hygiene-item">Organic Tampons</div>
            <div className="hygiene-item">Reusable Pads</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default DetectionSuite;
