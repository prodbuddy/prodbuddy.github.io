import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">🚀 Prodbuddy</a>
        <div className="navbar-menu">
          <div className="navbar-links">
            <a href="#services" className="nav-link">How I Help</a>
            <a href="#portfolio" className="nav-link">My Work</a>
            <a href="#contact" className="nav-link">Hire Me</a>
          </div>
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
