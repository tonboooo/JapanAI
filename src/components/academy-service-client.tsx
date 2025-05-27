"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, BookOpen, Users, Lightbulb, Compass, Palette } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// プログラム情報の型定義
type Program = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  duration: string;
  level: string;
};

type AcademyServiceClientProps = {
  programs: Program[];
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

export default function AcademyServiceClient({ programs }: AcademyServiceClientProps) {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-background py-16 md:py-24 relative overflow-hidden">
        {/* 装飾背景 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-washi-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-kisui-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
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
                伝統と革新が出会う<br />
                <span className="text-accent">アカデミー</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                日本の伝統とテクノロジーを学ぶ場を提供。職人の技とデジタル技術を融合させ、新しい表現方法や商品開発を支援します。ワークショップやセミナーを通じて、伝統文化の新たな可能性を探求しましょう。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#programs">
                  <Button className="group">
                    プログラムを見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="group">
                    お問い合わせ
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
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-washi-300 to-washi-500 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-9xl">
                  🎓
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* アカデミーの特徴セクション */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              JapanAIアカデミーの特徴
            </h2>
            <p className="text-lg text-foreground/80">
              伝統とテクノロジーの融合を実践的に学べる場所。
              第一線で活躍する職人やエンジニアから直接学び、新しい価値を創造するスキルを身につけます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '第一線の講師陣',
                description: '伝統工芸の職人、デジタルクリエイター、エンジニアなど、各分野の第一線で活躍する専門家が講師を務めます。理論だけでなく、実践的な知識とスキルを学べます。',
              },
              {
                title: '少人数制の実践的プログラム',
                description: '一方的な講義ではなく、参加者が主体的に学べる少人数制のワークショップ形式。実際に手を動かし、作品を制作することで、深い理解と実践力を養います。',
              },
              {
                title: '多様な参加者との交流',
                description: '伝統工芸に携わる職人、デザイナー、エンジニア、学生など、様々なバックグラウンドを持つ参加者との交流を通じて、新しい視点や発想を得ることができます。',
              },
              {
                title: '継続的なコミュニティ',
                description: 'プログラム終了後も、参加者同士のネットワークを維持し、情報交換や協働プロジェクトを生み出すコミュニティを提供します。オンラインプラットフォームでの交流も活発です。',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* プログラム一覧セクション */}
      <section id="programs" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              プログラム一覧
            </h2>
            <p className="text-lg text-foreground/80">
              伝統とテクノロジーを様々な角度から学べる多彩なプログラムをご用意しています。
              初心者から専門家まで、それぞれのレベルや目的に合わせて参加いただけます。
            </p>
          </div>
          
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* 左側: プログラム概要 */}
                  <div className="p-8 bg-secondary/50 flex flex-col">
                    <div className="mb-6">{program.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-foreground/80 mb-6">{program.description}</p>
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">期間:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">レベル:</span>
                        <span>{program.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右側: プログラム詳細 */}
                  <div className="p-8 md:col-span-2">
                    <h4 className="text-lg font-medium mb-4">プログラム内容</h4>
                    <ul className="space-y-3">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="#contact">
                        <Button variant="outline" className="group">
                          詳細を問い合わせる
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 参加者の声セクション */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              参加者の声
            </h2>
            <p className="text-lg text-foreground/80">
              JapanAIアカデミーに参加された方々からいただいた感想をご紹介します。
              様々なバックグラウンドを持つ参加者が、それぞれの視点で得た学びや気づきを語っています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "伝統工芸の奥深さとデジタル技術の可能性が融合する瞬間に立ち会えたことは、私のデザイナーとしてのキャリアの転機となりました。職人さんとの対話から生まれるアイデアは、机上では決して得られないものでした。",
                author: "田中 美咲",
                role: "UIデザイナー",
              },
              {
                quote: "40年間続けてきた伝統技術が、若い世代のデジタル感覚と出会うことで新しい命を吹き込まれる体験は、私自身にとっても大きな刺激になりました。テクノロジーは伝統を壊すのではなく、むしろ進化させる力があると実感しています。",
                author: "佐藤 和彦",
                role: "陶芸家",
              },
              {
                quote: "エンジニアとして参加しましたが、日本の伝統美に対する理解が深まり、アルゴリズムやUIデザインに新しい視点を取り入れることができました。特に色彩感覚や余白の使い方など、日本の美意識から学ぶことは多かったです。",
                author: "鈴木 健太",
                role: "ソフトウェアエンジニア",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-foreground/80 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* 装飾背景 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-washi-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-kisui-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                プログラムへの参加をご検討の方へ
              </h2>
              <p className="text-lg text-foreground/80">
                各プログラムの詳細や開催スケジュール、料金などについてお知りになりたい方は、
                お気軽にお問い合わせください。カスタムプログラムのご相談も承っております。
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
