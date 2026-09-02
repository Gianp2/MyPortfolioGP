import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/site';
import { FadeInSection } from './FadeInSection';
import {
  Terminal,
  Code2,
  FileCode,
  Target,
  Compass,
} from 'lucide-react';

const TYPED_TITLES = [
  "ANALISTA FUNCIONAL DE SISTEMAS INFORMÁTICOS",
  "DESARROLLADOR DE SOFTWARE",
  "TRANSFORMO REQUERIMIENTOS EN SOFTWARE",
];

const TERMINAL_LOGS = [
  "Relevamiento de requerimientos y modelado funcional.",
  "Desarrollo de software con arquitectura limpia y modular.",
  "Soluciones digitales eficientes y orientadas al usuario.",
];

type ActiveTab = 'profile' | 'mindset';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  
  // Title Typewriter State
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);

  // Terminal Typewriter State
  const [logIndex, setLogIndex] = useState(0);
  const [displayLog, setDisplayLog] = useState("");
  const [isDeletingLog, setIsDeletingLog] = useState(false);

  // Headline typewriter effect
  useEffect(() => {
    const current = TYPED_TITLES[titleIndex];
    const speed = isDeletingTitle ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeletingTitle) {
        setDisplayTitle(current.substring(0, displayTitle.length + 1));
        if (displayTitle.length === current.length) {
          setTimeout(() => setIsDeletingTitle(true), 2800);
        }
      } else {
        setDisplayTitle(current.substring(0, displayTitle.length - 1));
        if (displayTitle.length === 0) {
          setIsDeletingTitle(false);
          setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayTitle, isDeletingTitle, titleIndex]);

  // Terminal log typewriter effect
  useEffect(() => {
    const current = TERMINAL_LOGS[logIndex];
    const speed = isDeletingLog ? 20 : 45;

    const timer = setTimeout(() => {
      if (!isDeletingLog) {
        setDisplayLog(current.substring(0, displayLog.length + 1));
        if (displayLog.length === current.length) {
          setTimeout(() => setIsDeletingLog(true), 2500);
        }
      } else {
        setDisplayLog(current.substring(0, displayLog.length - 1));
        if (displayLog.length === 0) {
          setIsDeletingLog(false);
          setLogIndex((prev) => (prev + 1) % TERMINAL_LOGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayLog, isDeletingLog, logIndex]);

  return (
    <section
      id="about"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] py-12 sm:py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-6 pb-4 sm:pb-8 border-b border-[#222220]">
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">03</span>
                <span className="text-[#555550]">/</span>
                <span>PERFIL PROFESIONAL</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase">
                SOBRE MÍ
              </h2>
            </div>

            <div className="flex items-center text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono text-[#8e8e88]">
              <span className="text-[#d4d4ce] uppercase tracking-wider">LAS PAREJAS, Sta. FE</span>
            </div>
          </div>
        </FadeInSection>

        {/* Main Grid Content */}
        <div className="pt-6 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Interactive Code Card & Terminal */}
          <FadeInSection delay={0.1} amount={0.2} className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="rounded-xl sm:rounded-2xl bg-[#121211] border border-[#262624] overflow-hidden shadow-2xl shadow-black/80 hover:border-[#383835] transition-all">
              {/* Editor Window Header */}
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#181816] border-b border-[#242422] flex items-center justify-between">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/40" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'profile'
                        ? 'bg-[#222220] text-emerald-400 font-medium'
                        : 'text-[#8e8e88] hover:text-white'
                    }`}
                  >
                    <FileCode className="w-3 h-3" />
                    <span>perfil.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('mindset')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === 'mindset'
                        ? 'bg-[#222220] text-emerald-400 font-medium'
                        : 'text-[#8e8e88] hover:text-white'
                    }`}
                  >
                    <Compass className="w-3 h-3" />
                    <span>mision.ts</span>
                  </button>
                </div>

                <span className="hidden sm:inline-block text-[10px] font-mono text-[#73736e]">TypeScript</span>
              </div>

              {/* Editor Code Body */}
              <div className="p-3.5 sm:p-5 font-mono text-[11px] min-[360px]:text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#d4d4ce]">
                <AnimatePresence mode="wait">
                  {activeTab === 'profile' && (
                    <motion.div
                      key="tab-profile"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-1"
                    >
                      <div>
                        <span className="text-[#a855f7]">const</span> <span className="text-[#38bdf8]">desarrollador</span> = &#123;
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">nombre:</span> <span className="text-[#fde047]">"Gianluca Pasquinelli"</span>,
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">titulos:</span> [<span className="text-emerald-400">"Analista Funcional de Sistemas Informáticos"</span>, <span className="text-emerald-400">"Desarrollador de Software"</span>],
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">ubicacion:</span> <span className="text-[#fde047]">"Las Parejas, Santa Fe, Argentina"</span>,
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">intereses:</span> [<span className="text-[#38bdf8]">"Videojuegos"</span>, <span className="text-[#38bdf8]">"Nuevas Tecnologías"</span>, <span className="text-[#38bdf8]">"Aprendizaje Continuo"</span>],
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">disponible:</span> <span className="text-[#4ade80]">true</span>
                      </div>
                      <div>&#125;;</div>
                    </motion.div>
                  )}

                  {activeTab === 'mindset' && (
                    <motion.div
                      key="tab-mindset"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-1"
                    >
                      <div>
                        <span className="text-[#a855f7]">export const</span> <span className="text-[#38bdf8]">mision</span> = &#123;
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">objetivo:</span> <span className="text-[#fde047]">"Diseñar interfaces y aplicaciones que fusionen creatividad, usabilidad y eficiencia técnica"</span>,
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">valores:</span> [<span className="text-emerald-400">"Responsabilidad"</span>, <span className="text-emerald-400">"Colaboración"</span>, <span className="text-emerald-400">"Resolución de Problemas"</span>],
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">adaptabilidad:</span> <span className="text-[#4ade80]">"Rápida integración a nuevos entornos y tecnologías"</span>
                      </div>
                      <div>&#125;;</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Status Terminal Output */}
              <div className="px-3 sm:px-4 py-2 bg-[#0f0f0e] border-t border-[#242422] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#8e8e88]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>status: activo para nuevos proyectos</span>
                </div>
                <span className="text-[#555550]">ES2024</span>
              </div>
            </div>

            {/* Typewriter Terminal Banner */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#141413] border border-[#242422] font-mono text-[11px] min-[360px]:text-xs sm:text-sm text-emerald-400 flex items-center gap-2.5 shadow-inner">
              <Terminal className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 shrink-0" />
              <div className="flex-1 overflow-hidden whitespace-nowrap">
                <span className="text-[#8e8e88] mr-1.5">&gt;</span>
                <span className="text-white font-medium">{displayLog}</span>
                <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 translate-y-0.5 animate-pulse" />
              </div>
            </div>
          </FadeInSection>

          {/* Right Column: Dynamic Typed Headline & Concise Value Props */}
          <FadeInSection delay={0.15} amount={0.2} className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Main Statement with Elegant Typewriter */}
            <div className="space-y-2 sm:space-y-2.5 min-h-[76px] sm:min-h-[88px] flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                PROPUESTA DE VALOR
              </span>
              <h3 className="text-base min-[360px]:text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase leading-snug">
                <span className="text-white">{displayTitle}</span>
                <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 translate-y-0.5 animate-pulse" />
              </h3>
            </div>

            {/* Concise Summary Paragraph */}
            <p className="text-xs min-[360px]:text-sm sm:text-base text-[#d4d4ce] font-normal leading-relaxed">
              Soy <strong className="text-white font-medium">Analista Funcional de Sistemas Informáticos y Desarrollador de Software</strong>, enfocado en la responsabilidad, colaboración y resolución de problemas. Me adapto rápidamente a diferentes entornos y aplico nuevas tecnologías para crear soluciones eficientes y de calidad.
            </p>

            {/* 2 Focused Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-0.5">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#141413] border border-[#242422] space-y-1.5 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">ANÁLISIS FUNCIONAL</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#a1a19a] leading-relaxed">
                  Relevamiento de requerimientos, modelado de procesos y especificación funcional orientada a soluciones reales.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#141413] border border-[#242422] space-y-1.5 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">DESARROLLO DE SOFTWARE</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#a1a19a] leading-relaxed">
                  Construcción de aplicaciones eficientes, código modular y arquitectura escalable con buenas prácticas.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

