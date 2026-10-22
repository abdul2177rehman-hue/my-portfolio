import React from 'react';
import {
  Code2,
  Sparkles,
  Layout,
  Box,
  Zap,
  Globe,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Radio,
  Database,
  FileCode,
  GitBranch,
  Terminal,
  Smartphone,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

const GROUP_1_SKILLS = [
  { name: 'React.js', tag: 'UI Library', icon: Code2 },
  { name: 'JavaScript (ES6+)', tag: 'Core Logic', icon: Sparkles },
  { name: 'Tailwind CSS', tag: 'Modern Styling', icon: Layout },
  { name: 'Three.js / R3F', tag: '3D WebGL', icon: Box },
  { name: 'GSAP & Framer Motion', tag: 'Animation', icon: Zap },
  { name: 'HTML5 & CSS3', tag: 'Semantics', icon: Globe },
  { name: 'Responsive Architecture', tag: 'Mobile-First', icon: Smartphone },
  { name: 'Component Systems', tag: 'Modular UI', icon: Layers },
];

const GROUP_2_SKILLS = [
  { name: 'Node.js', tag: 'Runtime', icon: Server },
  { name: 'Express.js', tag: 'Backend Framework', icon: Cpu },
  { name: 'MongoDB', tag: 'NoSQL Database', icon: Database },
  { name: 'Mongoose ODM', tag: 'Data Modeling', icon: FileCode },
  { name: 'RESTful API Architecture', tag: 'APIs & Services', icon: Network },
  { name: 'JWT & Web Security', tag: 'Auth Workflows', icon: ShieldCheck },
  { name: 'WebSockets', tag: 'Real-Time Sync', icon: Radio },
  { name: 'Git & GitHub', tag: 'Version Control', icon: GitBranch },
  { name: 'Postman & Vite', tag: 'Tooling', icon: Terminal },
];

const SkillPill = ({ skill }) => {
  const IconComponent = skill.icon || Code2;

  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-xl border border-slate-200/80 hover:border-rose-500/50 shadow-sm hover:shadow-md hover:shadow-rose-500/10 transition-colors duration-200 group shrink-0 cursor-default">
      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-200 shadow-xs">
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
            {skill.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          {skill.tag}
        </span>
      </div>
    </div>
  );
};

export const Skills = () => {
  // Duplicate arrays for seamless infinite tiling without gaps
  const row1Repeated = [...GROUP_1_SKILLS, ...GROUP_1_SKILLS, ...GROUP_1_SKILLS, ...GROUP_1_SKILLS];
  const row2Repeated = [...GROUP_2_SKILLS, ...GROUP_2_SKILLS, ...GROUP_2_SKILLS, ...GROUP_2_SKILLS];

  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Stack & Toolkit"
          title="MERN Stack Technologies &"
          highlight="Capabilities"
          subtitle="A specialized toolkit centered on scalable MERN stack engineering, reactive component systems, and high-performance web applications."
        />
      </div>

      {/* Marquee Container with Edge Fades & Zero-Jolt Hardware Pausing */}
      <div className="relative mt-8 space-y-6 w-full overflow-hidden">
        {/* Left & Right Gradient Mask for Smooth Edge Blending */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right Continuous Marquee */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-right">
            {row1Repeated.map((skill, idx) => (
              <div key={`r1-${skill.name}-${idx}`} className="px-2">
                <SkillPill skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Continuous Marquee (Visual Counter-Movement) */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-left">
            {row2Repeated.map((skill, idx) => (
              <div key={`r2-${skill.name}-${idx}`} className="px-2">
                <SkillPill skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
