import React, { useState } from 'react';
import { LayoutGrid, Sliders } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectSlider } from '../components/projects/ProjectSlider';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';
import { projectsData } from '../data/portfolioData';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Selected Projects & Production"
          highlight="Applications"
          subtitle="Explore selected applications spanning enterprise MERN platforms, e-commerce solutions, and modern web platforms."
        />

        {/* Filter & View Mode Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 border border-rose-300 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-white border border-slate-200 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Slider vs Grid */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80">
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                viewMode === 'slider'
                  ? 'bg-white text-rose-700 font-semibold shadow-xs border border-slate-200/80'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Slider</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-rose-700 font-semibold shadow-xs border border-slate-200/80'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* Main Display: Slider or Grid */}
        {viewMode === 'slider' ? (
          <ProjectSlider
            key={selectedCategory}
            projects={filteredProjects}
            onOpenModal={(proj) => setActiveModalProject(proj)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredProjects.map((project) => (
              <div key={project.id} className="min-h-[480px] h-full">
                <ProjectCard
                  project={project}
                  onOpenModal={(proj) => setActiveModalProject(proj)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
