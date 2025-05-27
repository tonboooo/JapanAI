import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// FAQデータ
const faqs = [
  {
    id: 'services',
    question: 'どのようなサービスを提供していますか？',
    answer: '当社では、日本の伝統とテクノロジーを融合させた3つの主要サービスを提供しています。「Web制作」では伝統美を取り入れたWebサイト制作、「AIエージェント」では日本文化に精通したAIの開発、「アカデミー」では伝統工芸とデジタル技術の融合を学ぶ場を提供しています。',
  },
  {
    id: 'pricing',
    question: '料金体系はどのようになっていますか？',
    answer: '各サービスの料金はプロジェクトの規模や要件によって異なります。Web制作は50万円〜、AIエージェント開発は100万円〜、アカデミーのワークショップは1回5万円〜となっています。詳細はお問い合わせください。',
  },
  {
    id: 'process',
    question: 'プロジェクトの進行プロセスを教えてください',
    answer: '初回のヒアリングからスタートし、コンセプト設計、プロトタイプ作成、開発・制作、テスト、納品という流れで進めます。各段階でお客様との綿密なコミュニケーションを取りながら進行します。',
  },
  {
    id: 'support',
    question: '納品後のサポート体制はありますか？',
    answer: 'はい、納品後も安心してご利用いただけるよう、6ヶ月間の無償サポート期間を設けています。また、有償のメンテナンスプランもご用意しておりますので、長期的なサポートも可能です。',
  },
  {
    id: 'contact',
    question: '相談や見積もりはどのように依頼できますか？',
    answer: 'お問い合わせページのフォーム、またはinfo@japanai.example.comまでメールにてご連絡ください。48時間以内に担当者からご連絡いたします。初回相談は無料で承っております。',
  },
];

// FAQアイテムコンポーネント
function FaqItem({ faq, isOpen, toggleOpen }: { 
  faq: typeof faqs[0], 
  isOpen: boolean, 
  toggleOpen: () => void 
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-foreground/70 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-foreground/80">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // FAQの開閉を切り替える
  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 section-bg-unified" data-component-name="FaqSection">
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
            よくある質問
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            お客様からよくいただくご質問とその回答をまとめました。
          </motion.p>
        </div>

        {/* FAQ一覧 */}
        <motion.div 
          className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq) => (
            <FaqItem 
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              toggleOpen={() => toggleFaq(faq.id)}
            />
          ))}
        </motion.div>

        {/* FAQ一覧へのリンク */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={ROUTES.FAQ.path}>
            <Button variant="outline" className="group">
              すべての質問を見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
