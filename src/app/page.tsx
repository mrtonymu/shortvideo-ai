import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { PricingSection } from '@/components/sections/PricingSection';
// import { ChatInterface } from '@/components/chat/ChatInterface';
import { BubbleChat } from '@/components/chat/BubbleChat';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center text-white/60">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold mb-4">马哥AI</p>
          <p className="text-sm">
            专为马来西亚内容创作者打造的AI助手
          </p>
          <div className="mt-6 text-xs">
            © 2025 马哥AI. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* 浮动聊天泡泡 */}
      <BubbleChat />
    </div>
  );
}