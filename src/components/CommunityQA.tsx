import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowBigUp, ArrowBigDown, Share2, Award, ShieldCheck } from 'lucide-react';
import './CommunityQA.css';

const CommunityQA: React.FC = () => {
  return (
    <section className="community-qa section container">
      <div className="section-header">
        <h2 className="section-title">Anonymous <span className="text-gradient">Community</span></h2>
        <p className="section-subtitle">Real questions, clinical answers.</p>
      </div>

      <div className="community-grid">
        {/* Left Side: Info */}
        <motion.div 
          className="community-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>A safe space for your health queries</h3>
          <p>
            Join thousands of women discussing symptoms, treatments, and experiences anonymously. 
            All clinical questions are answered by our panel of certified gynecologists.
          </p>
          <ul className="benefits-list">
            <li><ShieldCheck size={20} className="list-icon" /> 100% Anonymous profiles</li>
            <li><Award size={20} className="list-icon gold" /> Doctor-verified responses</li>
            <li><MessageSquare size={20} className="list-icon" /> Supportive community</li>
          </ul>
          <button className="btn btn-primary mt-4">Join Discussion</button>
        </motion.div>

        {/* Right Side: Reddit style Card */}
        <motion.div 
          className="community-preview"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="post-card glass-panel">
            <div className="post-sidebar">
              <button className="vote-btn active"><ArrowBigUp size={24} /></button>
              <span className="vote-count">1.2k</span>
              <button className="vote-btn"><ArrowBigDown size={24} /></button>
            </div>
            
            <div className="post-content">
              <div className="post-meta">
                <div className="avatar bg-gradient"></div>
                <span className="username">Anonymous_User_42</span>
                <span className="time">· 4 hours ago</span>
                <span className="glass-badge tag-health">Cycle Health</span>
              </div>
              
              <h4 className="post-title">Is my cycle length normal? It suddenly changed from 28 to 35 days.</h4>
              <p className="post-body">
                I'm 24 and my period has always been exactly 28 days. For the last 3 months, it's been stretching to 35-36 days. Should I be worried about PCOS?
              </p>
              
              <div className="post-actions">
                <button className="action-btn"><MessageSquare size={18} /> 48 Comments</button>
                <button className="action-btn"><Share2 size={18} /> Share</button>
              </div>

              {/* Doctor Response */}
              <div className="doctor-response glass-panel highlighted">
                <div className="response-header">
                  <div className="doctor-info">
                    <div className="doctor-avatar">
                      <img src="https://ui-avatars.com/api/?name=Dr+Sarah&background=F8F9FA&color=6C5DD3" alt="Dr. Sarah" />
                    </div>
                    <div>
                      <span className="doctor-name">Dr. Sarah Jenkins</span>
                      <span className="doctor-title">Board Certified Gynecologist</span>
                    </div>
                  </div>
                  <div className="gold-badge">
                    <Award size={16} /> Verified clinical response
                  </div>
                </div>
                <div className="response-body">
                  <p>
                    A shift from 28 to 35 days is generally considered within the normal adult range (21-35 days). 
                    However, sudden changes can be triggered by stress, sleep disruptions, or new medications. 
                    If it continues for another cycle alongside other symptoms like acne or hair thinning, I'd recommend a hormonal panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityQA;
