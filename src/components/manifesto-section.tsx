"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface ManifestoSectionProps {
  className?: string;
}

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

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
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      } 
    },
  };

  const manifesto = [
    {
      id: 'honshitsu',
      title: '本質追求',
      description: '物事の根本を見極め、真に価値あることに集中する',
    },
    {
      id: 'chowa',
      title: '調和創造',
      description: '平和な心で人と自然との調和を大切にし、商いを通じて社会に貢献する',
    },
    {
      id: 'shinka',
      title: '進化成長',
      description: '未知への好奇心を原動力に、常に学び続け、変化を恐れず進歩する',
    },
    {
      id: 'kansha',
      title: '感謝尊重',
      description: '先祖から受け継いだもの、関わる全ての人への感謝を忘れず、真摯に向き合う',
    },
    {
      id: 'shizentai',
      title: '自然体',
      description: 'ありのままの姿で、飾らず誠実に生きる',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 section-bg-unified" data-component-name="ManifestoSection">
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* ヘッダー部分 */}
        <div className="text-center mb-16">

          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            私たちの価値観
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            遊び心と伝統の融合から生まれる私たちの価値観。常識を革新しながら、先祖から受け継いだ叡智を現代に活かします。
          </motion.p>
        </div>

        {/* マニフェストリスト - アマン東京風のミニマルデザイン */}
        <motion.div 
          className="grid grid-cols-1 gap-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ opacity }}
        >
          {manifesto.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif font-light tracking-wider mb-4">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
