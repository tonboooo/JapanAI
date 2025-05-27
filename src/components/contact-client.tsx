"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ContactClient() {
  return (
    <>
      {/* ヘッダーセクション */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-foreground/80">
              プロジェクトのご相談やサービスに関するお問い合わせは、お気軽にご連絡ください。
              専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせフォームと情報セクション */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* 装飾背景 */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-kisui-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-washi-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左側: お問い合わせフォーム */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg shadow-lg p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
              
              <form className="space-y-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="山田 太郎"
                  />
                </div>
                
                {/* 会社名 */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="株式会社〇〇"
                  />
                </div>
                
                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="example@email.com"
                  />
                </div>
                
                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                {/* お問い合わせ内容 */}
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">選択してください</option>
                    <option value="web">Web制作について</option>
                    <option value="ai">AIエージェントについて</option>
                    <option value="academy">アカデミーについて</option>
                    <option value="partnership">協業・提携について</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                
                {/* メッセージ */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>
                
                {/* プライバシーポリシー */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium">
                      <a href="/privacy" className="text-accent hover:text-accent/80 underline">プライバシーポリシー</a>に同意します
                    </label>
                  </div>
                </div>
                
                {/* 送信ボタン */}
                <div>
                  <Button type="submit" variant="accent" className="w-full group">
                    送信する
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
            
            {/* 右側: お問い合わせ情報 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-bold mb-8">お問い合わせ方法</h2>
              
              <div className="space-y-8">
                {/* メール */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">メール</h3>
                    <p className="text-foreground/80">【未定】</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      （2025年8月26日登記予定）
                    </p>
                  </div>
                </div>
                
                {/* 電話 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">電話</h3>
                    <p className="text-foreground/80">【未定】</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      （2025年8月26日登記予定）
                    </p>
                  </div>
                </div>
                
                {/* 住所 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold mb-1">所在地</h3>
                    <p className="text-foreground/80">
                      【未定】
                    </p>
                    <p className="text-sm text-foreground/60 mt-1">
                      （2025年8月26日登記予定）
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 地図プレースホルダー */}
              <div className="mt-8 bg-background rounded-lg overflow-hidden h-64 flex items-center justify-center border border-border">
                <div className="text-center p-4">
                  <p className="text-foreground/60">地図がここに表示されます</p>
                  <p className="text-sm mt-2">※実際のサイトでは Google Maps などを埋め込み</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              よくある質問
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "対応エリアはどこですか？",
                  answer: "基本的に日本全国対応しております。オンラインでの打ち合わせも可能ですので、お気軽にご相談ください。海外のお客様についても、英語対応が可能なスタッフがおりますので、ご相談いただけます。",
                },
                {
                  question: "見積もりは無料ですか？",
                  answer: "はい、お見積りは無料で行っております。プロジェクトの規模や要件をお伺いした上で、詳細なお見積りをご提示いたします。まずはお気軽にお問い合わせください。",
                },
                {
                  question: "納期はどのくらいかかりますか？",
                  answer: "プロジェクトの規模や複雑さによって異なります。小規模なWebサイトであれば2〜4週間程度、大規模なプロジェクトや特殊な要件がある場合は、それ以上の期間をいただくことがあります。具体的な納期については、ご相談の際にお伝えいたします。",
                },
                {
                  question: "アフターサポートはありますか？",
                  answer: "はい、納品後も安心してご利用いただけるよう、アフターサポートをご用意しております。保守プランの詳細については、お問い合わせの際にご説明いたします。",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-foreground/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
