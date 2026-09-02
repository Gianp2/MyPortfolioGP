import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/site';
import { FadeInSection } from './FadeInSection';

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] py-14 sm:py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 pb-5 sm:pb-10 border-b border-[#222220]">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">05</span>
                <span className="text-[#555550]">/</span>
                <span>METODOLOGÍA & CRITERIO</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase">
                CÓMO TRABAJO
              </h2>
            </div>
          </div>
        </FadeInSection>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 pt-7 sm:pt-14">
          {siteConfig.process.map((step, idx) => (
            <FadeInSection key={step.number} delay={idx * 0.1} amount={0.2} yOffset={20}>
              <div className="flex flex-col justify-between p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-[#141413] border border-[#242422] hover:border-[#42423e] hover:bg-[#181816] transition-all group min-h-0 sm:min-h-[280px]">
                <div>
                  <span className="font-mono text-xl min-[360px]:text-2xl sm:text-4xl font-bold text-[#73736e] group-hover:text-emerald-400 transition-colors block mb-2.5 sm:mb-6">
                    {step.number}
                  </span>
                  <h3 className="text-base min-[360px]:text-lg sm:text-2xl font-display font-bold text-white tracking-tight uppercase mb-2 sm:mb-4">
                    {step.title}
                  </h3>
                </div>

                <p className="text-[11px] min-[360px]:text-xs sm:text-sm text-[#a1a19a] leading-relaxed border-t border-[#242422] pt-3 sm:pt-4">
                  "{step.description}"
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
