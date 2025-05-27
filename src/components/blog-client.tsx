"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Clock, Tag, Filter } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

// ブログ記事の型定義
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imagePlaceholder: string;
  author: string;
  tags: string[];
  readTime?: number;
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

// 日付フォーマット
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

type BlogClientProps = {
  blogPosts: BlogPost[];
  categories: string[];
  tags?: string[];
  authors?: string[];
};

export default function BlogClient({ blogPosts, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showTagsFilter, setShowTagsFilter] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  // ブログ記事からタグを抽出し、重複を排除して取得
  const availableTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  // 検索とフィルタリングのロジック
  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'すべて' || post.category === selectedCategory;
      
      const matchesTag = 
        selectedTag === null || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, selectedTag, blogPosts]);

  return (
    <>
      {/* 検索・フィルターセクション */}
      <section className="py-8 bg-secondary border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* 検索フォーム */}
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="記事を検索..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* タグフィルターボタン */}
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-md border border-border bg-background hover:bg-secondary/80 transition-colors"
                  onClick={() => setShowTagsFilter(!showTagsFilter)}
                >
                  <Tag className="h-4 w-4" />
                  <span>タグフィルター</span>
                  <Filter className="h-4 w-4 ml-1" />
                </button>
                
                {selectedTag && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/70">選択中:</span>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      {selectedTag}
                      <button 
                        className="ml-1 hover:text-foreground/70"
                        onClick={() => setSelectedTag(null)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* カテゴリーフィルター */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary hover:bg-secondary/80 border border-border'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* タグフィルター */}
            {showTagsFilter && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-background/50 p-4 rounded-md border border-border"
              >
                <h3 className="text-sm font-medium mb-3">タグで絞り込む</h3>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        tag === selectedTag
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary hover:bg-secondary/80 border border-border'
                      }`}
                      onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ブログ記事一覧セクション */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">検索結果がありません</h3>
              <p className="text-foreground/70">
                検索条件を変更するか、別のキーワードで検索してください。
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-md"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('すべて');
                }}
              >
                フィルターをリセット
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                  {/* 画像プレースホルダー */}
                  <div className="relative h-48">
                    <div className={`absolute inset-0 ${post.imagePlaceholder} flex items-center justify-center`}>
                      <span className="text-white/70 text-sm">
                        {post.title}の画像
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {post.readTime && (
                          <span className="flex items-center text-xs text-foreground/60">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}分
                          </span>
                        )}
                        <time className="text-sm text-foreground/60" dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 hover:text-accent transition-colors">
                      <Link href={`${ROUTES.BLOG.path}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-foreground/80 mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-0.5 bg-secondary/50 text-foreground/70 rounded-full"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedTag(tag);
                            setShowTagsFilter(true);
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs px-2 py-0.5 bg-secondary/50 text-foreground/70 rounded-full">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      href={`${ROUTES.BLOG.path}/${post.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      続きを読む
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
          
          {/* ページネーション（将来的な拡張用） */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="px-4 py-2 rounded-l-md border border-border bg-card hover:bg-secondary transition-colors">
                  前へ
                </button>
                <button className="px-4 py-2 border-t border-b border-border bg-accent text-accent-foreground">
                  1
                </button>
                <button className="px-4 py-2 border border-border bg-card hover:bg-secondary transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-r-md border border-border bg-card hover:bg-secondary transition-colors">
                  次へ
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
