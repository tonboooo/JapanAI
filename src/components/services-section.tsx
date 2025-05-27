import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// サービス情報の定義
const services = [
  {
    id: 'web',
    title: 'Web制作',
    description: '伝統と革新の境界を超えた、本質を捕えるデザインを追求します。和紙の質感と遊び心を融合させ、人と自然の調和を感じさせる、唐突なウェブ体験を創造します。',
    icon: '🎨',
    path: ROUTES.SERVICES.children?.WEB.path || '/services/web',
  },
  {
    id: 'agent',
    title: 'AIエージェント',
    description: '先祖から受け継いだ智慧をAIに学ばせ、未知なる可能性への好奇心を原動力に進化し続けるエージェントを開発。ありのままの姿で、真摯に人と向き合う技術を実現します。',
    icon: '🤖',
    path: ROUTES.SERVICES.children?.AGENT.path || '/services/agent',
  },
  {
    id: 'academy',
    title: 'アカデミー',
    description: '常識を革新する学びの場を提供します。バイブコーディングを通じて、本質を見極める眼力を育み、感謝の心を持ちながら、新たな価値を共に創造する喜びを共有します。',
    icon: '🎓',
    path: ROUTES.SERVICES.children?.ACADEMY.path || '/services/academy',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      } 
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 section-bg-unified" data-component-name="ServicesSection">
      <motion.div 
        className="container mx-auto px-6 lg:px-12"
        style={{ opacity }}
      >
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            サービス
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            常識を革新する私たちのサービスは、本質を見極め、調和を創造し、感謝の心で真摯に向き合います。
          </motion.p>
        </div>

        {/* サービスカード */}
        <div className="glow-gold">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Link href={service.path}>
                  <Button variant="outline" className="group hover:border-gold-400 hover:text-gold-600">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* サービス一覧へのリンク */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href={ROUTES.SERVICES.path}>
            <Button variant="gold" size="lg" className="shadow-md hover:shadow-lg">
              私たちのすべてのサービス
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
