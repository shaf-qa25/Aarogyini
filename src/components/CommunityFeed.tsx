import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import './CommunityFeed.css';

// 1. Mock Data add kiya (ya ise file ke bahar se import karo)
const MOCK_FEED = [
  { id: 1, question: "How to manage skin sensitivity with retinol?", answer: "Start twice a week and use a thick ceramide moisturizer.", doctor: "Dr. Ananya Iyer", topic: "Skin" },
  { id: 2, question: "Natural alternatives to morning caffeine?", answer: "Try cold-pressed juice or 5-min stretching.", doctor: "Dr. Rohan Shah", topic: "Wellness" },
  { id: 3, question: "Is 6 hours of sleep enough for athletes?", answer: "Ideally no. Muscle recovery needs 7.5 to 8 hours.", doctor: "Dr. Kabir Singh", topic: "Fitness" }
];

const CommunityCard = ({ item }: { item: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Tilt ranges: thoda subtle rakha hai taaki content readable rahe
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="feed-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div className="feed-card glass-panel" style={{ transformStyle: "preserve-3d" }}>

        {/* Animated Wavy Border */}
        <div className="wavy-border-container">
          <svg className="wavy-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="0" y="0" width="100" height="100" rx="8" />
          </svg>
        </div>

        {/* Level 1: Question (Depth: 40px) */}
        <div className="card-content-section" style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
          <div className="question-header">
            <span className="anonymous-tag"><MessageCircle size={12} /> Anonymous</span>
            <span className="glass-badge">{item.topic}</span>
          </div>
          <p className="question-body">"{item.question}"</p>
        </div>

        {/* Level 2: Response Box (Depth: 80px for parallax) */}
        <div style={{ transform: "translateZ(80px)" }}>
          <div className="doctor-response-box">
            <div className="verified-label">
              <div className="glow-dot"></div>
              <ShieldCheck size={14} /> Verified Response
            </div>
            <p className="response-text">"{item.answer}"</p>
            <div className="doctor-name-tag">
              {item.doctor} <span className="specialist-label">• Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CommunityFeed = () => {
  return (
    <section className="community-section" id="community">
      <div className="container">
        <div className="feed-intro">
          <h2 className="section-title">Community <span className="text-gradient">Feed</span></h2>
          <p className="section-subtitle">Real questions, verified expert answers.</p>
        </div>

        <div className="carousel-container">
          {MOCK_FEED.map((item) => (
            <CommunityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;