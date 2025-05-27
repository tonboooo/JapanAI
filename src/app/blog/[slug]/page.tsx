import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Share2 } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// ブログ記事のサンプルデータ
const blogPosts = [
  {
    id: 'traditional-colors',
    title: '日本の伝統色とWebデザイン',
    excerpt: '日本の伝統色を現代のWebデザインに取り入れる方法と、その効果について解説します。',
    content: `
      <p>日本の伝統色は、自然の風景や四季の移ろいから生まれた、深い歴史と文化を持つ色彩体系です。これらの色彩をWebデザインに取り入れることで、日本らしさを表現するだけでなく、ユーザーに独特の感情や印象を与えることができます。</p>
      
      <h2>日本の伝統色の特徴</h2>
      
      <p>日本の伝統色の特徴は、自然界の微妙な色合いを繊細に表現している点にあります。例えば、「藤色（ふじいろ）」は藤の花の淡い紫色、「柳色（やなぎいろ）」は新緑の柳の葉の色を表しています。これらの色は、季節や自然現象と深く結びついており、日本人の美意識や感性を反映しています。</p>
      
      <p>また、日本の伝統色には、「○○色」という名前が付けられており、その名前自体が色のイメージを豊かに伝えます。「朝霧色」「夕暮色」「浅葱色」など、言葉から情景が浮かぶような命名がされています。</p>
      
      <h2>Webデザインへの活用方法</h2>
      
      <p>これらの伝統色をWebデザインに活用する方法はいくつかあります。</p>
      
      <h3>1. カラーパレットの構築</h3>
      
      <p>サイトのブランドカラーや全体のカラースキームに伝統色を取り入れることで、独自性のあるデザインを作ることができます。例えば、「藍色」をベースに、「桜色」や「若草色」をアクセントとして使用することで、日本らしさを感じさせるカラーパレットが完成します。</p>
      
      <h3>2. 季節感の表現</h3>
      
      <p>日本の伝統色は季節との結びつきが強いため、季節に応じてサイトの色調を変えることで、季節感を演出できます。春には「桜色」や「若草色」、夏には「浅葱色」や「水色」、秋には「紅葉色」や「栗皮色」、冬には「雪色」や「鈍色」などを使うことで、季節の移り変わりを表現できます。</p>
      
      <h3>3. 感情や雰囲気の演出</h3>
      
      <p>伝統色には、それぞれ独特の感情や雰囲気が込められています。例えば、「紅色」は情熱や活力、「藍色」は信頼や安定、「萌黄色」は新鮮さや成長などを象徴しています。これらの色が持つ感情的な効果を理解し、伝えたいメッセージに合わせて色を選ぶことが重要です。</p>
      
      <h2>実践的なデザイン例</h2>
      
      <p>実際のWebデザインでは、以下のような形で伝統色を活用することができます。</p>
      
      <ul>
        <li>ヘッダーやフッターに深みのある「藍色」を使用し、安定感と信頼性を表現</li>
        <li>CTAボタンに「朱色」を使用して、アクションを促す</li>
        <li>背景に淡い「白磁色」や「生成り色」を使用して、和紙のような質感を演出</li>
        <li>アクセントカラーとして「若草色」や「桜色」を使用し、季節感や新鮮さを表現</li>
      </ul>
      
      <h2>まとめ</h2>
      
      <p>日本の伝統色をWebデザインに取り入れることで、グローバルなデジタル空間の中に、日本独自の美意識や感性を表現することができます。色彩の持つ文化的背景や感情的な効果を理解し、適切に活用することで、より深みと独自性のあるデザインを創り出すことが可能になります。</p>
      
      <p>次回は、伝統色と現代のカラートレンドを融合させる方法について、さらに詳しく解説していきます。</p>
    `,
    date: '2025-04-15',
    author: '佐藤 美咲',
    category: 'デザイン',
    tags: ['Webデザイン', '日本の伝統', 'カラーデザイン', 'UI/UX'],
    slug: 'traditional-colors',
    imagePlaceholder: 'bg-gradient-to-br from-washi-300 to-kisui-400',
    relatedPosts: ['ai-and-tradition', 'digital-washi', 'japanese-typography'],
  },
  {
    id: 'ai-and-tradition',
    title: 'AIと伝統工芸の融合',
    excerpt: '最新のAI技術が日本の伝統工芸をどのように進化させ、新たな可能性を開くのかを探ります。',
    content: `
      <p>人工知能（AI）の急速な発展は、様々な分野に革命をもたらしていますが、一見すると対極にあるように思える日本の伝統工芸の世界にも、新たな可能性を開きつつあります。本記事では、AIと伝統工芸の融合がどのように行われ、どのような未来を創り出そうとしているのかを探ります。</p>
      
      <h2>伝統工芸が直面する課題</h2>
      
      <p>日本の伝統工芸は、長い歴史の中で培われた技術と美意識によって、世界的に高い評価を受けています。しかし、職人の高齢化や後継者不足、需要の減少など、多くの課題に直面しています。これらの課題を解決し、伝統工芸を未来に継承していくために、AIが新たな役割を果たす可能性が出てきています。</p>
      
      <h2>AIによる技術の保存と継承</h2>
      
      <p>伝統工芸の技術は、長年の修練によって身につけられる「暗黙知」が多く、言葉や文書だけでは伝えきれない部分があります。AIの画像認識や動作分析技術を活用することで、熟練職人の微妙な手の動きや力加減などを詳細に記録し、分析することが可能になりつつあります。</p>
      
      <p>例えば、京都の陶芸家と協力して行われているプロジェクトでは、熟練職人の轆轤（ろくろ）を回す動作をセンサーで捉え、AIが分析することで、「理想的な動き」のパターンを抽出しています。これにより、apprentice（見習い）が効率的に技術を習得するための指導ツールが開発されています。</p>
      
      <h2>AIによるデザインの拡張</h2>
      
      <p>AIの生成モデルは、伝統的なパターンやデザインを学習し、新たなバリエーションを生み出すことができます。これにより、伝統を尊重しながらも、現代のライフスタイルや好みに合わせた新しいデザインの創出が可能になります。</p>
      
      <p>例えば、江戸小紋の伝統的な柄をAIに学習させ、現代的なアレンジを施したデザインを生成するプロジェクトが進行中です。職人とAIがコラボレーションすることで、伝統の本質を保ちながらも、新鮮で現代的な魅力を持つ製品が生まれています。</p>
      
      <h2>市場とのマッチング</h2>
      
      <p>AIは、消費者の好みや市場トレンドの分析にも活用されています。伝統工芸品の製作者は、AIによる市場分析を参考にすることで、どのようなデザインや製品が現代の消費者に受け入れられるかを予測し、効果的な製品開発や販売戦略を立てることができます。</p>
      
      <p>また、ECプラットフォームにおけるレコメンデーションシステムも、伝統工芸品と潜在的な顧客をマッチングする重要な役割を果たしています。AIが個々の顧客の好みを学習し、最適な伝統工芸品を推薦することで、新たな顧客層の開拓が進んでいます。</p>
      
      <h2>課題と展望</h2>
      
      <p>AIと伝統工芸の融合には、技術的な課題だけでなく、文化的・倫理的な側面も考慮する必要があります。伝統工芸の価値は、単に美しい製品を作ることだけでなく、その背後にある文化や歴史、職人の精神性にもあります。AIを活用する際には、これらの無形の価値を尊重し、技術が人間の創造性や技術を補完するものであるという視点を持つことが重要です。</p>
      
      <p>今後、AIと伝統工芸の融合はさらに進み、新たな表現方法や製品、ビジネスモデルが生まれることが期待されます。両者の調和のとれた発展により、日本の伝統工芸が持つ美しさと価値が、次世代に継承され、世界中の人々に届けられることを願っています。</p>
    `,
    date: '2025-04-02',
    author: '田中 健太',
    category: 'テクノロジー',
    tags: ['AI', '伝統工芸', 'デジタル変革', '文化継承'],
    slug: 'ai-and-tradition',
    imagePlaceholder: 'bg-gradient-to-br from-kisui-300 to-washi-500',
    relatedPosts: ['digital-washi', 'virtual-tea-ceremony', 'ai-calligraphy'],
  },
];

// 日付フォーマット
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// 動的メタデータ生成
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'ブログ記事が見つかりません - 株式会社JapanAI',
      description: 'お探しのブログ記事は見つかりませんでした。',
    };
  }
  
  return {
    title: `${post.title} - 株式会社JapanAI`,
    description: post.excerpt,
  };
}

import { NextPage } from 'next';

// 静的ページ生成のためのパラメータを定義
export async function generateStaticParams() {
  // ブログ記事のIDからパラメータを生成
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.id === params.slug);
  
  if (!post) {
    notFound();
    return null; // TypeScriptのエラー回避のため
  }
  
  // 関連記事の取得
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.slug))
    : [];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ヘッダー画像 */}
      <div className="w-full h-64 md:h-96 relative">
        <div className={`absolute inset-0 ${post.imagePlaceholder} flex items-center justify-center`}>
          <span className="text-white/70 text-sm">
            {post.title}のヘッダー画像
          </span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <Link href={ROUTES.BLOG.path} className="inline-flex items-center text-accent hover:text-accent/80 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ブログ一覧に戻る
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
          
          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* タグ */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-3">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* シェアボタン */}
          <div className="mb-12 flex items-center gap-4">
            <span className="font-medium">この記事をシェア:</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* 関連記事 */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">関連記事</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
                  >
                    {/* 画像プレースホルダー */}
                    <div className="relative h-40">
                      <div className={`absolute inset-0 ${relatedPost.imagePlaceholder} flex items-center justify-center`}>
                        <span className="text-white/70 text-sm">
                          {relatedPost.title}の画像
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">
                        <Link href={`${ROUTES.BLOG.path}/${relatedPost.slug}`} className="hover:text-accent transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <Link href={`${ROUTES.BLOG.path}/${relatedPost.slug}`} className="text-sm inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                        続きを読む
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
