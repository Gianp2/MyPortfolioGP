import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/site';
import { FadeInSection } from './FadeInSection';
import {
  Terminal,
  FileCode,
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

  // ================================
  // TITLE TYPEWRITER
  // ================================
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);

  // ================================
  // TERMINAL TYPEWRITER
  // ================================
  const [logIndex, setLogIndex] = useState(0);
  const [displayLog, setDisplayLog] = useState("");
  const [isDeletingLog, setIsDeletingLog] = useState(false);

  // ================================
  // HEADLINE TYPEWRITER EFFECT
  // ================================
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

  // ================================
  // TERMINAL LOG TYPEWRITER EFFECT
  // ================================
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
      className="relative w-full overflow-hidden border-t border-[#222220] py-12 sm:py-20 md:py-28"
    >

      {/* =====================================================
          VIDEO DE FONDO
      ====================================================== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
      />

      {/* =====================================================
          OVERLAY OSCURO
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-black/70" />

      {/* =====================================================
          DEGRADADO
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90" />

      {/* =====================================================
          NOISE
      ====================================================== */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.65] mix-blend-overlay" />

      {/* =====================================================
          GLOW SUTIL
      ====================================================== */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl sm:h-96 sm:w-96" />

      {/* =====================================================
          CONTENIDO
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-3.5 sm:px-6 md:px-8 lg:px-12">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col justify-between gap-2.5 border-b border-white/15 pb-4 sm:flex-row sm:items-end sm:gap-6 sm:pb-8">

            <div className="space-y-1 sm:space-y-2">

              <div className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/35 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#a1a19a] backdrop-blur-md min-[360px]:text-[11px] sm:gap-2 sm:py-1">

                <span className="font-bold text-white">
                  03
                </span>

                <span className="text-[#555550]">
                  /
                </span>

                <span>
                  PERFIL PROFESIONAL
                </span>

              </div>

              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white drop-shadow-lg min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                SOBRE MÍ
              </h2>

            </div>

            <div className="flex items-center font-mono text-[10px] text-[#8e8e88] min-[360px]:text-[11px] sm:text-xs">

              <span className="uppercase tracking-wider text-[#d4d4ce]">
              </span>

            </div>

          </div>
        </FadeInSection>

        {/* ===================================================
            MAIN GRID CONTENT
        ==================================================== */}
        <div className="grid grid-cols-1 items-start gap-5 pt-6 sm:gap-8 sm:pt-10 lg:grid-cols-12 lg:gap-10">

          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          <FadeInSection
            delay={0.1}
            amount={0.2}
            className="space-y-3 lg:col-span-6 sm:space-y-4"
          >

            {/* ===============================================
                CODE CARD
            ================================================ */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121211]/90 shadow-2xl shadow-black/80 backdrop-blur-md transition-all hover:border-white/20 sm:rounded-2xl">

              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#181816]/90 px-3 py-2 sm:px-4 sm:py-2.5">

                {/* Window dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">

                  <span className="h-2.5 w-2.5 rounded-full border border-[#e0443e]/40 bg-[#ff5f56]/90" />

                  <span className="h-2.5 w-2.5 rounded-full border border-[#dea123]/40 bg-[#ffbd2e]/90" />

                  <span className="h-2.5 w-2.5 rounded-full border border-[#1aab29]/40 bg-[#27c93f]/90" />

                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 font-mono text-[10px] sm:text-xs">

                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                      activeTab === 'profile'
                        ? 'bg-[#222220] font-medium text-emerald-400'
                        : 'text-[#8e8e88] hover:text-white'
                    }`}
                  >
                    <FileCode className="h-3 w-3" />
                    <span>perfil.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('mindset')}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                      activeTab === 'mindset'
                        ? 'bg-[#222220] font-medium text-emerald-400'
                        : 'text-[#8e8e88] hover:text-white'
                    }`}
                  >
                    <Compass className="h-3 w-3" />
                    <span>mision.ts</span>
                  </button>

                </div>

                <span className="hidden font-mono text-[10px] text-[#73736e] sm:inline-block">
                  TypeScript
                </span>

              </div>

              {/* ===========================================
                  CODE BODY
              ============================================ */}
              <div className="overflow-x-auto p-3.5 font-mono text-[11px] leading-relaxed text-[#d4d4ce] sm:p-5 sm:text-sm">

                <AnimatePresence mode="wait">

                  {/* PROFILE */}
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
                        <span className="text-[#a855f7]">
                          const
                        </span>{" "}
                        <span className="text-[#38bdf8]">
                          desarrollador
                        </span>{" "}
                        = &#123;
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          nombre:
                        </span>{" "}
                        <span className="text-[#fde047]">
                          "Gianluca Pasquinelli"
                        </span>,
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          titulos:
                        </span>{" "}
                        [
                        <span className="text-emerald-400">
                          "Analista Funcional de Sistemas Informáticos"
                        </span>
                        ,{" "}
                        <span className="text-emerald-400">
                          "Desarrollador de Software"
                        </span>
                        ],
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          ubicacion:
                        </span>{" "}
                        <span className="text-[#fde047]">
                          "Las Parejas, Santa Fe, Argentina"
                        </span>,
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          intereses:
                        </span>{" "}
                        [
                        <span className="text-[#38bdf8]">
                          "Videojuegos"
                        </span>
                        ,{" "}
                        <span className="text-[#38bdf8]">
                          "Nuevas Tecnologías"
                        </span>
                        ,{" "}
                        <span className="text-[#38bdf8]">
                          "Aprendizaje Continuo"
                        </span>
                        ],
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          disponible:
                        </span>{" "}
                        <span className="text-[#4ade80]">
                          true
                        </span>
                      </div>

                      <div>
                        &#125;;
                      </div>

                    </motion.div>
                  )}

                  {/* MINDSET */}
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
                        <span className="text-[#a855f7]">
                          export const
                        </span>{" "}
                        <span className="text-[#38bdf8]">
                          mision
                        </span>{" "}
                        = &#123;
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          objetivo:
                        </span>{" "}
                        <span className="text-[#fde047]">
                          "Diseñar interfaces y aplicaciones que fusionen creatividad, usabilidad y eficiencia técnica"
                        </span>,
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          valores:
                        </span>{" "}
                        [
                        <span className="text-emerald-400">
                          "Responsabilidad"
                        </span>
                        ,{" "}
                        <span className="text-emerald-400">
                          "Colaboración"
                        </span>
                        ,{" "}
                        <span className="text-emerald-400">
                          "Resolución de Problemas"
                        </span>
                        ],
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-[#94a3b8]">
                          adaptabilidad:
                        </span>{" "}
                        <span className="text-[#4ade80]">
                          "Rápida integración a nuevos entornos y tecnologías"
                        </span>
                      </div>

                      <div>
                        &#125;;
                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>

              {/* ===========================================
                  STATUS BAR
              ============================================ */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0f0f0e]/95 px-3 py-2 font-mono text-[10px] text-[#8e8e88] sm:px-4 sm:text-xs">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span>
                    status: activo para nuevos proyectos
                  </span>

                </div>

                <span className="text-[#555550]">
                  ES2024
                </span>

              </div>

            </div>

            {/* ===============================================
                TERMINAL
            ================================================ */}
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#141413]/90 p-2.5 font-mono text-[11px] text-emerald-400 shadow-inner backdrop-blur-md min-[360px]:text-xs sm:p-3 sm:text-sm">

              <Terminal className="h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />

              <div className="flex-1 overflow-hidden whitespace-nowrap">

                <span className="mr-1.5 text-[#8e8e88]">
                  &gt;
                </span>

                <span className="font-medium text-white">
                  {displayLog}
                </span>

                <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-emerald-400" />

              </div>

            </div>

          </FadeInSection>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <FadeInSection
            delay={0.15}
            amount={0.2}
            className="space-y-4 lg:col-span-6 sm:space-y-5"
          >

            {/* ===============================================
                VALUE PROPOSITION
            ================================================ */}
            <div className="flex min-h-[76px] flex-col justify-center space-y-2 sm:min-h-[88px] sm:space-y-2.5">

              <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-emerald-400 sm:text-xs">

                

              </span>

              <h3 className="font-display text-base font-bold uppercase leading-snug tracking-tight text-white drop-shadow-lg min-[360px]:text-lg sm:text-xl md:text-2xl">

                <span className="text-white">
                  {displayTitle}
                </span>

                <span className="ml-1 inline-block h-5 w-2 translate-y-0.5 animate-pulse bg-emerald-400" />

              </h3>

            </div>

            {/* ===============================================
                SUMMARY
            ================================================ */}
            <p className="text-xs font-normal leading-relaxed text-[#d4d4ce] drop-shadow-md min-[360px]:text-sm sm:text-base">

              Soy{" "}
              <strong className="font-medium text-white">
                Analista Funcional de Sistemas Informáticos y Desarrollador de Software
              </strong>
              , enfocado en la responsabilidad, colaboración y resolución de problemas. Me adapto rápidamente a diferentes entornos y aplico nuevas tecnologías para crear soluciones eficientes y de calidad.

            </p>

          </FadeInSection>

        </div>

      </div>

    </section>
  );
};
