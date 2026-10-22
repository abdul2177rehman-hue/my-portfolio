import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, ArrowUpRight } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HangingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  // Single central suspension references
  const navbarRef = useRef(null);
  const centerCableRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Trigger the entrance drop animation after mount
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 120);

    const handleScroll = () => {
      // Actively scrolling: activate vibration immediately
      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Stop vibration completely ~120ms after scrolling ceases
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 120);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'testimonials', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Multi-harmonic zero-drift micro-jitter:
    // Only runs while isScrollingRef is true; otherwise locks completely still at resting anchor (0,0)
    const updateJitter = (time) => {
      if (isScrollingRef.current) {
        // Slow gentle organic sway/tremor during active scroll (low natural frequency)
        const jitterX = (
          Math.sin(time * 0.0055) * 0.95 +
          Math.sin(time * 0.011 + 1.2) * 0.55 +
          Math.sin(time * 0.019 + 2.4) * 0.2
        );

        const jitterY = (
          Math.cos(time * 0.0065) * 0.55 +
          Math.sin(time * 0.0125 + 0.7) * 0.3 +
          Math.cos(time * 0.021 + 1.8) * 0.12
        );

        const jitterRot = (
          Math.sin(time * 0.0058) * 0.24 +
          Math.cos(time * 0.0115 + 1.5) * 0.12 +
          Math.sin(time * 0.018 + 0.4) * 0.05
        );

        if (navbarRef.current) {
          navbarRef.current.style.transform = `translate3d(${jitterX.toFixed(2)}px, ${jitterY.toFixed(2)}px, 0) rotate(${jitterRot.toFixed(2)}deg)`;
        }

        if (centerCableRef.current) {
          centerCableRef.current.style.transform = `rotate(${(jitterRot * 0.85).toFixed(2)}deg)`;
        }
      } else {
        // When not scrolling: completely still, perfectly centered at resting anchor
        if (navbarRef.current && navbarRef.current.style.transform !== 'none') {
          navbarRef.current.style.transform = 'none';
        }
        if (centerCableRef.current && centerCableRef.current.style.transform !== 'none') {
          centerCableRef.current.style.transform = 'none';
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateJitter);
    };

    animationFrameRef.current = requestAnimationFrame(updateJitter);

    return () => {
      clearTimeout(timer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none flex flex-col items-center justify-start pt-0 px-4">
      {/* ─── EXACTLY ONE CENTRAL HANGING STRING / CABLE ─── */}
      <div className="relative w-full max-w-4xl h-8 md:h-12 flex justify-center pointer-events-none">
        <div
          ref={centerCableRef}
          style={{ transformOrigin: 'top center' }}
          className={`w-[2px] h-full transition-opacity duration-700 ease-out flex flex-col items-center ${
            hasEntered ? 'opacity-90 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
        >
          {/* Top Anchor Mount */}
          <div className="w-3.5 h-2 bg-slate-600 rounded-b-sm shadow-xs border-b border-rose-500/60" />
          {/* Central Hanging Cable Line */}
          <div className="w-full flex-1 hanging-cable-center" />
          {/* Bottom Connection Bracket Eyelet */}
          <div className="w-2.5 h-2.5 rounded-full border border-rose-500 bg-slate-800 shadow-xs" />
        </div>
      </div>

      {/* ─── MAIN LIGHT GLASSY PILL NAVBAR (Suspended by single central string) ─── */}
      <div
        className={`pointer-events-auto transition-opacity duration-700 ${
          hasEntered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          ref={navbarRef}
          style={{ transformOrigin: 'top center', willChange: 'transform' }}
          className="relative"
        >
        <nav className="relative flex items-center justify-between gap-3 sm:gap-6 md:gap-8 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/90 backdrop-blur-2xl border border-slate-200/90 max-w-4xl shadow-xl shadow-slate-300/40">
          {/* Central Hanging Bracket Mount on the Pill */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-2 rounded-t-sm bg-slate-700 border-t border-rose-500/70 shadow-xs" />

          {/* Brand Monogram & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group pr-2"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 p-[1px] shadow-sm shadow-rose-500/30 group-hover:shadow-rose-500/50 transition-shadow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-tighter text-rose-400 group-hover:text-white transition-colors">
                  {personalData.monogram}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 font-heading">
                {personalData.name}
              </span>
              <span className="text-[10px] font-mono text-rose-600 font-semibold leading-none">
                MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-rose-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white border border-rose-200 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold text-xs tracking-tight shadow-md shadow-rose-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-3 h-3" />
              <span>Get in touch</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-3 w-full max-w-sm rounded-3xl bg-white/95 backdrop-blur-2xl p-4 shadow-2xl border border-slate-200 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-rose-50 text-rose-700 font-bold border border-rose-200'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-semibold text-sm shadow-md shadow-rose-600/30"
              >
                <Send className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
