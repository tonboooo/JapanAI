"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Globe, MessageSquare, Shield, Database } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// サービスの特徴の型定義
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// 導入事例の型定義
type CaseStudy = {
  title: string;
  description: string;
  imagePlaceholder: string;
};

type AgentServiceClientProps = {
  features: Feature[];
  caseStudies: CaseStudy[];
};

// アニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AgentServiceClient({ features, caseStudies }: AgentServiceClientProps) {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-background py-16 md:py-24 relative overflow-hidden">
        {/* 装飾背景 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-kisui-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-washi-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側: テキスト */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                日本文化に精通した<br />
                <span className="text-accent">AIエージェント</span>開発
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                伝統工芸の知識や日本の作法、歴史を理解し、外国人観光客や日本文化愛好家をサポートするAIエージェントを開発します。多言語対応で、日本の魅力を世界に発信します。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button className="group">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" className="group">
                    サービス詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* 右側: イメージ（プレースホルダー） */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-kisui-300 to-kisui-500 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-9xl">
                  🤖
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="features" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AIエージェントサービスの特徴
            </h2>
            <p className="text-lg text-foreground/80">
              日本文化に特化した知識と最新のAI技術を組み合わせ、様々なニーズに対応するAIエージェントを開発します。
              多言語対応や柔軟なカスタマイズで、あらゆる場面で日本文化の魅力を伝えます。
            </p>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              導入事例
            </h2>
            <p className="text-lg text-foreground/80">
              様々な分野で活躍するJapanAIのAIエージェント。
              観光案内、カスタマーサポート、教育など、幅広いシーンで日本文化の魅力を伝えています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                {/* イメージプレースホルダー */}
                <div className={`h-48 ${study.imagePlaceholder}`} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/80 mb-4">{study.description}</p>
                  <Link href="#contact">
                    <Button variant="link" className="p-0 h-auto group">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 開発プロセスセクション */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AIエージェント開発プロセス
            </h2>
            <p className="text-lg text-foreground/80">
              お客様のニーズを丁寧にヒアリングし、最適なAIエージェントを開発します。
              企画から運用まで、一貫したサポートを提供します。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-accent pl-8 ml-4">
              {[
                { step: 'STEP 1', title: 'ヒアリング・要件定義', description: 'お客様のビジネス課題やニーズをヒアリングし、AIエージェントの目的や機能を明確にします。' },
                { step: 'STEP 2', title: '知識ベース構築', description: '日本文化に関する専門知識を収集・整理し、AIエージェントの知識ベースを構築します。必要に応じて専門家の監修を受けます。' },
                { step: 'STEP 3', title: 'プロトタイプ開発', description: '基本機能を実装したプロトタイプを開発し、お客様にデモンストレーションを行います。フィードバックを基に機能の調整を行います。' },
                { step: 'STEP 4', title: '本開発・テスト', description: '本格的な開発を行い、品質保証テストを実施します。多言語対応や各種APIとの連携も実装します。' },
                { step: 'STEP 5', title: 'デプロイ・運用開始', description: 'AIエージェントを本番環境にデプロイし、運用を開始します。初期のユーザーフィードバックを収集し、必要な調整を行います。' },
                { step: 'STEP 6', title: '継続的改善', description: 'ユーザーの利用データを分析し、AIエージェントの精度や機能を継続的に改善します。定期的なメンテナンスとアップデートを提供します。' },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-12 last:mb-0 relative"
                >
                  {/* マーカー */}
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-[2.5rem] top-1" />
                  
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {process.step}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-foreground/80">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* 装飾背景 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-kisui-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-washi-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AIエージェント開発のご相談
              </h2>
              <p className="text-lg text-foreground/80">
                日本文化に特化したAIエージェントの開発について、お気軽にご相談ください。
                お客様のニーズに合わせた最適なソリューションをご提案します。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ROUTES.CONTACT.path}>
                <Button className="w-full sm:w-auto group">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={ROUTES.SERVICES.path}>
                <Button variant="outline" className="w-full sm:w-auto group">
                  他のサービスを見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
