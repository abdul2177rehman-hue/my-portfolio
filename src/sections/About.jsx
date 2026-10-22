import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { personalData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Profile"
          title="Shaping Digital Experiences with"
          highlight="MERN Stack Engineering"
          subtitle="A look into my development philosophy, MERN Stack architecture approach, and engineering focus."
        />

        {/* Cinematic Light Glass Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-panel-premium p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle warm rose backlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-rose-50/90 border border-rose-200/90 flex items-center justify-center text-rose-600 shadow-xs">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                    MERN-Stack Philosophy & Craft
                  </h3>
                  <p className="text-xs font-mono text-rose-700 font-bold tracking-wide mt-0.5">Scalable Architecture • Fluid UI • Clean Code</p>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                {personalData.fullBio}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Architecting scalable, modular React frontend interfaces with micro-animations',
                  'Engineering robust REST APIs with Express.js, JWT security, and validation middleware',
                  'Designing optimized MongoDB schema models, indexing, and aggregation pipelines',
                  'Prioritizing responsive layouts and accessibility compliant design on all devices',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Status Ribbon */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-rose-600" />
                <span>Location: <strong className="text-slate-900 font-semibold">{personalData.location}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-rose-700 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                <span>Open for MERN & Frontend Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights & Focus Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Core Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl glass-panel-premium p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              <h4 className="text-xl font-extrabold text-slate-950 font-heading mb-4 tracking-tight">
                Engineering Pillars
              </h4>
              <div className="space-y-4 text-sm text-slate-700 font-normal leading-relaxed">
                <div className="p-4.5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 shadow-xs hover:bg-white/90 transition-colors">
                  <span className="font-bold text-slate-950 block mb-1 text-sm">MERN Stack Rigor</span>
                  End-to-end JavaScript ecosystem synchronization between MongoDB, Express, React, and Node.
                </div>
                <div className="p-4.5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/90 shadow-xs hover:bg-white/90 transition-colors">
                  <span className="font-bold text-slate-950 block mb-1 text-sm">Interactive 3D UI</span>
                  WebGL scenes and scroll physics that elevate user engagement without performance overhead.
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-3xl glass-panel-premium glass-panel-interactive p-6 flex items-center justify-between group cursor-pointer border border-rose-200/90 hover:border-rose-400"
            >
              <div>
                <span className="text-xs font-mono text-rose-700 font-bold uppercase tracking-wider block mb-1">Collaborate</span>
                <span className="text-base font-extrabold text-slate-950">Have a project in mind?</span>
              </div>
              <a
                href="#contact"
                className="w-11 h-11 rounded-full bg-rose-50 border border-rose-200/90 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-xs group-hover:shadow-md group-hover:shadow-rose-600/30"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 4 Stats Cards */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4">
            {personalData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl glass-panel-premium glass-panel-interactive p-6 text-left group"
              >
                <div className="text-3xl sm:text-4xl font-black font-heading text-gradient-crimson group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-extrabold text-slate-950 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-mono font-medium">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
