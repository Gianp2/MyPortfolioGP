import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [hudStatus, setHudStatus] = useState({
    x: '0.00',
    y: '0.00',
    radius: '0.12',
    merges: 0,
    fps: 60
  });

  useEffect(() => {
    const checkMobile = () => {
      const mobileCheck =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;
      setIsMobile(mobileCheck);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
    >
      {/* Desktop Only: Interactive 3D Green Fluid Shader WebGL Canvas */}
      {!isMobile && <HeroCanvas onStatusUpdate={setHudStatus} />}

      {/* Mobile Only: Lightweight Pure CSS & SVG Gradient Fluid Backdrop (0% CPU, 60fps Native Scrolling) */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#161615_1px,transparent_1px),linear-gradient(to_bottom,#161615_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />

          {/* Deep Darkened Fluid Orbs */}
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-gradient-to-br from-emerald-700/15 via-emerald-950/10 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/3 -right-20 w-72 h-72 bg-gradient-to-bl from-emerald-600/12 via-teal-950/10 to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-12 left-1/4 w-64 h-64 bg-emerald-900/10 rounded-full blur-2xl opacity-35" />
          
          {/* Soft ambient center vignette */}
          <div className="absolute inset-0 bg-radial from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a]" />
        </div>
      )}

      {/* Ambient background soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[900px] h-[500px] sm:h-[900px] bg-gradient-to-br from-emerald-800/8 via-emerald-950/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Dark Contrast Overlays & Vignette so typography has pristine contrast */}
      <div className="absolute inset-0 bg-[#0a0a0a]/55 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_45%,rgba(10,10,10,0.85)_0%,rgba(10,10,10,0.60)_55%,rgba(10,10,10,0.92)_100%)] pointer-events-none z-0" />

      {/* Main Content Container bounded to site grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 flex-1 flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-12">
        {/* Top Clean Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between text-xs font-mono text-[#8e8e88] pb-4 sm:pb-6 border-b border-[#242422]/80 backdrop-blur-xs w-full"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px] min-[360px]:text-xs text-[#d4d4ce] whitespace-nowrap font-medium">
              DISPONIBLE PARA PROYECTOS
            </span>
          </div>

          <div className="text-[10px] min-[360px]:text-xs font-mono text-[#8e8e88] uppercase tracking-wider">
            LAS PAREJAS, SANTA FE · REMOTO
          </div>
        </motion.div>

        {/* Main Hero Visual Core */}
        <div className="my-auto py-6 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-end w-full">
          {/* Left / Main Giant Typography */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-1.5 sm:mb-3">
                <span className="text-[10px] min-[360px]:text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 block font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  PORTFOLIO PROFESIONAL
                </span>
              </div>
              <h1 className="text-3xl min-[360px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold font-display tracking-tight leading-[0.93] text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] break-words">
                Gianluca
                <br />
                <span className="text-[#e5e5e0]">Pasquinelli</span>
              </h1>
            </motion.div>

            {/* Subtitle / Role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1"
            >
              <p className="text-sm min-[360px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white tracking-tight uppercase leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Analista Funcional de Sistemas Informáticos
                <span className="text-[#a1a19a] font-normal block sm:inline sm:ml-2">
                  · Desarrollador de Software
                </span>
              </p>
            </motion.div>

            {/* Subtext info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] min-[360px]:text-[11px] font-mono text-[#8e8e88] tracking-wider uppercase pt-1 sm:pt-2"
            >
              <span>
                Soluciones digitales funcionales • Arquitectura y desarrollo de software
              </span>
            </motion.div>
          </div>

          {/* Right / Action buttons */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-5 lg:pb-2 flex flex-col justify-end">
            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3"
            >
              <button
                onClick={() => scrollTo('work')}
                className="group w-full py-3 sm:py-4 px-4 sm:px-6 bg-white text-black rounded-lg font-mono text-[11px] min-[360px]:text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-[#e5e5e0] transition-all flex items-center justify-between cursor-pointer shadow-md"
              >
                <span>VER PROYECTOS</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="group w-full py-3 sm:py-4 px-4 sm:px-6 bg-transparent text-white border border-[#383835] rounded-lg font-mono text-[11px] min-[360px]:text-xs sm:text-sm uppercase tracking-wider font-semibold hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-white transition-all flex items-center justify-between cursor-pointer"
              >
                <span>CONTACTO</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Distinctive Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-between pt-4 sm:pt-5 border-t border-[#242422]/80 backdrop-blur-xs text-xs font-mono text-[#8e8e88] w-full"
        >
          <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs uppercase tracking-wider">
            DESLIZÁ PARA CONOCER MI TRABAJO
          </span>
          <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#d4d4ce]" />
        </motion.div>
      </div>
    </section>
  );
};


