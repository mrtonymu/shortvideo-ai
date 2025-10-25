'use client';

import { motion } from 'framer-motion';
import { ModernCard } from '@/components/ui/ModernCard';

const problems = [
  {
    icon: "📊",
    title: "浏览总是卡三位数",
    description: "发了几十条内容，却还是没人看？问题也许不在内容，而在开头",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: "🎬",
    title: "拍得好，却留不住人",
    description: "视频拍得再好，开场没人看就全白费，抓不到人，就留不住流量",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "⏰",
    title: "第一秒最关键，你却没头绪",
    description: "观众只给你1秒钟，不是你不行，而是你还没找到对的开头方式",
    color: "from-yellow-500 to-orange-500"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            你是不是经历过这些
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            这些痛点是不是很熟悉？马哥AI 就是为解决这些问题而生的
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ModernCard className="p-8 text-center h-full">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${problem.color} flex items-center justify-center text-2xl`}>
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </ModernCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
