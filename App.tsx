import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
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
        <Process />
        <Portfolio />
        <FAQ />
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