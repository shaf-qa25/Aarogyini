import React from 'react';

import { motion } from 'framer-motion';

import { ShieldCheck, MessageSquare, Lock, Activity } from 'lucide-react';

import './FeatureGrid.css';



const FeatureGrid: React.FC = () => {

  const containerVariants = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: { staggerChildren: 0.15 }

    }

  };



  const itemVariants = {

    hidden: { opacity: 0, scale: 0.95, y: 20 },

    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }

  };



  return (

    <section className="feature-grid-section container" id="features">

      <div className="section-header">

        <h1 className="section-title">Why Us</h1>

      </div>



      <motion.div

        className="bento-container"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{ once: true, margin: "-100px" }}

      >

        {/* Card A: Symptom AI (Large) */}

        <motion.div variants={itemVariants} className="bento-card bento-a glass">

          <div className="card-content">

            <Activity className="card-icon text-coral" size={32} />

            <h3>Sakhee AI</h3>

            <p>Smart cycle predictions based on your mood and pain trends.</p>

          </div>

          <div className="visual-graphic graph-graphic">

            <div className="bar-chart">

              <div className="bar"><div className="fill fill-coral" style={{ height: '30%' }}></div></div>

              <div className="bar"><div className="fill fill-coral" style={{ height: '50%' }}></div></div>

              <div className="bar"><div className="fill fill-coral" style={{ height: '40%' }}></div></div>

              <div className="bar"><div className="fill fill-coral" style={{ height: '80%' }}></div></div>

              <div className="bar"><div className="fill fill-lavender" style={{ height: '100%' }}></div><span className="tooltip glass">Ovulation</span></div>

              <div className="bar"><div className="fill fill-coral" style={{ height: '60%' }}></div></div>

              <div className="bar"><div className="fill fill-coral" style={{ height: '45%' }}></div></div>

            </div>

          </div>

        </motion.div>



        {/* Card B: Anonymous Space (Medium) */}

        <motion.div variants={itemVariants} className="bento-card bento-b glass">

          <div className="card-content">

            <MessageSquare className="card-icon text-lavender" size={32} />

            <h3>Anonymous Space</h3>

            <p>Share, ask, and connect without judgment in our secure community.</p>

          </div>

          <div className="visual-graphic chat-graphic">

            <div className="chat-bubble left glass">Is this normal? 👀</div>

            <div className="chat-bubble right glass bg-lavender-light">Totally normal! 💜</div>

            <div className="chat-bubble left glass">Thanks bestie ✨</div>

          </div>

        </motion.div>



        {/* Card C: Doctor Verified (Medium) */}

        <motion.div variants={itemVariants} className="bento-card bento-c glass bg-gold-light">

          <div className="card-content">

            <ShieldCheck className="card-icon text-gold" size={32} />

            <h3>Doctor Verified</h3>

            <p>Clinical-grade insights you can trust, backed by medical professionals.</p>

            <div className="who-badge glass">

              <span className="badge-dot"></span> WHO Verified

            </div>

          </div>

        </motion.div>



        {/* Card D: Privacy First (Small) */}

        <motion.div variants={itemVariants} className="bento-card bento-d glass">

          <div className="card-content center-content">

            <Lock className="card-icon text-charcoal" size={48} />

            <h3>Privacy First</h3>

            <p>Your data is encrypted and never sold.</p>

          </div>

        </motion.div>



      </motion.div>

    </section>

  );

};



export default FeatureGrid;



