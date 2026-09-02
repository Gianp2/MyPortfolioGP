import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] sm:h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 origin-left z-[9999] pointer-events-none shadow-[0_0_10px_rgba(52,211,153,0.7)]"
      aria-hidden="true"
    />
  );
};
