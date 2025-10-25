'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import { ModernButton } from '@/components/ui/ModernButton';
// import { ModernCard } from '@/components/ui/ModernCard';
import { ModernLoader } from '@/components/ui/ModernLoader';
import { useDemoState } from '@/hooks/useDemoState';
import { LoginPrompt } from '@/components/auth/LoginPrompt';
import { ControlledInput } from '@/components/chat/ControlledInput';
import { useAuth } from '@/contexts/AuthContext';
import { analytics } from '@/lib/analytics';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// 预设模板数据
const HOOK_TEMPLATES = {
  "摆摊创业": [
    "Halo大家好！今天我要分享一个秘密...我在KL摆摊3个月赚了RM15,000！",
    "你们知道吗？这个摆摊技巧让我从月入RM500到RM5,000...",
    "Wah！这个摆摊方法你们一定没试过，我靠它买了第一辆车！"
  ],
  "生活记录": [
    "马来西亚人的一天，你们猜猜我几点起床？答案会让你们惊讶...",
    "今天我要带你们看看真正的KL生活，从早到晚都在做什么...",
    "Selamat pagi！今天又是美好的一天，让我带你们体验马来西亚的日常..."
  ],
  "搞笑剧情": [
    "这个情况你们一定没遇到过...我在KL遇到了什么？",
    "Wah！今天发生了一件很搞笑的事，你们猜猜是什么...",
    "你们猜猜我在马来西亚遇到了什么搞笑的事情？"
  ],
  "真实故事": [
    "我要告诉你们一个真实的故事，关于我在马来西亚的经历...",
    "这个故事改变了我对马来西亚的看法，你们一定要听...",
    "今天我要分享一个真实的马来西亚故事，很感人..."
  ]
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  
  // 认证状态
  const { user } = useAuth();
  
  // 演示状态管理
  const { 
    hasGenerated, 
    isBlocked, 
    generationCount, 
    markAsGenerated 
  } = useDemoState();

  const generateHook = async (topic: string): Promise<string> => {
    // 模拟AI生成延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 根据主题选择模板
    const templates = HOOK_TEMPLATES[topic as keyof typeof HOOK_TEMPLATES] || HOOK_TEMPLATES["摆摊创业"];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    return randomTemplate;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // 检查是否被阻止（只有未登录用户才会被阻止）
    if (isBlocked && !user) {
      setShowLoginPrompt(true);
      return;
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // 跟踪AI生成事件
    analytics.trackHookGeneration(input, true);
    
    try {
      const aiResponse = await generateHook(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // 标记为已生成
      markAsGenerated();
      
      // 跟踪演示完成
      if (generationCount >= 0) {
        analytics.trackDemoComplete(generationCount + 1);
      }
    } catch (error) {
      console.error('生成失败:', error);
      analytics.trackHookGeneration(input, false);
      analytics.trackError('hook_generation_failed', 'ChatInterface');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlocked = () => {
    setShowLoginPrompt(true);
  };

  const handleLogin = () => {
    // 跳转到登录页面
    window.location.href = '/login';
    setShowLoginPrompt(false);
  };

  const handleClosePrompt = () => {
    setShowLoginPrompt(false);
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setInput(topic);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
      {/* 聊天头部 */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <h2 className="text-2xl font-bold">AI 助手</h2>
        <p className="text-white/80">为你生成完美的视频钩子</p>
      </div>
      
      {/* 主题选择器 */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">选择内容主题：</h3>
        <div className="flex flex-wrap gap-3">
          {Object.keys(HOOK_TEMPLATES).map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicSelect(topic)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTopic === topic
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
      
      {/* 消息区域 */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p>👋 你好！我是HeroHook AI助手</p>
            <p className="text-sm mt-2">选择主题或输入你的想法，我来帮你生成吸引人的视频钩子</p>
          </div>
        )}
        
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div               className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.type === 'user' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'bg-gray-100 text-gray-800'
              }`}>
              {message.content}
            </div>
          </motion.div>
        ))}
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl">
              <ModernLoader size="sm" text="AI正在生成钩子..." />
            </div>
          </motion.div>
        )}
      </div>
      
      {/* 输入区域 */}
      <div className="p-6 border-t border-gray-200">
        <div className="space-y-4">
          {/* 演示状态提示 */}
          {hasGenerated && !user && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-yellow-800">
                <span className="text-lg">🎯</span>
                <div>
                  <p className="font-semibold">演示完成！</p>
                  <p className="text-sm">已生成 {generationCount} 次，登录解锁无限次生成</p>
                </div>
              </div>
            </div>
          )}
          
          {/* 登录用户提示 */}
          {user && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-800">
                <span className="text-lg">🎉</span>
                <div>
                  <p className="font-semibold">欢迎回来，{user.name}！</p>
                  <p className="text-sm">现在你可以无限次使用AI生成功能</p>
                </div>
              </div>
            </div>
          )}
          
          {/* 受控制的输入 */}
          <ControlledInput
            value={input}
            onChange={setInput}
            onSend={handleSendMessage}
            disabled={isBlocked && !user}
            onBlocked={handleBlocked}
            placeholder="输入你的视频主题..."
          />
        </div>
      </div>
      
      {/* 登录提示弹窗 */}
      {showLoginPrompt && (
        <LoginPrompt
          onLogin={handleLogin}
          onClose={handleClosePrompt}
          generationCount={generationCount}
        />
      )}
    </div>
  );
};
