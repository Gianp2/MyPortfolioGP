import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Bloquear scroll durante el preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Duración total antes de la transición automática
    const autoExitTimer = setTimeout(() => {
      onComplete();
    }, 3100);

    return () => {
      clearTimeout(autoExitTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -24,
        transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070707] text-white p-6 select-none overflow-hidden"
    >
      {/* Resplandor sutil de fondo */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Contenedor central */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
        {/* Firma caligráfica en cursiva "GP" */}
        <div className="relative w-[280px] min-[400px]:w-[340px] sm:w-[420px] md:w-[460px] aspect-[460/230] flex items-center justify-center">
          <svg
            viewBox="0 0 460 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
          >
            {/* Trazo 1: 'G' mayúscula cursiva auténtica (cresta superior, vientre curvo y travesaño nítido) */}
            <motion.path
              d="M 130 62 C 145 48, 156 42, 146 36 C 104 28, 54 56, 38 104 C 22 150, 44 184, 92 188 C 132 190, 156 164, 158 120 L 116 120 L 178 120"
              stroke="#ffffff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.95, ease: [0.45, 0, 0.55, 1] },
                opacity: { duration: 0.15 }
              }}
            />

            {/* Trazo 2: Ligadura conectora y fuste inclinado descendente de la 'P' */}
            <motion.path
              d="M 178 120 C 195 95, 212 62, 222 42 L 200 186"
              stroke="#ffffff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.55, ease: [0.45, 0, 0.55, 1], delay: 0.85 },
                opacity: { duration: 0.15, delay: 0.85 }
              }}
            />

            {/* Trazo 3: Lóbulo / cabeza superior cursiva de la 'P' */}
            <motion.path
              d="M 202 136 C 208 92, 218 52, 246 42 C 276 30, 308 46, 305 84 C 302 120, 262 132, 200 126"
              stroke="#ffffff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.65, ease: [0.45, 0, 0.55, 1], delay: 1.35 },
                opacity: { duration: 0.15, delay: 1.35 }
              }}
            />

            {/* Trazo 4: Rúbrica y subrayado fluido de firma */}
            <motion.path
              d="M 48 202 C 120 216, 220 214, 310 188 C 345 178, 360 184, 335 198 C 280 226, 150 224, 65 204"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.65 }}
              transition={{
                pathLength: { duration: 0.7, ease: 'easeOut', delay: 1.9 },
                opacity: { duration: 0.2, delay: 1.9 }
              }}
            />
          </svg>
        </div>

        {/* Revelación del nombre y especialidad */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.5, ease: 'easeOut' }}
          className="mt-3 sm:mt-5 space-y-2"
        >
          <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-white">
            Gianluca Pasquinelli
          </h1>
          <p className="font-mono text-[10px] min-[380px]:text-[11px] sm:text-xs text-[#a1a19a] tracking-[0.22em] sm:tracking-[0.26em] uppercase">
            Desarrollo de Software <span className="text-white/40 font-semibold">•</span> Análisis Funcional
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};