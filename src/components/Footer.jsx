import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">🚀 Prodbuddy</div>
        <p className="footer-copyright">© {new Date().getFullYear()} Prodbuddy. Simpler technology for better businesses.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">Twitter</a>
          <a href="#" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
