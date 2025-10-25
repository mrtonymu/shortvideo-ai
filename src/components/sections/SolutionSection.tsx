'use client';

import { motion } from 'framer-motion';
import { ModernCard } from '@/components/ui/ModernCard';

const solutions = [
  {
    icon: "🎯",
    title: "观众喜好",
    description: "专注马来西亚观众喜好",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🌍",
    title: "本地语言",
    description: "本地语言风格优化（中 + 马 + 英混搭）",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "⚡",
    title: "实时生成",
    description: "实时生成钩子脚本，不会再卡在开场",
    color: "from-green-500 to-teal-500"
  }
];

const contentTypes = [
  "摆摊创业",
  "生活记录", 
  "搞笑剧情",
  "真实故事"
];

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            马哥AI 怎么帮你
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            不管你是拍什么类型的内容，只要你告诉我们「你今天想拍什么主题」，
            这个 AI 就会自动生成最适合马来西亚口味的钩子句子 + 开场剧本
          </p>
        </motion.div>
        
        {/* 内容类型标签 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contentTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium"
            >
              {type}
            </div>
          ))}
        </motion.div>
        
        {/* 解决方案卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ModernCard className="p-8 text-center h-full">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-3xl`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
        
        {/* 行动号召 */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-white/90 mb-8">
            帮你从第一秒就破流量，带你突破僵尸号困局！
          </p>
        </motion.div>
      </div>
    </section>
  );
};
