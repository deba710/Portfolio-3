import React, { useState, useEffect } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PhotoProvider>
      <div id="portfolio-app-root" className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
        {/* Sticky Top Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Portfolio Sections */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PhotoProvider>
  );
}
