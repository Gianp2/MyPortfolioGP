import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { FadeInSection } from './FadeInSection';

export const Intro: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const updateScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft } = el;
    const children = Array.from(el.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCard(closestIndex);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      el.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children[index]) {
      el.scrollTo({ left: children[index].offsetLeft, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    scrollToCard(Math.min(activeCard + 1, siteConfig.focus.length - 1));
  };

  const handlePrev = () => {
    scrollToCard(Math.max(activeCard - 1, 0));
  };

  return (
    <section
      id="intro"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] py-14 sm:py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <FadeInSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 pb-5 sm:pb-10 border-b border-[#222220]">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">01</span>
                <span className="text-[#555550]">/</span>
                <span>PERFIL & ENFOQUE</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase">
                {siteConfig.introHeading}
              </h2>
            </div>

            <div className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono text-[#8e8e88] uppercase tracking-wider">
              (DISEÑO & ARQUITECTURA)
            </div>
          </div>
        </FadeInSection>

        {/* Content Body */}
        <div className="pt-7 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Main Statement */}
          <FadeInSection delay={0.1} className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <p className="text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#d4d4ce] font-normal leading-relaxed">
              {siteConfig.introDescription}
            </p>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#141413] border border-[#242422] space-y-1 text-[11px] min-[360px]:text-xs font-mono text-[#a1a19a]">
              <span className="text-white font-semibold block uppercase">Criterio Fundamental</span>
              <span>Construir software modular donde cada requerimiento técnico resuelva una necesidad real de negocio.</span>
            </div>
          </FadeInSection>

          {/* Focus Pillars Carousel */}
          <FadeInSection delay={0.2} className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Carousel Nav Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8e8e88] uppercase tracking-wider">
                <span className="text-emerald-400 font-bold">●</span>
                <span>ENFOQUE ESTRATÉGICO ({activeCard + 1}/{siteConfig.focus.length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  disabled={activeCard === 0}
                  aria-label="Enfoque anterior"
                  className="w-7 h-7 rounded-lg bg-[#141413] border border-[#242422] hover:border-[#444440] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeCard === siteConfig.focus.length - 1}
                  aria-label="Enfoque siguiente"
                  className="w-7 h-7 rounded-lg bg-[#141413] border border-[#242422] hover:border-[#444440] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Snap Carousel Container */}
            <div
              ref={carouselRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1 -mx-3.5 sm:-mx-0 px-3.5 sm:px-0 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {siteConfig.focus.map((item) => (
                <div
                  key={item.title}
                  className="snap-start shrink-0 w-[85%] min-[480px]:w-[70%] sm:w-[calc(50%-0.5rem)]"
                >
                  <div className="h-full p-4 sm:p-5 rounded-xl bg-[#141413] border border-[#242422] group hover:border-[#42423e] hover:bg-[#181816] transition-all space-y-2 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs min-[360px]:text-sm sm:text-base font-bold text-white font-display uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                          {item.number}
                        </span>
                      </div>
                      <p className="text-[11px] min-[360px]:text-xs sm:text-sm text-[#a1a19a] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#1e1e1c] flex items-center justify-between text-[10px] font-mono text-[#73736e]">
                      <span>Enfoque activo</span>
                      <span className="text-emerald-400">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {siteConfig.focus.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToCard(dotIdx)}
                  aria-label={`Ir a enfoque ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeCard === dotIdx
                      ? 'w-5 h-1.5 bg-emerald-400'
                      : 'w-1.5 h-1.5 bg-[#2a2a27] hover:bg-[#484844]'
                  }`}
                />
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
