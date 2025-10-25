'use client';

import { motion } from 'framer-motion';
import { ModernButton } from '@/components/ui/ModernButton';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              马哥AI
            </h1>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-500 transition-colors">
              首页
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-500 transition-colors">
              功能
            </a>
            <a href="#demo" className="text-gray-700 hover:text-purple-500 transition-colors">
              演示
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-500 transition-colors">
              定价
            </a>
          </div>
          
          {/* 用户状态按钮 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">欢迎，{user.name}</span>
                <ModernButton variant="outline" size="sm" onClick={handleLogout}>
                  退出登录
                </ModernButton>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <ModernButton variant="outline" size="sm" onClick={() => window.location.href = '/login'}>
                  登录
                </ModernButton>
                <ModernButton variant="primary" size="sm" onClick={() => window.location.href = '/register'}>
                  注册
                </ModernButton>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
