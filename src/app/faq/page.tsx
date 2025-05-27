import { Metadata } from 'next';
import FaqClient from '@/components/faq-client';

export const metadata: Metadata = {
  title: 'よくある質問（FAQ） - 株式会社JapanAI（仮称）',
  description: '株式会社JapanAI（仮称）に関するよくある質問とその回答をまとめました。会社概要、サービス内容、料金・サービス提供、お問い合わせ、パートナーシップに関するご質問にお答えします。',
};

// FAQカテゴリー
const categories = [
  { id: 'all', label: 'すべて' },
  { id: 'company', label: '会社について' },
  { id: 'services', label: 'サービス内容' },
  { id: 'pricing', label: '料金・サービス提供について' },
  { id: 'contact', label: 'お問い合わせ' },
  { id: 'partnership', label: 'パートナーシップ' },
];

// FAQデータ
const faqs = [
  // 会社について
  {
    id: 'company-1',
    question: 'JapanAI（仮称）とはどのような会社ですか？',
    answer: 'JapanAI（仮称）は「遊び心 × 日本の伝統」をコンセプトに、最新のAI技術と日本の伝統文化を融合させたサービスを提供する会社です。バイブコーディングアカデミー、Web制作、AIエージェント構築などのサービスを通じて、新しい価値創造を目指しています。なお、会社名は現在仮称であり、正式名称は今後決定されます。',
    category: 'company',
  },
  {
    id: 'company-2',
    question: '設立はいつですか？',
    answer: '2025年8月26日に設立予定です。',
    category: 'company',
  },
  {
    id: 'company-3',
    question: '会社の理念や特徴を教えてください。',
    answer: '当社は、最先端のAI技術と日本の伝統的な美意識や価値観を組み合わせた独自のアプローチで、革新的なデジタルソリューションを提供します。遊び心を大切にしながらも、日本の文化に根差した質の高いサービスの提供を心がけています。',
    category: 'company',
  },
  {
    id: 'company-4',
    question: '事務所はどこにありますか？',
    answer: '現在、事務所の場所は未定です。決定次第、公式サイトやSNSでお知らせいたします。',
    category: 'company',
  },
  
  // サービス内容
  {
    id: 'services-1',
    question: 'どのようなサービスを提供していますか？',
    answer: '現在、以下のサービスを構想中です：\n\nバイブコーディングアカデミー：プログラミングとAIの教育プログラム\nWeb制作：日本の伝統美を活かした独自のデザインアプローチによるウェブサイト制作\nAIエージェント構築：企業や個人向けのカスタマイズされたAIソリューション\n\nこれらに加えて、その他のサービスも検討・構想段階にあります。市場のニーズや最新技術の動向を見ながら、サービス内容を柔軟に拡充していく予定です。',
    category: 'services',
  },
  {
    id: 'services-2',
    question: 'バイブコーディングアカデミーとは何ですか？',
    answer: 'バイブコーディングアカデミーは、非エンジニアでもAIを活用したプログラミング手法を学べる教育プログラムです。バイブコーディングをメインに、日本の伝統的な「守破離」の考え方を取り入れた独自のカリキュラムで、技術的なハードルなくしても創造的なソリューションを構築できる力を育む環境を提供しています。',
    category: 'services',
  },
  {
    id: 'services-3',
    question: 'Web制作ではどのような特徴がありますか？',
    answer: '日本の伝統的な美意識や「間（ま）」の概念を取り入れたデザインを特徴としています。単なる見た目の美しさだけでなく、使いやすさと日本らしさを兼ね備えたウェブサイトを制作します。',
    category: 'services',
  },
  {
    id: 'services-4',
    question: 'AIエージェント構築サービスの内容を詳しく教えてください。',
    answer: 'お客様のビジネスニーズや課題に合わせて、カスタマイズされたAIソリューションを開発します。例えば、接客支援AIや業務効率化ツール、データ分析システムなど、日本的なおもてなしの心を持ったAIエージェントを構築します。',
    category: 'services',
  },
  
  // 料金・サービス提供について
  {
    id: 'pricing-1',
    question: 'サービスの料金はいくらですか？',
    answer: '現在は料金体系を策定中です。各サービスの時期や内容に応じて、お客様のニーズやプロジェクト規模に合わせた柔軟な対応をいたします。詳細についてはウェブサイトのお問い合わせフォームからお尋ねください。',
    category: 'pricing',
  },
  {
    id: 'pricing-2',
    question: 'サービスの提供エリアはどこですか？',
    answer: 'オンラインでのサービス提供が主となりますので、日本全国どこからでもご利用いただけます。一部のサービスでは、対面でのミーティングやワークショップも予定しています。',
    category: 'pricing',
  },
  {
    id: 'pricing-3',
    question: 'サービス開始はいつからですか？',
    answer: '会社設立の2025年8月26日以降、順次サービスを開始する予定です。各サービスの具体的な開始時期については、公式サイトやSNSで随時お知らせいたします。',
    category: 'pricing',
  },
  
  // お問い合わせ
  {
    id: 'contact-1',
    question: '問い合わせはどのようにすればよいですか？',
    answer: '現在は公式サイトのお問い合わせフォームからのご連絡をお願いしております。会社メールアドレスは現在準備中です。電話番号など他の連絡先については決定次第お知らせいたします。',
    category: 'contact',
  },
  {
    id: 'contact-2',
    question: '見積もりや相談は無料ですか？',
    answer: 'はい、初回の相談や見積もりは無料で承っております。お気軽にお問い合わせフォームよりご連絡ください。',
    category: 'contact',
  },
  {
    id: 'contact-3',
    question: 'サービス内容について詳しく知りたい場合はどうすればよいですか？',
    answer: 'お問い合わせフォームより具体的なご質問をお寄せいただくか、定期的に開催予定のオンライン説明会にご参加ください。説明会の日程は公式サイトやSNSでお知らせいたします。',
    category: 'contact',
  },
  
  // パートナーシップ
  {
    id: 'partnership-1',
    question: 'パートナーシップや協業は可能ですか？',
    answer: 'はい、特に日本の伝統文化や技術を持つ企業・個人の方とのコラボレーションを積極的に検討しております。具体的なご提案やアイデアがございましたら、お問い合わせフォームよりご連絡ください。',
    category: 'partnership',
  },
];



export default function FaqPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ヘッダーセクション */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              よくある質問
            </h1>
            <p className="text-xl text-foreground/80">
              サービスや会社に関するよくある質問とその回答をまとめました。
              お探しの情報が見つからない場合は、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* クライアントコンポーネントでFAQ機能を実装 */}
      <FaqClient categories={categories} faqs={faqs} />
    </div>
  );
}
