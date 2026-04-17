import React from 'react';
import { Phone, Mail, MessageSquareText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="glass-card contact-grid">
          <div className="contact-info">
            <h2 className="section-title contact-title">Ready to stop <br/>worrying?</h2>
            <p className="contact-subtitle">
              If you're tired of technical headaches and want to master your sales and marketing, let's chat today. If you want a professional website that generates income, reach out to me below.
            </p>
            
            <div className="contact-links">
              <a href="tel:+911234567890" className="contact-phone">
                <div className="icon-wrapper primary-bg">
                  <Phone size={24} />
                </div>
                +91 123 456 7890
              </a>
              <div className="contact-email">
                <div className="icon-wrapper accent-bg">
                  <Mail size={24} />
                </div>
                hello@prodbuddy.com
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-icon-wrapper">
              <MessageSquareText size={64} />
            </div>
            <h3 className="cta-title">Expert Strategy Session</h3>
            <p className="cta-subtitle">Available for a 15-minute free call to audit your business strategy.</p>
            <a href="tel:+911234567890" className="btn btn-primary btn-large btn-full group cta-btn">
              <Phone size={24} /> Call Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
