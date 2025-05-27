"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* テキストコンテンツ */}
          <motion.div 
            className="md:col-span-6 lg:col-span-5"
            style={{ opacity }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              伝統と革新の融合
            </h2>
            <p className="text-lg md:text-xl mb-6 text-foreground/80">
              千年の時を経て磨かれた日本の美意識と最先端技術の出会いが、
              新たな美の地平を拓きます。
              「静寂と軽快」「陰と陽」――相反する二つの調和こそが、日本の精髣です。
            </p>
            <p className="text-lg md:text-xl text-foreground/80 mb-6">
              私たちは古より受け継ぐ「伝統」を単に保存するのではなく、
              最新の技と融合させ、次代へと納める新たな「伝統」を納める器を創ります。
            </p>
            <p className="text-lg md:text-xl text-foreground/80">
              この道のりに、「価値」「余白」「間（ま）」を指標とし、
              日本の美意識を現代に生きる形で表現します。
              これが、日本から世界への静かなる波紋となります。
            </p>
          </motion.div>

          {/* 画像 */}
          <motion.div 
            className="md:col-span-6 lg:col-span-7 relative"
            style={{ y }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {/* 鳥居の写真を背景画像として表示 */}
              <Image 
                src="/images/kinugawa.jpg" 
                alt="鬼怒川の風景"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
