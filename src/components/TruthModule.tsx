import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import './TruthModule.css';

const truthsData = [
  {
    id: 1,
    myth: "Irregular cycles are always a sign of PCOS or infertility.",
    fact: "Cycle variations are common and can be caused by stress, sleep changes, or normal hormonal fluctuations.",
    verifiedBy: "WHO Guidelines, 2023"
  },
  {
    id: 2,
    myth: "Severe pain during menstruation is normal and should be endured.",
    fact: "Debilitating pain (Dysmenorrhea) is not normal and can be a sign of Endometriosis or Fibroids requiring clinical care.",
    verifiedBy: "ACOG Clinical Consensus"
  },
  {
    id: 3,
    myth: "You shouldn't exercise or swim while on your period.",
    fact: "Light to moderate exercise can actually relieve menstrual cramps by releasing endorphins.",
    verifiedBy: "Global Health Observatory"
  }
];

const TruthModule: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const handleNext = () => {
    setShowFact(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % truthsData.length);
    }, 300);
  };

  const handlePrev = () => {
    setShowFact(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? truthsData.length - 1 : prev - 1));
    }, 300);
  };

  const currentItem = truthsData[activeIndex];

  return (
    <section className="truth-module section container">
      <div className="truth-header">
        <h2 className="section-title">The <span className="text-gradient">Truth</span> Module</h2>
        <p className="section-subtitle">Debunking myths with clinically verified data</p>
      </div>

      <div className="truth-dashboard glass-panel">
        <div className="dashboard-top">
          <div className="verified-badge">
            <CheckCircle2 size={16} color="#10B981" />
            <span>WHO-Verified Data Source</span>
          </div>
          <div className="dashboard-controls">
            <button className="control-btn" onClick={handlePrev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <span className="counter">{activeIndex + 1} / {truthsData.length}</span>
            <button className="control-btn" onClick={handleNext} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="truth-content-area">
          <div className="toggle-wrapper">
            <span className={`toggle-label ${!showFact ? 'active-myth' : ''}`}>Myth</span>
            <button 
              className={`truth-toggle ${showFact ? 'toggled' : ''}`}
              onClick={() => setShowFact(!showFact)}
            >
              <div className="toggle-thumb" />
            </button>
            <span className={`toggle-label ${showFact ? 'active-fact' : ''}`}>Fact</span>
          </div>

          <div className="card-display">
            <AnimatePresence mode="wait">
              {!showFact ? (
                <motion.div 
                  key={`myth-${currentItem.id}`}
                  className="content-card myth-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <XCircle size={32} color="#FF8E8E" className="card-icon" />
                  <h3 className="card-text">"{currentItem.myth}"</h3>
                </motion.div>
              ) : (
                <motion.div 
                  key={`fact-${currentItem.id}`}
                  className="content-card fact-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 size={32} color="#10B981" className="card-icon" />
                  <h3 className="card-text">{currentItem.fact}</h3>
                  <div className="source-citation">
                    Source: {currentItem.verifiedBy}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruthModule;
