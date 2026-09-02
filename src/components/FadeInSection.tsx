import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeInSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  amount?: number | 'some' | 'all';
  className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  amount = 0.2,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
