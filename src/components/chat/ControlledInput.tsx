'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ControlledInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  onBlocked: () => void;
  placeholder?: string;
}

export const ControlledInput = ({ 
  value, 
  onChange, 
  onSend, 
  disabled, 
  onBlocked,
  placeholder = "输入你的视频主题..."
}: ControlledInputProps) => {
  const [showBlockedMessage, setShowBlockedMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      e.preventDefault();
      setShowBlockedMessage(true);
      setTimeout(() => setShowBlockedMessage(false), 2000);
      onBlocked();
      return;
    }
    onChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      onSend();
    } else if (e.key === 'Enter' && disabled) {
      e.preventDefault();
      onBlocked();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        placeholder={disabled ? "登录后继续使用..." : placeholder}
        className={`
          w-full px-4 py-3 rounded-xl border transition-all duration-300
          ${disabled 
            ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed' 
            : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          }
        `}
      />
      
      {/* 阻止消息 */}
      {showBlockedMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -top-12 left-0 right-0 bg-red-500 text-white text-sm px-3 py-2 rounded-lg text-center"
        >
          🔒 登录后解锁完整功能
        </motion.div>
      )}
      
      {/* 发送按钮 */}
      <button
        onClick={disabled ? onBlocked : onSend}
        disabled={disabled || !value.trim()}
        className={`
          absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-medium transition-all
          ${disabled 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
          }
        `}
      >
        {disabled ? '🔒' : '✨'}
      </button>
    </div>
  );
};
