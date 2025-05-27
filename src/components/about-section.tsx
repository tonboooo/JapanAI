import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  // 会社情報
  const companyInfo = [
    { label: '会社名', value: '株式会社JapanAI' },
    { label: '設立', value: '【未定】（2025年8月26日登記予定）' },
    { label: '代表取締役', value: '大塚懸生' },
    { label: '所在地', value: '【未定】（2025年8月26日登記予定）' },
    { label: '事業内容', value: 'Web制作、AIエージェント開発、教育事業' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 lg:px-12"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* 左側: 会社情報 */}
          <motion.div 
            className="md:col-span-5"
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              会社概要
            </h2>
            
            <div className="space-y-4 mb-8">
              {companyInfo.map((info, index) => (
                <div key={index} className="border-b border-border pb-3">
                  <dt className="text-sm font-medium text-foreground/70">{info.label}</dt>
                  <dd className="mt-1 text-base font-medium">{info.value}</dd>
                </div>
              ))}
            </div>
            
            <Link href={ROUTES.ABOUT.path}>
              <Button variant="outline" className="group">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          
          {/* 右側: メッセージ */}
          <motion.div 
            className="md:col-span-7 md:pl-8 lg:pl-16 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                代表メッセージ
              </h3>
              
              <div className="prose prose-lg">
                <p className="mb-4">
                  私たちは先祖への感謝と叡智を胸に、伝統の本質を見極めながら、常識を革新する道を歩んでいます。
                </p>
                <p className="mb-4">
                  日本の美意識と遊び心を融合させることで、これまでにない価値を創造し、人と自然の調和を大切にした商いを通じて社会に貢献します。
                </p>
                <p>
                  未知への好奇心を原動力に進化し続ける私たちは、ありのままの姿で誠実に、関わるすべての方々への感謝を忘れず、真摯に向き合ってまいります。
                </p>
              </div>
              
              <div className="mt-6">
                <p className="text-right font-semibold" data-component-name="AboutSection">代表取締役 大塚懸生</p>
              </div>
            </div>
            
            {/* 装飾要素 */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-washi-200 rounded-full opacity-30 blur-xl" />
            <div className="absolute top-1/4 -left-5 w-20 h-20 bg-kisui-300 rounded-full opacity-20 blur-lg" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
