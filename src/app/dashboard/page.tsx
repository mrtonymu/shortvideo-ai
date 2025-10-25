'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ModernButton } from '@/components/ui/ModernButton';
import { ModernCard } from '@/components/ui/ModernCard';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { ChatInterface } from '@/components/chat/ChatInterface';

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('chat');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <GradientBackground>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>加载中...</p>
          </div>
        </div>
      </GradientBackground>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <GradientBackground>
      <div className="min-h-screen">
        {/* 导航栏 */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  马哥AI
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  欢迎，{user.name}
                </div>
                <ModernButton variant="outline" size="sm" onClick={handleLogout}>
                  退出登录
                </ModernButton>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              <ModernCard className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">功能菜单</h2>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'chat' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    💬 AI聊天
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'profile' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    👤 个人资料
                  </button>
                  <button
                    onClick={() => setActiveTab('subscription')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'subscription' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    💳 订阅管理
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'history' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    📝 生成历史
                  </button>
                </nav>
              </ModernCard>
            </div>

            {/* 主内容区 */}
            <div className="lg:col-span-3">
              {activeTab === 'chat' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">AI聊天助手</h2>
                    <p className="text-white/80">现在你可以无限次使用AI生成功能了！</p>
                  </div>
                  <ChatInterface />
                </motion.div>
              )}

              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ModernCard className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">个人资料</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          readOnly
                          aria-label="用户姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          readOnly
                          aria-label="用户邮箱"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          注册时间
                        </label>
                        <input
                          type="text"
                          value={new Date(user.createdAt).toLocaleDateString('zh-CN')}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          readOnly
                          aria-label="注册时间"
                        />
                      </div>
                    </div>
                  </ModernCard>
                </motion.div>
              )}

              {activeTab === 'subscription' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ModernCard className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">订阅管理</h2>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">当前计划</h3>
                        <p className="text-2xl font-bold text-purple-600 mb-2">
                          {user.subscription?.type === 'free' ? '免费版' : '付费版'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {user.subscription?.type === 'free' 
                            ? '升级到付费版解锁更多功能' 
                            : '享受完整功能'
                          }
                        </p>
                      </div>
                      <ModernButton variant="primary" className="w-full">
                        升级订阅
                      </ModernButton>
                    </div>
                  </ModernCard>
                </motion.div>
              )}

              {activeTab === 'history' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ModernCard className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">生成历史</h2>
                    <div className="text-center text-gray-500 py-8">
                      <p>暂无生成记录</p>
                      <p className="text-sm mt-2">开始使用AI聊天功能来生成你的第一个钩子吧！</p>
                    </div>
                  </ModernCard>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}
