import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Scrolling Tech Marquee */}
        <TechMarquee />

        {/* 4. About */}
        <About />

        {/* 5. Skills (Light section #FFFFFF rounded-t-[50px]) */}
        <Skills />

        {/* 6. Experience */}
        <Experience />

        {/* 7. Projects */}
        <Projects />

        {/* 8. Hackathons & Competitions */}
        <Hackathons />

        {/* 9. Education */}
        <Education />

        {/* 10. Certifications */}
        <Certifications />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default App;
