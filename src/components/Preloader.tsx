
import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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
        transition: {
          duration: 0.7,
          ease: [0.65, 0, 0.35, 1],
        },
      }}
      className="
        fixed inset-0 z-[99999]
        flex flex-col items-center justify-center
        bg-[#070707] text-white
        p-6 select-none overflow-hidden
      "
    >
      {/* Glow sutil */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="
            w-[340px] sm:w-[520px]
            h-[340px] sm:h-[520px]
            rounded-full
            bg-white/[0.018]
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">

        {/* =====================================================
            FIRMA
        ====================================================== */}
        <div
          className="
            relative
            w-[300px]
            min-[400px]:w-[350px]
            sm:w-[430px]
            md:w-[480px]
            aspect-[480/230]
            mx-auto
            flex items-center justify-center
          "
        >
          <svg
            viewBox="0 0 480 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute inset-0
              w-full h-full
              overflow-visible
              drop-shadow-[0_0_7px_rgba(255,255,255,0.15)]
            "
            preserveAspectRatio="xMidYMid meet"
          >
            {/* =================================================
                GRUPO DE LETRAS
                El grupo está centrado alrededor de X=240.
            ================================================== */}
            <g transform="translate(0 0)">

              {/* =========================
                  G
              ========================== */}
              <motion.path
                d="
                  M 202 68

                  C 194 49 179 39 162 39
                  C 139 39 118 52 104 74
                  C 90 96 87 123 95 145
                  C 103 168 121 181 143 182
                  C 166 183 185 171 194 152

                  C 202 136 204 119 196 110
                  C 187 101 171 105 156 115

                  C 171 119 188 116 210 108
                "
                stroke="white"
                strokeWidth="2.15"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  pathLength: {
                    duration: 1.05,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
              />

              {/* =========================
                  LIGADURA G → P
              ========================== */}
              <motion.path
                d="
                  M 185 116

                  C 202 108 216 92 228 72
                  C 238 56 246 39 258 29
                "
                stroke="white"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  pathLength: {
                    duration: 0.52,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 0.82,
                  },
                  opacity: {
                    duration: 0.18,
                    delay: 0.82,
                  },
                }}
              />

              {/* =========================
                  P - FUSTE
              ========================== */}
              <motion.path
                d="
                  M 259 30

                  C 253 57 247 87 241 117
                  C 237 142 232 168 227 196
                "
                stroke="white"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  pathLength: {
                    duration: 0.68,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 1.05,
                  },
                  opacity: {
                    duration: 0.18,
                    delay: 1.05,
                  },
                }}
              />

              {/* =========================
                  P - BUCLE
              ========================== */}
              <motion.path
                d="
                  M 241 122

                  C 247 94 255 63 271 46

                  C 283 33 298 28 311 32

                  C 326 36 334 48 333 63

                  C 332 81 321 97 304 107

                  C 286 117 264 120 241 115
                "
                stroke="white"
                strokeWidth="2.05"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  pathLength: {
                    duration: 0.75,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 1.48,
                  },
                  opacity: {
                    duration: 0.18,
                    delay: 1.48,
                  },
                }}
              />

              {/* =========================
                  TRAZO INTERIOR
              ========================== */}
              <motion.path
                d="
                  M 241 123
                  C 254 128 268 128 282 125
                "
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.55,
                }}
                transition={{
                  pathLength: {
                    duration: 0.32,
                    ease: 'easeOut',
                    delay: 1.92,
                  },
                  opacity: {
                    duration: 0.18,
                    delay: 1.92,
                  },
                }}
              />

              {/* =================================================
                  RÚBRICA
                  Sale desde abajo pero NO afecta el centrado
                  visual de las letras.
              ================================================== */}

              <motion.path
                d="
                  M 104 190

                  C 138 200 175 204 214 204
                  C 254 204 292 198 327 188

                  C 351 181 367 174 376 174

                  C 385 174 388 179 382 184

                  C 375 190 362 194 350 197
                "
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.55,
                }}
                transition={{
                  pathLength: {
                    duration: 0.78,
                    ease: 'easeOut',
                    delay: 1.9,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 1.9,
                  },
                }}
              />

              {/* =========================
                  BARRIDO INFERIOR
              ========================== */}
              <motion.path
                d="
                  M 119 198

                  C 158 211 203 216 247 211

                  C 291 206 329 196 358 184

                  C 374 177 385 171 390 174

                  C 395 177 388 182 380 187
                "
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.36,
                }}
                transition={{
                  pathLength: {
                    duration: 0.52,
                    ease: 'easeOut',
                    delay: 2.08,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 2.08,
                  },
                }}
              />

              {/* =========================
                  REMATE
              ========================== */}
              <motion.path
                d="
                  M 350 197
                  C 367 192 383 183 394 173
                "
                stroke="white"
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.27,
                }}
                transition={{
                  pathLength: {
                    duration: 0.28,
                    ease: 'easeOut',
                    delay: 2.25,
                  },
                  opacity: {
                    duration: 0.15,
                    delay: 2.25,
                  },
                }}
              />
            </g>
          </svg>
        </div>

        {/* =====================================================
            NOMBRE
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 1.5,
            ease: 'easeOut',
          }}
          className="
            mt-2
            sm:mt-4
            space-y-2
            flex flex-col
            items-center
            justify-center
            text-center
          "
        >
          <h1
            className="
              text-xl
              min-[380px]:text-2xl
              sm:text-3xl
              md:text-4xl
              font-display
              font-extrabold
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.32em]
              text-white
              text-center
            "
          >
            Gianluca Pasquinelli
          </h1>

          <p
            className="
              font-mono
              text-[10px]
              min-[380px]:text-[11px]
              sm:text-xs
              text-[#a1a19a]
              tracking-[0.22em]
              sm:tracking-[0.26em]
              uppercase
              text-center
            "
          >
            Desarrollo de Software{' '}
            <span className="text-white/40 font-semibold">
              •
            </span>{' '}
            Análisis Funcional
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
