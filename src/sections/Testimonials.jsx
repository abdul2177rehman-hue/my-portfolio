import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { testimonialsData } from '../data/portfolioData';

export const Testimonials = () => {
  // Duplicate items for continuous seamless loop
  const duplicatedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Endorsements & Trust"
          title="Client Collaborations & Industry"
          highlight="Feedback"
          subtitle="Real testimonials from engineering leads, founders, and creative directors I have had the privilege to build with."
        />
      </div>

      {/* Floating Marquee Strip with Jolt-Free Pause on Hover */}
      <div className="w-full relative mt-10 py-4 overflow-hidden">
        {/* Edge Gradient Mask for seamless fade on light background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden py-2">
          <div className="marquee-track-testimonials">
            {duplicatedTestimonials.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="px-3 shrink-0">
                <div className="w-[320px] sm:w-[390px] h-full rounded-3xl bg-white/85 hover:bg-white backdrop-blur-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-rose-400 transition-colors duration-200 flex flex-col justify-between group relative overflow-hidden shadow-lg shadow-slate-200/40">
                  {/* Subtle top rose glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-rose-500/[0.05] rounded-full blur-xl pointer-events-none group-hover:bg-rose-500/10 transition-colors" />

                  <div>
                    {/* Header: Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-rose-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                        ))}
                      </div>

                      <Quote className="w-6 h-6 text-rose-500/30 group-hover:text-rose-500/60 transition-colors" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 p-[1px] shadow-sm">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-mono text-xs font-bold text-rose-300">
                        {item.avatar}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-rose-600 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-mono">
                        {item.role} • <span className="text-rose-700 font-semibold">{item.company}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
