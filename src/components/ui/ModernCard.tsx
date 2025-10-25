'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const ModernCard = ({ children, className = "", hover = true }: ModernCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        bg-white/95 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl
        transition-all duration-300 border border-white/20 overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
