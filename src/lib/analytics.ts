import { track } from '@vercel/analytics';

// 自定义事件跟踪
export const analytics = {
  // 用户注册
  trackSignUp: (method: string) => {
    track('user_signup', { method });
  },

  // 用户登录
  trackLogin: (method: string) => {
    track('user_login', { method });
  },

  // AI生成钩子
  trackHookGeneration: (topic: string, success: boolean) => {
    track('hook_generation', { topic, success });
  },

  // 页面访问
  trackPageView: (page: string) => {
    track('page_view', { page });
  },

  // 按钮点击
  trackButtonClick: (button: string, location: string) => {
    track('button_click', { button, location });
  },

  // 定价方案查看
  trackPricingView: (plan: string) => {
    track('pricing_view', { plan });
  },

  // 聊天界面使用
  trackChatUsage: (action: string) => {
    track('chat_usage', { action });
  },

  // 演示完成
  trackDemoComplete: (generationCount: number) => {
    track('demo_complete', { generation_count: generationCount });
  },

  // 错误跟踪
  trackError: (error: string, location: string) => {
    track('error_occurred', { error, location });
  }
};

// 页面访问跟踪Hook
export const usePageTracking = () => {
  const trackPage = (pageName: string) => {
    analytics.trackPageView(pageName);
  };

  return { trackPage };
};
