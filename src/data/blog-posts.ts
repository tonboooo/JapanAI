// ブログ記事の型定義
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imagePlaceholder: string;
  author: string;
  tags: string[];
  readTime?: number; // 読了時間（分）
};

// ブログ記事のデータ
export const blogPosts: BlogPost[] = [];

// カテゴリー一覧（重複を排除して取得）
export const categories = ['すべて', ...Array.from(new Set(blogPosts.map(post => post.category)))].sort();

// タグ一覧（重複を排除して取得）
export const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

// 著者一覧（重複を排除して取得）
export const authors = Array.from(new Set(blogPosts.map(post => post.author))).sort();
