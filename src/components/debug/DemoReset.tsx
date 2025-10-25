'use client';

import { ModernButton } from '@/components/ui/ModernButton';
import { useDemoState } from '@/hooks/useDemoState';

export const DemoReset = () => {
  const { resetDemo, generationCount, hasGenerated } = useDemoState();

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border">
      <div className="text-xs text-gray-600 mb-2">
        <p>演示状态: {hasGenerated ? '已生成' : '未生成'}</p>
        <p>生成次数: {generationCount}</p>
      </div>
      <ModernButton 
        variant="outline" 
        size="sm"
        onClick={resetDemo}
        className="text-xs"
      >
        🔄 重置演示
      </ModernButton>
    </div>
  );
};
