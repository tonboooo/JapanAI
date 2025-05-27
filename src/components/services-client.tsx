"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// サービス詳細情報の型定義
type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  path: string;
  color: string;
};

type ServicesClientProps = {
  services: Service[];
};

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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ServicesClient({ services }: ServicesClientProps) {
  return (
    <>
      {/* サービス詳細セクション */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* 左側: テキスト (偶数インデックスの場合) または 右側: テキスト (奇数インデックスの場合) */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-accent">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.path}>
                    <Button className="group">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                
                {/* 右側: イメージ (偶数インデックスの場合) または 左側: イメージ (奇数インデックスの場合) */}
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} shadow-xl`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-9xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              あなたのプロジェクトについて話しましょう
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              伝統とテクノロジーの融合で、あなたのビジョンを実現します。
              お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ROUTES.CONTACT.path}>
                <Button className="w-full sm:w-auto group">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={ROUTES.ABOUT.path}>
                <Button variant="outline" className="w-full sm:w-auto group">
                  会社概要を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
