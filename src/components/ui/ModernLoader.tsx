'use client';

import { motion } from 'framer-motion';

interface ModernLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const ModernLoader = ({ size = 'md', text = '加载中...' }: ModernLoaderProps) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <motion.div 
          className={`${sizes[size]} bg-purple-500 rounded-full`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className={`${sizes[size]} bg-pink-500 rounded-full`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div 
          className={`${sizes[size]} bg-blue-500 rounded-full`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      {text && (
        <motion.p 
          className="text-gray-600 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};
