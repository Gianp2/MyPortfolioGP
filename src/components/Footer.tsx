import React from 'react';
import { siteConfig } from '../data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#8e8e88] border-t border-[#242422] py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
        {/* Centered stacked text */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-mono font-semibold text-[#d4d4ce] tracking-widest uppercase">
            {new Date().getFullYear()} {siteConfig.name.toUpperCase()}.
          </p>
          <p className="text-[10px] sm:text-xs font-mono text-[#73736e] tracking-wider uppercase">
            TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};


