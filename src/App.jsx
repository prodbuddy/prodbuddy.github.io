import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] selection:bg-[var(--primary)]/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
