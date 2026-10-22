import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export const ProjectSlider = ({ projects, onOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const cardRefs = useRef({});
  const timerRef = useRef(null);
  const activeTimelineRef = useRef(null);

  // Touch gesture coordinates
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const total = projects.length;

  // Keep currentIndexRef synchronized
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Position all cards into their respective slots based on activeIndex
  const applySlotLayout = useCallback((activeIdx) => {
    if (!projects || projects.length === 0) return;

    // Kill any active running GSAP timeline
    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
      activeTimelineRef.current = null;
    }

    if (total === 1) {
      const el = cardRefs.current[projects[0]?.id];
      if (el) {
        gsap.set(el, {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          rotateY: 0,
          zIndex: 30,
          visibility: 'visible',
          pointerEvents: 'auto',
        });
      }
      isAnimatingRef.current = false;
      return;
    }

    if (total === 2) {
      projects.forEach((project, idx) => {
        const el = cardRefs.current[project.id];
        if (!el) return;

        if (idx === activeIdx) {
          // Center Slot (Front)
          gsap.set(el, {
            xPercent: 0,
            scale: 1,
            opacity: 1,
            rotateY: 0,
            zIndex: 30,
            visibility: 'visible',
            pointerEvents: 'auto',
          });
        } else {
          // Side Slot: alternate side cleanly
          const isRight = activeIdx === 0;
          gsap.set(el, {
            xPercent: isRight ? 68 : -68,
            scale: 0.86,
            opacity: 0.5,
            rotateY: isRight ? -7 : 7,
            zIndex: 10,
            visibility: 'visible',
            pointerEvents: 'auto',
          });
        }
      });
      isAnimatingRef.current = false;
      return;
    }

    // 3 or more projects
    projects.forEach((project, idx) => {
      const el = cardRefs.current[project.id];
      if (!el) return;

      let diff = (idx - activeIdx + total) % total;
      if (diff > total / 2) diff -= total;

      if (diff === 0) {
        // Center Slot (Front)
        gsap.set(el, {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          rotateY: 0,
          zIndex: 30,
          visibility: 'visible',
          pointerEvents: 'auto',
        });
      } else if (diff === -1) {
        // Left Slot
        gsap.set(el, {
          xPercent: -68,
          scale: 0.86,
          opacity: 0.5,
          rotateY: 7,
          zIndex: 10,
          visibility: 'visible',
          pointerEvents: 'auto',
        });
      } else if (diff === 1) {
        // Right Slot
        gsap.set(el, {
          xPercent: 68,
          scale: 0.86,
          opacity: 0.5,
          rotateY: -7,
          zIndex: 10,
          visibility: 'visible',
          pointerEvents: 'auto',
        });
      } else {
        // Off-screen / Inactive
        const isRightSide = diff > 0;
        gsap.set(el, {
          xPercent: isRightSide ? 145 : -145,
          scale: 0.65,
          opacity: 0,
          rotateY: isRightSide ? -12 : 12,
          zIndex: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
        });
      }
    });

    isAnimatingRef.current = false;
  }, [projects, total]);

  // Initial mount or layout reset
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      applySlotLayout(currentIndexRef.current);
    });
    return () => {
      cancelAnimationFrame(frameId);
      if (activeTimelineRef.current) activeTimelineRef.current.kill();
    };
  }, [applySlotLayout]);

  // Synchronized NEXT slide transition
  const nextSlide = useCallback(() => {
    if (total <= 1 || isAnimatingRef.current) return;

    const curr = currentIndexRef.current;
    const next = (curr + 1) % total;
    const currEl = cardRefs.current[projects[curr]?.id];
    const nextEl = cardRefs.current[projects[next]?.id];

    if (!currEl || !nextEl) return;

    isAnimatingRef.current = true;
    setCurrentIndex(next);

    const duration = 0.55;
    const ease = 'power2.out';

    if (activeTimelineRef.current) activeTimelineRef.current.kill();
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        applySlotLayout(next);
      },
    });
    activeTimelineRef.current = tl;

    if (total === 2) {
      if (curr === 0) {
        // Card 0 slides to left (-68%), Card 1 slides into center (0%)
        tl.to(currEl, { xPercent: -68, scale: 0.86, opacity: 0.5, rotateY: 7, zIndex: 10, duration, ease }, 0);
        tl.to(nextEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);
      } else {
        // Card 1 slides to right (+68%), Card 0 slides into center (0%)
        tl.to(currEl, { xPercent: 68, scale: 0.86, opacity: 0.5, rotateY: -7, zIndex: 10, duration, ease }, 0);
        tl.to(nextEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);
      }
      return;
    }

    // 3 or more projects
    const rightIncoming = (curr + 2) % total;
    const leftOutgoing = (curr - 1 + total) % total;
    const incomingEl = cardRefs.current[projects[rightIncoming]?.id];
    const outgoingEl = cardRefs.current[projects[leftOutgoing]?.id];

    if (incomingEl && incomingEl !== outgoingEl) {
      gsap.set(incomingEl, {
        xPercent: 145,
        scale: 0.65,
        opacity: 0,
        rotateY: -12,
        zIndex: 5,
        visibility: 'visible',
        pointerEvents: 'none',
      });
    }

    projects.forEach((proj, idx) => {
      if (idx !== curr && idx !== next && idx !== rightIncoming && idx !== leftOutgoing) {
        const el = cardRefs.current[proj.id];
        if (el) {
          gsap.set(el, { opacity: 0, zIndex: 0, visibility: 'hidden', pointerEvents: 'none' });
        }
      }
    });

    tl.to(currEl, { xPercent: -68, scale: 0.86, opacity: 0.5, rotateY: 7, zIndex: 10, duration, ease }, 0);
    tl.to(nextEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);

    if (incomingEl) {
      tl.to(incomingEl, { xPercent: 68, scale: 0.86, opacity: 0.5, rotateY: -7, zIndex: 10, duration, ease }, 0);
    }
    if (outgoingEl && outgoingEl !== incomingEl) {
      tl.to(outgoingEl, { xPercent: -145, scale: 0.65, opacity: 0, rotateY: 12, zIndex: 0, duration, ease }, 0);
    }
  }, [total, projects, applySlotLayout]);

  // Synchronized PREV slide transition
  const prevSlide = useCallback(() => {
    if (total <= 1 || isAnimatingRef.current) return;

    const curr = currentIndexRef.current;
    const prev = (curr - 1 + total) % total;
    const currEl = cardRefs.current[projects[curr]?.id];
    const prevEl = cardRefs.current[projects[prev]?.id];

    if (!currEl || !prevEl) return;

    isAnimatingRef.current = true;
    setCurrentIndex(prev);

    const duration = 0.55;
    const ease = 'power2.out';

    if (activeTimelineRef.current) activeTimelineRef.current.kill();
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        applySlotLayout(prev);
      },
    });
    activeTimelineRef.current = tl;

    if (total === 2) {
      if (curr === 0) {
        // Card 0 slides to left (-68%), Card 1 slides into center (0%)
        tl.to(currEl, { xPercent: -68, scale: 0.86, opacity: 0.5, rotateY: 7, zIndex: 10, duration, ease }, 0);
        tl.to(prevEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);
      } else {
        // Card 1 slides to right (+68%), Card 0 slides into center (0%)
        tl.to(currEl, { xPercent: 68, scale: 0.86, opacity: 0.5, rotateY: -7, zIndex: 10, duration, ease }, 0);
        tl.to(prevEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);
      }
      return;
    }

    // 3 or more projects
    const leftIncoming = (curr - 2 + total) % total;
    const rightOutgoing = (curr + 1) % total;
    const incomingEl = cardRefs.current[projects[leftIncoming]?.id];
    const outgoingEl = cardRefs.current[projects[rightOutgoing]?.id];

    if (incomingEl && incomingEl !== outgoingEl) {
      gsap.set(incomingEl, {
        xPercent: -145,
        scale: 0.65,
        opacity: 0,
        rotateY: 12,
        zIndex: 5,
        visibility: 'visible',
        pointerEvents: 'none',
      });
    }

    projects.forEach((proj, idx) => {
      if (idx !== curr && idx !== prev && idx !== leftIncoming && idx !== rightOutgoing) {
        const el = cardRefs.current[proj.id];
        if (el) {
          gsap.set(el, { opacity: 0, zIndex: 0, visibility: 'hidden', pointerEvents: 'none' });
        }
      }
    });

    tl.to(currEl, { xPercent: 68, scale: 0.86, opacity: 0.5, rotateY: -7, zIndex: 10, duration, ease }, 0);
    tl.to(prevEl, { xPercent: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 30, duration, ease }, 0);

    if (incomingEl) {
      tl.to(incomingEl, { xPercent: -68, scale: 0.86, opacity: 0.5, rotateY: 7, zIndex: 10, duration, ease }, 0);
    }
    if (outgoingEl && outgoingEl !== incomingEl) {
      tl.to(outgoingEl, { xPercent: 145, scale: 0.65, opacity: 0, rotateY: -12, zIndex: 0, duration, ease }, 0);
    }
  }, [total, projects, applySlotLayout]);

  // Go directly to target slide
  const goToSlide = useCallback((targetIndex) => {
    if (targetIndex === currentIndexRef.current || isAnimatingRef.current) return;
    if (targetIndex === (currentIndexRef.current + 1) % total) {
      nextSlide();
      return;
    }
    if (targetIndex === (currentIndexRef.current - 1 + total) % total) {
      prevSlide();
      return;
    }
  }, [total, nextSlide, prevSlide]);

  // Continuous Auto-Advance Loop
  useEffect(() => {
    if (isPaused || total <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, total]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="w-full relative flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Coverflow Stage */}
      <div
        className="w-full max-w-6xl min-h-[560px] sm:min-h-[540px] relative flex items-center justify-center overflow-visible px-4"
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-full max-w-md sm:max-w-lg h-[520px] sm:h-[510px] flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardRefs.current[project.id] = el;
                }}
                onClick={() => {
                  if (!isCenter) goToSlide(index);
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                }}
                className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
                  !isCenter
                    ? 'cursor-pointer hover:opacity-80'
                    : 'cursor-default'
                }`}
              >
                <div className="w-full h-full">
                  <ProjectCard
                    project={project}
                    onOpenModal={onOpenModal}
                    isCenter={isCenter}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coverflow Carousel Controls & Pagination */}
      <div className="mt-6 flex items-center justify-between gap-6 w-full max-w-md px-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3.5 rounded-full bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200 hover:border-rose-300 transition-all hover:scale-110 active:scale-95 shadow-sm focus:outline-none cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator Dots & Status */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-gradient-to-r from-rose-600 to-red-600 shadow-xs'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-rose-700 font-bold">
              0{currentIndex + 1} / 0{total}
            </span>
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 font-medium">
              {isPaused ? <Pause className="w-2.5 h-2.5 text-slate-400" /> : <Play className="w-2.5 h-2.5 text-rose-600 animate-pulse" />}
              {isPaused ? 'Paused' : 'Auto'}
            </span>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3.5 rounded-full bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200 hover:border-rose-300 transition-all hover:scale-110 active:scale-95 shadow-sm focus:outline-none cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
