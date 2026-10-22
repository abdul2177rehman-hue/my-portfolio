import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project, onOpenModal, isCenter = true }) => {
  return (
    <div
      className={`w-full h-full rounded-3xl bg-white/95 hover:bg-white backdrop-blur-2xl p-5 sm:p-6 border ${
        isCenter
          ? 'border-slate-200/90 shadow-xl shadow-slate-300/40 hover:border-rose-500/40'
          : 'border-slate-200/60 shadow-md'
      } transition-colors duration-200 flex flex-col justify-between relative group select-none`}
    >
      <div className="flex-1 flex flex-col">
        {/* Top Bar: Category Badge & Stack Identifier */}
        <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/80 text-[11px] font-mono font-semibold text-rose-700 shadow-xs truncate max-w-[200px]">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500 font-medium shrink-0">
            MERN Stack
          </span>
        </div>

        {/* Project SVG Image Preview */}
        <div className="relative z-10 mb-3 shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 aspect-[16/9] flex items-center justify-center shadow-inner group/img">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Title & Description */}
        <div className="relative z-10 my-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-rose-600 transition-colors truncate">
            {project.title}
          </h3>
          <p className="mt-1 text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="relative z-10 my-2.5 space-y-1 border-t border-b border-slate-100 py-2">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Badges */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100/90 border border-slate-200 text-[10px] font-mono font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button: Single "View Project" button */}
      <div className="relative z-10 pt-2 shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
          className="w-full py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-md shadow-rose-600/20 cursor-pointer"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
