import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { InteractiveCursorGlow } from './components/InteractiveCursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F5F5F5] selection:bg-[#6285FF]/30 selection:text-white overflow-x-hidden">
      {/* Top scroll-driven progress bar and floating circular back-to-top indicator */}
      <ScrollProgress />

      {/* Interactive cursor spotlight follower for desktop */}
      <InteractiveCursorGlow />

      {/* Ambient background particles & grid */}
      <BackgroundEffects />

      {/* Global Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Education */}
        <Education />

        {/* Section 04: Technical Skills */}
        <Skills />

        {/* Section 05: Featured Projects */}
        <Projects />

        {/* Section 06: Research & Innovation */}
        <Research />

        {/* Section 07: Experience & Leadership */}
        <Experience />

        {/* Section 08: Certifications */}
        <Certifications />

        {/* Section 09: Contact */}
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
