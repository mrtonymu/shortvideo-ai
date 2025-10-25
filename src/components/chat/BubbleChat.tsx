'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { ChatInterface } from './ChatInterface';

export const BubbleChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleBubbleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 浮动聊天按钮 - 亮色焦点设计 */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          delay: 1.5 
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        {/* 外圈光晕效果 */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl"
        />
        
        {/* 主按钮 */}
        <motion.button
          onClick={handleBubbleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-white/20 backdrop-blur-sm"
        >
          {/* 内圈高光 */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
          
          {/* 聊天图标 */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <svg 
              className="w-10 h-10 text-white drop-shadow-lg" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </div>
          
          {/* 脉冲动画点 */}
          <motion.div
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: 0.5
            }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          />
        </motion.button>
      </motion.div>

      {/* 聊天弹窗 - 现代设计 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-32 right-8 z-40 w-96 max-w-[calc(100vw-4rem)]"
          >
            {/* 弹窗主体 */}
            <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl overflow-hidden">
              {/* 聊天头部 */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* AI头像 */}
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">马哥AI助手</h3>
                      <p className="text-xs text-white/80 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        在线为您服务
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 聊天内容 */}
              <div className="h-80 overflow-hidden">
                {user ? (
                  <ChatInterface />
                ) : (
                  <div className="p-8 text-center">
                    <div className="mb-8">
                      {/* 欢迎图标 */}
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        欢迎使用马哥AI
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        专为马来西亚内容创作者打造的AI助手<br/>
                        帮您生成完美的视频钩子
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <button
                        onClick={() => window.location.href = '/login'}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        立即登录
                      </button>
                      <button
                        onClick={() => window.location.href = '/register'}
                        className="w-full bg-white border-2 border-purple-200 text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-purple-50 transition-all duration-200"
                      >
                        创建账户
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
