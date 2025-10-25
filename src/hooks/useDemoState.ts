'use client';

import { useState, useEffect } from 'react';

interface DemoState {
  hasGenerated: boolean;
  isBlocked: boolean;
  isLoggedIn: boolean;
  generationCount: number;
}

export const useDemoState = () => {
  const [demoState, setDemoState] = useState<DemoState>({
    hasGenerated: false,
    isBlocked: false,
    isLoggedIn: false,
    generationCount: 0
  });

  useEffect(() => {
    // 检查本地存储的演示状态
    const savedState = localStorage.getItem('herohook_demo_state');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // 使用setTimeout避免同步setState
        setTimeout(() => {
          setDemoState(parsed);
        }, 0);
      } catch (error) {
        console.error('Failed to parse saved demo state:', error);
        localStorage.removeItem('herohook_demo_state');
      }
    }
  }, []);

  const markAsGenerated = () => {
    const newState = {
      ...demoState,
      hasGenerated: true,
      generationCount: demoState.generationCount + 1,
      isBlocked: demoState.generationCount >= 0 // 生成一次后就阻止
    };
    
    setDemoState(newState);
    localStorage.setItem('herohook_demo_state', JSON.stringify(newState));
  };

  const resetDemo = () => {
    const newState = {
      hasGenerated: false,
      isBlocked: false,
      isLoggedIn: false,
      generationCount: 0
    };
    setDemoState(newState);
    localStorage.removeItem('herohook_demo_state');
  };

  const login = () => {
    const newState = {
      ...demoState,
      isLoggedIn: true,
      isBlocked: false
    };
    setDemoState(newState);
    localStorage.setItem('herohook_demo_state', JSON.stringify(newState));
  };

  return {
    ...demoState,
    markAsGenerated,
    resetDemo,
    login
  };
};
