import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Move } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

const ALL_SERVICES = [
  { id: 'mern', name: 'MERN Stack Development', tag: 'Core Discipline' },
  { id: 'frontend', name: 'Frontend Architecture & UI', tag: 'React / Next.js' },
  { id: 'backend', name: 'Backend Development & REST APIs', tag: 'Node / Express' },
  { id: 'responsive', name: 'Responsive Web Development', tag: 'Mobile-First' },
  { id: 'ecommerce', name: 'E-Commerce Development', tag: 'Digital Storefronts' },
  { id: 'interactive', name: 'Interactive UI Development', tag: 'GSAP & Motion' },
  { id: 'dashboard', name: 'Dashboard Development & Analytics', tag: 'Real-Time Metrics' },
  { id: '3d-webgl', name: 'Interactive 3D WebGL', tag: 'Three.js / R3F' },
];

export const Services = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Services"
          title="Core Capabilities & Interactive"
          highlight="Disciplines"
          subtitle="Explore all 8 specialized service disciplines. Click and drag any service box around the interactive sandbox."
        />

        {/* Drag Hint Tooltip */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs font-mono text-slate-500">
          <Move className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
          <span>Interactive Playground — All 8 services are draggable with physics</span>
        </div>

        {/* Bounded Interactive Playground Area */}
        <div
          ref={containerRef}
          className="relative w-full min-h-[520px] sm:min-h-[540px] md:min-h-[580px] rounded-3xl sm:rounded-[36px] bg-slate-100/80 border border-slate-200/90 p-4 sm:p-8 pt-14 sm:pt-20 pb-6 sm:pb-10 flex flex-wrap items-end content-end justify-center gap-2.5 sm:gap-4 shadow-inner overflow-hidden"
        >
          {/* Subtle Ambient Tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/[0.04] to-transparent pointer-events-none" />

          {/* Sandbox Base Floor Grounding Surface */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-slate-200/70 via-rose-500/[0.03] to-transparent pointer-events-none border-b-2 border-slate-300/70" />
          <div className="absolute bottom-2.5 left-4 sm:left-6 text-[10px] font-mono text-slate-400 pointer-events-none select-none tracking-wider uppercase">
            Interactive Base Floor
          </div>

          {ALL_SERVICES.map((service, index) => {
            const initialRotation = (index % 2 === 0 ? 1 : -1) * ((index * 2) % 4);

            return (
              <motion.div
                key={service.id}
                drag={!shouldReduceMotion}
                dragConstraints={containerRef}
                dragElastic={0.25}
                dragTransition={{ bounceStiffness: 320, bounceDamping: 22 }}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : {
                        opacity: 0,
                        y: -300 - (index % 4) * 45,
                        scale: 0.9,
                        rotate: initialRotation * 1.5,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, scale: 1, rotate: initialRotation }
                }
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 12,
                  mass: 1.1,
                  bounce: 0.4,
                  delay: 0.08 + index * 0.06,
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                  borderColor: 'rgba(225, 29, 72, 0.6)',
                  boxShadow: '0 12px 24px -4px rgba(225, 29, 72, 0.16)',
                  cursor: 'grab',
                }}
                whileDrag={{
                  scale: 1.08,
                  rotate: 0,
                  zIndex: 50,
                  boxShadow: '0 20px 32px -6px rgba(225, 29, 72, 0.25)',
                  cursor: 'grabbing',
                }}
                className="w-[calc(50%-6px)] sm:w-[calc(50%-10px)] md:w-auto md:max-w-xs px-3 sm:px-4.5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/95 hover:bg-white backdrop-blur-xl border border-slate-200/90 shadow-sm sm:shadow-md shadow-slate-200/60 flex items-center justify-between gap-2 select-none touch-none cursor-grab active:cursor-grabbing transition-colors duration-200"
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  {/* Crimson Indicator Dot */}
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-600 shadow-xs shadow-rose-500/50 shrink-0" />

                  {/* Service Name */}
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading tracking-tight truncate">
                    {service.name}
                  </span>
                </div>

                {/* Micro Tag Badge */}
                <span className="hidden md:inline text-[9px] sm:text-[10px] font-mono text-slate-500 border-l border-slate-200 pl-2 ml-1 font-medium shrink-0">
                  {service.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
