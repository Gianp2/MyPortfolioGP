import React from 'react';
import { Lock, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
  isHovered?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, isHovered = false }) => {
  // Extract clean domain for browser bar
  const getCleanUrl = (url?: string) => {
    if (!url) return 'localhost:3000';
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  };

  return (
    <div className="w-full h-full min-h-[170px] sm:min-h-[360px] md:min-h-[440px] bg-[#141413] text-[#fbfbfa] flex flex-col select-none relative overflow-hidden group">
      {/* Top Browser Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3.5 bg-[#1c1c1a] border-b border-[#2b2b28] z-10 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/40 inline-block" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/40 inline-block" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/40 inline-block" />
          </div>

          {/* Browser Address Bar */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#141413] border border-[#2b2b28] text-[11px] font-mono text-[#a1a19a]">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[200px] md:max-w-[280px]">
              {getCleanUrl(project.url)}
            </span>
          </div>
        </div>

        {/* Project Category Tag */}
        <div className="flex items-center gap-2">
          <span className="text-[9px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-[#262624] border border-[#383835] text-[#d4d4ce] uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Main Image Showcase Container */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0a0a09] flex items-center justify-center min-h-[125px] sm:min-h-[280px]">
        {project.image ? (
          <div className="w-full h-full overflow-hidden relative">
            <img
              src={project.image}
              alt={`Captura de pantalla de ${project.title}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle Gradient Vignette to blend smoothly with dark browser frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 sm:p-8 text-center text-[#73736e] space-y-1 sm:space-y-2">
            <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-[#52524e]" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">{project.title}</span>
          </div>
        )}
      </div>

      {/* Ambient Glow on hover */}
      <div
        className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          backgroundColor: project.accentColor || '#10b981',
        }}
      />
    </div>
  );
};
