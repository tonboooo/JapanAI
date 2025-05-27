import type { Metadata } from 'next';
import BlogClient from '@/components/blog-client';
import { blogPosts, categories } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'ブログ - 株式会社JapanAI',
  description: '日本の伝統とテクノロジーに関する最新の洞察や事例をご紹介します。株式会社JapanAIのブログでは、伝統工芝のデジタル化やAIの活用事例などを発信しています。',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ヘッダーセクション */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ブログ
            </h1>
            <p className="text-xl text-foreground/80">
              日本の伝統とテクノロジーに関する最新の洞察や事例をご紹介します。
              伝統工芝のデジタル化やAIの活用事例など、様々なテーマで発信しています。
            </p>
          </div>
        </div>
      </section>

      {/* クライアントコンポーネントで検索とフィルタリングを実装 */}
      <BlogClient blogPosts={blogPosts} categories={categories} />
    </div>
  );
}
