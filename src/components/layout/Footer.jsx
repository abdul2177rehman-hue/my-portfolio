import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from '../ui/Icons';
import { personalData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pt-16 pb-12 bg-white/70 backdrop-blur-2xl border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Logo/Tagline/Socials + Right 3 Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          {/* Left Column: Brand Identity, Tagline & Social Icons */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            {/* Logo Mark + Name */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-md shadow-slate-900/20 border border-slate-800">
                <span className="font-mono text-sm font-bold text-rose-400">
                  {personalData.monogram}
                </span>
              </div>
              <span className="text-xl font-bold font-heading text-slate-900 tracking-tight">
                {personalData.name}
              </span>
            </div>

            {/* Short Tagline / Blurb */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Building high-performance, interactive, and scalable web applications with modern MERN Stack architectures.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs"
                title="X / Twitter"
                aria-label="X / Twitter Profile"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs"
                title="Instagram"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.socials.email}`}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns: 3 Short Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Navigation */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                      className="hover:text-rose-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Specializations */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                Specializations
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {[
                  'MERN Stack',
                  'Frontend Architecture',
                  'REST APIs & Security',
                  'Interactive 3D WebGL',
                  'E-Commerce Solutions',
                ].map((spec) => (
                  <li key={spec}>
                    <span className="hover:text-rose-600 transition-colors cursor-default">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                Connect
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-600 transition-colors"
                  >
                    LinkedIn Network
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalData.socials.email}`}
                    className="hover:text-rose-600 transition-colors"
                  >
                    Direct Email
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="hover:text-rose-600 transition-colors"
                  >
                    Start a Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {personalData.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-rose-600 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
