import React from 'react';
import { Layout, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Modern Websites",
    description: "I build sites that look great on phones and computers, load instantly, and make your business look professional.",
    icon: <Layout size={32} />
  },
  {
    title: "Get More Leads",
    description: "I design your site to guide visitors toward calling you or buying your services. More leads, more sales.",
    icon: <Users size={32} />
  },
  {
    title: "Expert Coaching",
    description: "I will teach you my proven sales and marketing secrets so you can take control of your business and start generating more income.",
    icon: <GraduationCap size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How I Help You Grow</h2>
          <p className="section-subtitle">Everything you need to succeed online, minus the confusing tech-speak.</p>
        </div>
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="glass-card service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
