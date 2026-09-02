import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { FadeInSection } from './FadeInSection';

export const SelectedWork: React.FC = () => {
  return (
    <section
      id="work"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] py-14 sm:py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 pb-4 sm:pb-8 border-b border-[#222220]">
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">02</span>
                <span className="text-[#555550]">/</span>
                <span>PROYECTOS SELECCIONADOS</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight uppercase">
                PROYECTOS
              </h2>
            </div>
          </div>
        </FadeInSection>

        {/* Responsive Stacking Cards Container */}
        <div className="pt-6 sm:pt-12 relative pb-8 sm:pb-16 space-y-6 sm:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative sm:sticky transition-all duration-300"
              style={{
                top: `calc(72px + ${index * 24}px)`,
                zIndex: index + 10,
              }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
