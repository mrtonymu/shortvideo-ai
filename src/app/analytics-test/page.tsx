'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

export default function AnalyticsTestPage() {
  useEffect(() => {
    // 测试Analytics事件
    analytics.trackPageView('analytics-test');
    analytics.trackButtonClick('test-button', 'analytics-test-page');
    
    console.log('Analytics test events sent!');
  }, []);

  const handleTestEvent = () => {
    analytics.trackButtonClick('manual-test', 'analytics-test-page');
    alert('Test event sent! Check Vercel Dashboard in a few minutes.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Analytics 测试页面
        </h1>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            这个页面用于测试Vercel Analytics是否正常工作
          </p>
          
          <button
            onClick={handleTestEvent}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
          >
            发送测试事件
          </button>
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>✅ 页面加载时自动发送事件</p>
            <p>✅ 点击按钮发送手动事件</p>
            <p>📊 数据会在Vercel Dashboard中显示</p>
          </div>
          
          <Link
            href="/"
            className="block text-purple-600 hover:text-purple-800 font-medium"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
