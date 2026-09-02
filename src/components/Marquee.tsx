import React from 'react';
import { FadeInSection } from './FadeInSection';

export const Marquee: React.FC = () => {
  const items = [
    "ANALISTA FUNCIONAL DE SISTEMAS INFORMÁTICOS",
    "DESARROLLADOR DE SOFTWARE",
    "SOLUCIONES DIGITALES EFICIENTES",
    "ARQUITECTURA DE SOFTWARE",
  ];

  return (
    <div className="w-full border-y border-[#222220] bg-[#0a0a0a] py-6 sm:py-10 text-[#fbfbfa] overflow-hidden select-none">
      <FadeInSection yOffset={12} duration={0.5}>
        <div className="relative flex whitespace-nowrap overflow-x-hidden">
          {/* Infinite CSS Animation track */}
          <div className="flex animate-marquee motion-reduce:animate-none space-x-8 sm:space-x-14 shrink-0 items-center">
            {Array.from({ length: 4 }).map((_, loopIdx) => (
              <React.Fragment key={loopIdx}>
                {items.map((item, idx) => (
                  <div key={`${loopIdx}-${idx}`} className="flex items-center space-x-8 sm:space-x-14">
                    <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-extrabold tracking-tight uppercase text-[#fbfbfa]">
                      {item}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl text-[#3d3d3a] font-mono shrink-0 font-light">/</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
