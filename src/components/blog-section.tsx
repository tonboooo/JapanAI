import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// ブログ記事の型定義
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imagePath?: string;
};

// 空の配列（将来的にここにブログ記事が追加される）
const blogPosts: BlogPost[] = [];

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パララックス効果
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
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
            ブログ
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            日本の伝統とテクノロジーに関する最新の洞察や事例をご紹介します。
          </motion.p>
        </div>

        {/* ブログ記事カード */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogPosts.length > 0 ? (
            // ブログ記事がある場合は表示
            blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                {/* 画像 */}
                <div className="relative h-48">
                  {post.imagePath ? (
                    <Image 
                      src={post.imagePath}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-washi-200 to-kisui-300 flex items-center justify-center">
                      <span className="text-white/70 text-sm">画像準備中</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {post.category}
                    </span>
                    <time className="text-sm text-foreground/60" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    <Link href={`${ROUTES.BLOG.path}/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`${ROUTES.BLOG.path}/${post.slug}`} className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                    続きを読む
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            // ブログ記事がない場合は「準備中」メッセージ
            <motion.div 
              variants={itemVariants}
              className="col-span-1 md:col-span-3 p-12 text-center bg-card rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold mb-4">ブログ記事は準備中です</h3>
              <p className="text-foreground/70 mb-6">近日中に、日本の伝統とテクノロジーに関する記事を公開予定です。</p>
              <div className="w-16 h-1 bg-gold-400 mx-auto"></div>
            </motion.div>
          )}
        </motion.div>

        {/* ブログ一覧へのリンク - 記事がある場合のみ表示 */}
        {blogPosts.length > 0 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={ROUTES.BLOG.path}>
              <Button variant="outline" className="group">
                全ての記事を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
