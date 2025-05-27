"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Search } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// FAQアイテムコンポーネント
function FaqItem({ faq, isOpen, toggleOpen }: { 
  faq: any, 
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

type FaqClientProps = {
  categories: {
    id: string;
    label: string;
  }[];
  faqs: {
    id: string;
    question: string;
    answer: string;
    category: string;
  }[];
};

export default function FaqClient({ categories, faqs }: FaqClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  
  // FAQの開閉を切り替える
  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  
  // カテゴリーと検索クエリでフィルタリング
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* 検索・フィルターセクション */}
      <section className="py-8 bg-secondary border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* 検索フォーム */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-foreground/50" />
              </div>
              <input
                type="text"
                placeholder="質問を検索..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* カテゴリーフィルター */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
                    category.id === activeCategory
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary hover:bg-secondary/80 border border-border'
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ一覧セクション */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">検索結果がありません</h3>
              <p className="text-foreground/70 mb-6">
                検索条件を変更するか、別のキーワードで検索してください。
              </p>
              <Button 
                variant="accent"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                フィルターをリセット
              </Button>
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                {activeCategory === 'all' 
                  ? 'よくある質問一覧' 
                  : categories.find(c => c.id === activeCategory)?.label || 'よくある質問'}
              </h2>
              
              {filteredFaqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  toggleOpen={() => toggleFaq(faq.id)}
                />
              ))}
            </div>
          )}
          
          {/* お問い合わせリンク */}
          <div className="mt-16 text-center">
            <p className="text-lg mb-4">
              お探しの情報が見つからない場合は、お気軽にお問い合わせください。
            </p>
            <Link href={ROUTES.CONTACT.path}>
              <Button className="mt-2 gap-2">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
