'use client';

import { motion } from 'framer-motion';
import { ModernButton } from '@/components/ui/ModernButton';

interface LoginPromptProps {
  onLogin: () => void;
  onClose: () => void;
  generationCount: number;
}

export const LoginPrompt = ({ onLogin, onClose, generationCount }: LoginPromptProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        {/* 成功图标 */}
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-3xl">🎉</span>
        </div>
        
        {/* 标题 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          演示完成！
        </h2>
        
        {/* 描述 */}
        <div className="text-gray-600 mb-6 space-y-2">
          <p>你已经体验了AI生成功能</p>
          <p className="text-sm">
            已生成 <span className="font-semibold text-purple-600">{generationCount}</span> 次钩子
          </p>
          <p className="text-sm text-gray-500">
            登录解锁完整版，无限次生成！
          </p>
        </div>
        
        {/* 功能对比 */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-3">完整版功能：</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ 无限次AI生成</li>
            <li>✅ 个性化设置</li>
            <li>✅ 生成历史记录</li>
            <li>✅ 高级语言混搭</li>
            <li>✅ 导出功能</li>
          </ul>
        </div>
        
        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <ModernButton 
            variant="primary" 
            className="flex-1"
            onClick={onLogin}
          >
            🚀 立即登录解锁
          </ModernButton>
          <ModernButton 
            variant="outline" 
            className="flex-1"
            onClick={onClose}
          >
            稍后再说
          </ModernButton>
        </div>
        
        {/* 用户统计 */}
        <div className="mt-6 text-xs text-gray-500">
          <p>已有 <span className="font-semibold text-purple-600">1,234</span> 位创作者加入</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
