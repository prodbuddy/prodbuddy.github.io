import React from 'react';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container text-center">
        <span className="hero-badge">
          Simple • Fast • Reliable
        </span>
        <h1 className="hero-title">
          A professional bridge that <br/>
          <span className="text-gradient">connects your business to success.</span>
        </h1>
        <p className="hero-subtitle">
          I am a specialist in sales and marketing. I build your website and teach you the expert strategies to grow your business and generate sustainable income.
        </p>
        <div className="hero-cta">
          <a href="tel:+911234567890" className="btn btn-primary btn-large group">
            <PhoneCall size={22} className="btn-icon" />
            <span>Call For a Free Chat</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
