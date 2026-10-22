import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-between items-center overflow-hidden z-10"
    >
      {/* ─── AMBIENT BACKGROUND TEXTURE & ARCHITECTURAL GRID ACCENTS ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle geometric dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Soft Radial Ambient Glow Centers */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[35%] left-[20%] w-[350px] h-[350px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Architectural Tech Markings */}
        <div className="hidden lg:flex absolute top-36 left-10 flex-col gap-1 text-[10px] font-mono text-slate-400/80">
          <span className="font-semibold text-rose-600/80">SYS // 2026</span>
          <span>LATENCY: OPTIMAL</span>
          <span>ENV: PRODUCTION</span>
        </div>
        <div className="hidden lg:flex absolute top-36 right-10 flex-col items-end gap-1 text-[10px] font-mono text-slate-400/80">
          <span className="font-semibold text-slate-600">MERN-STACK CORE</span>
          <span>REACT 19 • NODE.JS</span>
          <span>THREE.JS • WEBGL</span>
        </div>
      </div>

      {/* ─── LAYER 1: MASSIVE BACKGROUND WORDMARK ("ABDUL REHMAN") ─── */}
      <div className="absolute inset-x-0 top-[15%] sm:top-[17%] flex flex-col items-center justify-center pointer-events-none z-0 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full"
        >
          <span className="font-heading font-black tracking-tighter text-slate-300/35 text-[14vw] sm:text-[13vw] md:text-[12vw] uppercase leading-none select-none block drop-shadow-xs">
            {personalData.name}
          </span>
        </motion.div>
      </div>

      {/* ─── LAYER 2: FOREGROUND HIGH-CONTRAST HERO TYPOGRAPHY STACK ─── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center mt-2 sm:mt-4 pointer-events-none">
        {/* Soft Ambient Backdrop Scrim for Crystal-Clear Readability */}
        <div className="absolute -inset-x-8 -inset-y-12 max-w-4xl mx-auto bg-radial from-white/95 via-white/80 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Top Status & Role Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs mb-3 sm:mb-4 pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-rose-700 uppercase">
            Engineering & Creative UI
          </span>
        </motion.div>

        {/* Primary Hero Name — Bold, Prominent, Clear Focal Point */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-slate-950 leading-[1.05] select-none block drop-shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
        >
          {personalData.name}
        </motion.h1>

        {/* Angled Crimson Script Accent Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -2.5 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block relative mt-1 sm:mt-2.5"
        >
          <span className="font-serif italic font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-600 tracking-tight sm:tracking-normal drop-shadow-[0_4px_24px_rgba(225,29,72,0.28)] leading-[1.1] select-none block">
            MERN Stack Developer
          </span>
        </motion.div>

        {/* Refined Description Subtitle Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3.5 sm:mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed tracking-normal drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]"
        >
          Architecting modern MERN Stack web applications, scalable REST APIs, and interactive 3D digital experiences.
        </motion.p>
      </div>

      {/* ─── LAYER 3: 3D ROBOT CENTER STAGE NEGATIVE SPACE ─── */}
      <div className="w-full flex-1 min-h-[300px] sm:min-h-[360px] pointer-events-none" />

      {/* ─── LAYER 4: BOTTOM-LEFT & BOTTOM-RIGHT HIGHLIGHT CARDS ─── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Bottom-Left Status Card */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full sm:w-auto max-w-sm rounded-2xl sm:rounded-3xl glass-panel-premium glass-panel-interactive p-5 sm:p-6 text-left group"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>
            <h4 className="text-sm font-extrabold text-slate-950 font-heading">
              MERN Stack & Frontend Roles
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
              Engineering production-ready MERN systems with responsive ergonomics and clean architecture.
            </p>
          </motion.div>

          {/* Bottom Center Scroll Pill */}
          <motion.button
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="hidden md:flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-widest group-hover:text-rose-600 transition-colors">
              Scroll
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-rose-500 flex items-start justify-center p-1 transition-colors bg-white/80 backdrop-blur-xs">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-1.5 h-2 rounded-full bg-rose-600"
              />
            </div>
          </motion.button>

          {/* Bottom-Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 35, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full sm:w-auto max-w-sm rounded-2xl sm:rounded-3xl glass-panel-premium glass-panel-interactive p-5 sm:p-6 text-left group"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700">
                Selected Works
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-medium">2026 Edition</span>
            </div>
            <h4 className="text-sm font-extrabold text-slate-950 font-heading">
              Interactive 3D Web & MERN
            </h4>
            <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 group-hover:translate-x-0.5 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
