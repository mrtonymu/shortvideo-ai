'use client';

import { motion } from 'framer-motion';
import { ModernButton } from '@/components/ui/ModernButton';
import { ModernCard } from '@/components/ui/ModernCard';

const pricingPlans = [
  {
    id: 'monthly',
    name: '月订每月',
    period: '1个月',
    price: 'RM99',
    originalPrice: 'RM180',
    discount: '45%',
    features: [
      '📝 视频开场脚本，直接用来拍',
      '🌍 本地语言混搭优化',
      '⏱ 快速生成，节省时间',
      '从卡顿 → 流畅输出',
      '1000次/月生成'
    ],
    popular: false
  },
  {
    id: 'yearly',
    name: '普通版 12个月',
    period: '12个月',
    price: 'RM299',
    originalPrice: 'RM599',
    discount: '50%',
    features: [
      '📝 视频开场脚本，直接用来拍',
      '🌍 本地语言混搭优化',
      '⏱ 快速生成，节省时间',
      '从卡顿 → 流畅输出',
      '12000次/年生成',
      '优先技术支持'
    ],
    popular: true
  },
  {
    id: 'lifetime',
    name: '专业版买断',
    period: '买断版',
    price: 'RM599',
    originalPrice: 'RM999',
    discount: '40%',
    features: [
      '📝 视频开场脚本，直接用来拍',
      '🌍 本地语言混搭优化，中+马+英自然流畅',
      '⏱ 快速生成，节省时间，从卡顿 → 流畅输出',
      '更多变现方法',
      '推荐生意人使用',
      '无限次生成',
      '终身技术支持'
    ],
    popular: false
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            选择适合你的方案
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            无论你是个人创作者还是企业用户，我们都有适合的方案
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <ModernCard className={`p-8 h-full ${plan.popular ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">{plan.period}</div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      节省 {plan.discount}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ModernButton 
                    variant={plan.popular ? "primary" : "outline"} 
                    className="w-full"
                  >
                    选择方案
                  </ModernButton>
                </div>
              </ModernCard>
            </motion.div>
          ))}
        </div>
        
        {/* ROI计算器 */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ModernCard className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">投资回报计算</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5分钟</div>
                <div className="text-gray-600">每次生成时间</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">RM50</div>
                <div className="text-gray-600">每小时节省价值</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-600">视频观看量提升</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <p className="text-gray-700">
                <strong>月节省价值：</strong> 如果你每月制作20个视频，使用HeroHook AI可以节省10小时，
                按RM50/小时计算，月节省价值RM500，远超订阅费用！
              </p>
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </section>
  );
};
