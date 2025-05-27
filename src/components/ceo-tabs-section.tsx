"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, User, BookOpen, Compass, Building } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// タブの型定義
type TabType = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

// モーダルの型定義
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

// モーダルコンポーネント
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-card rounded-xl shadow-xl border border-gold-200/30 overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 装飾要素 */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-kisui-500/10 rounded-full blur-3xl"></div>
          
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="閉じる"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function CeoTabsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // タブの状態管理
  const [activeTab, setActiveTab] = useState("message");
  
  // モーダルの状態管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({
    title: "",
    content: null
  });

  // タブの定義
  const tabs: TabType[] = [
    { id: "message", label: "代表メッセージ", icon: <User className="h-4 w-4" /> },
    { id: "philosophy", label: "経営理念", icon: <BookOpen className="h-4 w-4" /> },
    { id: "vision", label: "ビジョン", icon: <Compass className="h-4 w-4" /> },
    { id: "company", label: "会社概要", icon: <Building className="h-4 w-4" /> },
  ];

  // モーダルを開く関数
  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  // 会社情報
  const companyInfo = [
    { label: '会社名', value: '株式会社JapanAI' },
    { label: '設立', value: '【未定】（2025年8月26日登記予定）' },
    { label: '代表取締役', value: '大塚懸生' },
    { label: '所在地', value: '【未定】（2025年8月26日登記予定）' },
    { label: '事業内容', value: 'Web制作、AIエージェント開発、教育事業' },
  ];

  // タブコンテンツの定義
  const tabContents = {
    message: (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold-300 shadow-lg flex items-center justify-center bg-secondary/50 text-2xl font-bold text-gold-700">
            {/* 画像の代わりにイニシャルを表示（実際の画像があれば差し替え） */}
            大
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-center md:text-left">大塚 懸生</h3>
            <p className="text-foreground/80 mb-4 text-center md:text-left">代表取締役</p>
            <blockquote className="text-lg italic text-foreground/90 border-l-4 border-gold-300 pl-4">
              <p className="mb-4">
                「当たり前とされることに疑問を投げかけ続ける姿勢。それは単なる好奇心ではなく、より良い未来を創造するための根源的な力です。
              </p>
              <p>
                私たちの平和な日常は、先人たちの祈りと努力の上に成り立っています。この日々こそが、かけがえのない「ギフト」なのです。」
              </p>
            </blockquote>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 group"
            onClick={() => {
              const content = (
                <>
                  <p className="mb-4">
                    JapanAIは、日本の伝統文化とテクノロジーの融合を通じて、新しい価値を創造することを目指しています。
                  </p>
                  <p className="mb-4">
                    私たちは、何世紀にもわたって受け継がれてきた日本の美意識や職人技を大切にしながら、最新のテクノロジーを活用して、それらを現代に蘇らせ、世界中の人々に届けたいと考えています。
                  </p>
                  <p className="mb-4">
                    「常識を再定義する」というミッションのもと、伝統とイノベーションが調和した新しい体験を創り出し、日本文化の新たな魅力を発見していただければ幸いです。
                  </p>
                  <p className="mb-4">
                    当たり前とされることに疑問を投げかけ続ける姿勢。それは単なる好奇心ではなく、より良い未来を創造するための根源的な力です。
                  </p>
                  <p className="mb-4">
                    私たちの平和な日常は、先人たちの祈りと努力の上に成り立っています。この日々こそが、かけがえのない「ギフト」なのです。
                  </p>
                  <p className="text-right mt-8 font-semibold">
                    代表取締役 大塚懸生
                  </p>
                </>
              );
              openModal("代表メッセージ全文", content);
            }}
          >
            メッセージ全文を読む
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    ),
    
    philosophy: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4 text-gold-600">「伝統と革新の大いなる調和」</h3>
        
        <div className="space-y-4">
          <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
            <h4 className="font-bold mb-2">美の継承</h4>
            <p>千年の歴史を持つ日本の美意識を大切に守り、次世代へと継承します。</p>
          </div>
          
          <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
            <h4 className="font-bold mb-2">技術との融合</h4>
            <p>最先端技術と伝統文化の融合により、新たな価値を創造します。</p>
          </div>
          
          <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
            <h4 className="font-bold mb-2">心の豊かさ</h4>
            <p>物質的な豊かさだけでなく、精神的な充足を大切にします。</p>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 group"
            onClick={() => {
              const content = (
                <>
                  <h3 className="text-xl font-bold mb-4 text-gold-600">「伝統と革新の大いなる調和」</h3>
                  <p className="mb-4">
                    私たちは、千年の歴史を持つ日本の美意識と、最先端の技術が組み合わされたとき、
                    新たな文明の彩りが生まれると信じています。
                    「光と影」「静と動」「心と技」――相反するものの調和が、日本文化の真髄です。
                  </p>
                  <p className="mb-4">
                    JapanAIは、古来から受け継がれてきた「伝統」を単に保存するのではなく、
                    最先端技術と融合させることで、次世代に引き継がれる「伝統」を創っていくという大いなる志を持っています。
                  </p>
                  <p className="mb-4">
                    この使命を達成するために、私たちは日本特有の「わび」「さび」「間」の哲学を指針とし、
                    その浅からぬ美意識をデジタル時代に再解釈します。
                    これが、日本から世界への新しい文化発信の第一歩となるでしょう。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
                      <h4 className="font-bold mb-2">美の継承</h4>
                      <p>千年の歴史を持つ日本の美意識を大切に守り、次世代へと継承します。</p>
                    </div>
                    
                    <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
                      <h4 className="font-bold mb-2">技術との融合</h4>
                      <p>最先端技術と伝統文化の融合により、新たな価値を創造します。</p>
                    </div>
                    
                    <div className="bg-gold-50/50 p-4 rounded-lg border-l-4 border-gold-300">
                      <h4 className="font-bold mb-2">心の豪かさ</h4>
                      <p>物質的な豪かさだけでなく、精神的な充足を大切にします。</p>
                    </div>
                  </div>
                </>
              );
              openModal("経営理念", content);
            }}
          >
            経営理念の詳細を見る
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    ),
    
    vision: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4">2030年に向けたビジョン</h3>
        
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gold-50 to-gold-100 p-6 mb-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h4 className="text-lg font-bold mb-2 text-gold-800">「日本文化の世界的再評価」</h4>
          <p className="relative z-10">
            2030年までに、日本の伝統文化とテクノロジーの融合によって生まれた新しい価値観を世界中に広め、
            日本文化の再評価と継承に貢献します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-2 text-sm">1</span>
              グローバル展開
            </h4>
            <p>日本の美意識を世界中に届け、国際的なプレゼンスを確立します。</p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-2 text-sm">2</span>
              技術革新
            </h4>
            <p>AIと伝統工芸の融合による新たな表現方法を開発します。</p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-2 text-sm">3</span>
              人材育成
            </h4>
            <p>伝統と技術の両方を理解する次世代のクリエイターを育成します。</p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-2 text-sm">4</span>
              持続可能性
            </h4>
            <p>環境に配慮した持続可能なビジネスモデルを構築します。</p>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="text-gold-600 hover:text-gold-700 hover:bg-gold-50 group"
            onClick={() => {
              const content = (
                <>
                  <h3 className="text-xl font-bold mb-6 text-gold-600">2030年に向けたビジョン</h3>
                  
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gold-50 to-gold-100 p-6 mb-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <h4 className="text-lg font-bold mb-2 text-gold-800">「日本文化の世界的再評価」</h4>
                    <p className="relative z-10 mb-0">
                      2030年までに、日本の伝統文化とテクノロジーの融合によって生まれた新しい価値観を世界中に広め、
                      日本文化の再評価と継承に貢献します。
                    </p>
                  </div>
                  
                  <p className="mb-6">
                    私たちは、日本の伝統文化が持つ「美意識」「調和」「精緻さ」といった価値観を、
                    最先端技術を通じて新たな形で表現し、世界中の人々に届けることを目指しています。
                    それは単なる文化の輸出ではなく、日本文化の本質を理解し、現代的に再解釈する試みです。
                  </p>
                  
                  <h4 className="text-lg font-bold mb-4">4つの柱</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h5 className="font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-3">1</span>
                        グローバル展開
                      </h5>
                      <p className="mb-2">日本の美意識を世界中に届け、国際的なプレゼンスを確立します。</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>10か国以上での拠点設立</li>
                        <li>多言語対応プラットフォームの構築</li>
                        <li>国際的な文化交流イベントの開催</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h5 className="font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-3">2</span>
                        技術革新
                      </h5>
                      <p className="mb-2">AIと伝統工芸の融合による新たな表現方法を開発します。</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>AI活用による伝統技術のデジタル保存</li>
                        <li>バーチャル職人育成システムの開発</li>
                        <li>伝統×テクノロジーの研究開発施設設立</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h5 className="font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-3">3</span>
                        人材育成
                      </h5>
                      <p className="mb-2">伝統と技術の両方を理解する次世代のクリエイターを育成します。</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>伝統工芸×プログラミングの教育プログラム</li>
                        <li>若手職人とエンジニアの交流プラットフォーム</li>
                        <li>奨学金制度の設立</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h5 className="font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center mr-3">4</span>
                        持続可能性
                      </h5>
                      <p className="mb-2">環境に配慮した持続可能なビジネスモデルを構築します。</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>伝統的な自然素材の活用促進</li>
                        <li>地域経済の活性化支援</li>
                        <li>カーボンニュートラルな事業運営</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-center text-lg font-bold text-gold-600 mt-8">
                    「伝統を守るとは、灰を守ることではなく、火を絶やさないことである」
                  </p>
                </>
              );
              openModal("2030年ビジョン詳細", content);
            }}
          >
            ビジョンの詳細を見る
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    ),
    
    company: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">会社概要</h3>
            <div className="space-y-4">
              {companyInfo.map((info, index) => (
                <div key={index} className="border-b border-border pb-3">
                  <dt className="text-sm font-medium text-foreground/70">{info.label}</dt>
                  <dd className="mt-1 text-base font-medium">{info.value}</dd>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">沿革</h3>
            <div className="relative border-l-2 border-gold-200 pl-6 space-y-6">
              <div className="relative">
                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gold-400"></div>
                <h4 className="font-bold">2025年8月（予定）</h4>
                <p>株式会社JapanAI設立</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gold-300"></div>
                <h4 className="font-bold">2025年9月（予定）</h4>
                <p>公式サービス開始</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gold-200"></div>
                <h4 className="font-bold">2025年12月（予定）</h4>
                <p>初の展示会開催</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Link href={ROUTES.ABOUT.path}>
            <Button variant="outline" className="group">
              会社情報の詳細を見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    ),
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 lg:px-12"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              JapanAIについて
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              伝統と革新が調和する世界へ。私たちの理念とビジョンをご紹介します。
            </p>
          </div>
          
          <motion.div 
            className="bg-card rounded-xl shadow-lg border border-border relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 装飾要素 */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-kisui-500/10 rounded-full blur-3xl"></div>
            
            {/* タブナビゲーション */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all",
                    activeTab === tab.id
                      ? "text-gold-600 border-b-2 border-gold-400"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* タブコンテンツ */}
            <div className="p-6 md:p-8">
              {/* @ts-ignore */}
              {tabContents[activeTab]}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* モーダル */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.content}
      </Modal>
    </section>
  );
}
