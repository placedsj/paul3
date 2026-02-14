import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* About / Intro Section represented by BentoGrid */}
        <div id="about">
          <BentoGrid />
        </div>
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      
      {/* CSS Utility for the Ribbon shape */}
      <style>{`
        .clip-path-ribbon {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;