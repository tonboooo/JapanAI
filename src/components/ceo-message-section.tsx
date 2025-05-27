"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export default function CeoMessageSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border relative overflow-hidden"
            style={{ opacity }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 装飾要素 */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-kisui-500/10 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">代表からのメッセージ</h2>
              <div className="w-20 h-1 bg-gold-400 mx-auto"></div>
            </div>
            
            <div className="mb-8 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gold-300 shadow-lg flex items-center justify-center bg-secondary/50 text-2xl font-bold text-gold-700">
                {/* 画像の代わりにイニシャルを表示 */}
                大
              </div>
              <h3 className="text-xl font-bold">大塚 懸生</h3>
              <p className="text-foreground/80">代表取締役</p>
            </div>
            
            <blockquote className="text-lg italic text-foreground/90 mb-8">
              <p className="mb-4">
                「常識を革新するとは、物事の本質を見極める眼力を磨くこと。遊び心と伝統の調和から生まれる新たな価値を、私たちは真摯に追求します。
              </p>
              <p className="mb-4">
                先祖から受け継いだ智慧への感謝を胸に、未知なる世界への好奇心を原動力に、ありのままの姿で、共に成長し続ける旅をご案内します。」
              </p>
            </blockquote>
            
            <div className="text-center">
              <Link href={ROUTES.PHILOSOPHY.path}>
                <Button variant="gold" className="group">
                  私たちの哲学を探る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
