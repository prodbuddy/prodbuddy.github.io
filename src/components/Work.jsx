import React from 'react';
import { Monitor, ShoppingCart, TrendingUp, Zap } from 'lucide-react';

const portfolioItems = [
  {
    title: "New Website for Local Shop",
    description: "Helped a local business transform their online presence with a lightning-fast, professional website.",
    result: "Double Inquiries",
    stat: "x2",
    icon: <Monitor size={32} />
  },
  {
    title: "Scaling an Online Brand",
    description: "Identified and fixed a broken checkout process, smoothing the path for customers to complete orders.",
    result: "Sales Boost",
    stat: "+40%",
    icon: <ShoppingCart size={32} />
  }
];

const Work = () => {
  return (
    <section id="portfolio" className="section section-accent">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Helping Businesses Like Yours</h2>
          <p className="section-subtitle">Real results that actually move the needle for real people.</p>
        </div>

        <div className="grid grid-2">
          {portfolioItems.map((item, index) => (
            <div key={index} className="glass-card work-card">
              <div className="work-header">
                <div className="work-icon">
                  {item.icon}
                </div>
                <div className="work-stats">
                  <span className="work-stat-value">{item.stat}</span>
                  <span className="work-stat-label">{item.result}</span>
                </div>
              </div>
              
              <div className="work-body">
                <h3 className="work-title">{item.title}</h3>
                <p className="work-description">
                  {item.description}
                </p>
              </div>

              <div className="work-footer mt-auto">
                <Zap size={16} /> Verified Success Story
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
