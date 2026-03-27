import React from 'react';
import { Mail, MessageCircle, Share2 } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="Aarogyini Logo" className="logo-icon" />
              <span className="logo-text text-gradient">Aarogyini</span>
            </div>
            <p className="footer-description">
              Empowering women through advanced menstrual health insights and an anonymous supportive community.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><a href="#detection">Detection Engine</a></li>
              <li><a href="#truth">Truth Module</a></li>
              <li><a href="#community">Community QA</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Medical Disclaimer</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LunaCare. Designed for empowering health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
