import React, { useState } from 'react';
import { LoadingIntro } from './components/intro/LoadingIntro';
import { HangingNavbar } from './components/navbar/HangingNavbar';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { GlobalRobotScene3D } from './components/3d/GlobalRobotScene3D';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 relative overflow-x-hidden font-sans selection:bg-rose-500 selection:text-white">
      {/* 3D Cinematic Opening Intro (100% PRESERVED & UNTOUCHED) */}
      {!introFinished ? (
        <LoadingIntro onFinished={() => setIntroFinished(true)} />
      ) : (
        /* Modern Light Portfolio with Crimson Accents & Scroll-Interactive 3D Robot */
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Subtle Diffused Rose Ambient Lighting */}
          <AmbientGlow />

          {/* Scroll-Interactive 3D Robot Character in Unified Environment */}
          <GlobalRobotScene3D />

          {/* Single Central String Hanging Glass Navbar */}
          <HangingNavbar />

          {/* Main Storytelling Sections */}
          <main className="relative z-10 flex-1">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
          </main>

          {/* Graphy-Style Structured Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
