import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer glass">
      <div className="footer-inner container">

        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Aaro<span className="text-gradient">gyini</span>
            </h2>
            <p className="footer-desc">
              Advanced menstrual health insights & an anonymous space where women support women — without judgment.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Share">
                <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
              </a>
              <a href="#" aria-label="Community">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
              </a>
              <a href="#" aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Platform</p>
            <ul>
              <li><a href="#detection">Detection Engine</a></li>
              <li><a href="#truth">Truth Module</a></li>
              <li><a href="#community">Community QA</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Resources</p>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Medical Disclaimer</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Legal</p>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aarogyini. Designed for empowering health.</p>
          <p className="footer-tagline">her body, her data, her power.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;