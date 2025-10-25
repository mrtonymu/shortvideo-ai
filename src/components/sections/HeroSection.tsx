'use client';

import { motion } from 'framer-motion';
import { ModernButton } from '@/components/ui/ModernButton';
import { GradientBackground } from '@/components/ui/GradientBackground';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          {/* 主标题 */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            马哥AI
          </motion.h1>
          
          {/* 副标题 */}
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            专为马来西亚内容创作者打造的AI助手
          </motion.p>
          
          {/* 描述 */}
          <motion.p 
            className="text-lg md:text-xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            解决视频内容中最关键的1件事 —— 抓住观众的眼球 —— 0～5秒的钩子，
            帮你掌控节奏，轻松开场
          </motion.p>
          
          {/* 按钮组 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ModernButton size="lg" variant="primary">
              🚀 立即开始
            </ModernButton>
            <ModernButton size="lg" variant="outline">
              📺 观看演示
            </ModernButton>
          </motion.div>
          
          {/* 特色标签 */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              ✨ AI智能生成
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              🇲🇾 马来西亚本地化
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              🎯 前5秒钩子
            </div>
          </motion.div>
        </div>
        
        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
  );
};
