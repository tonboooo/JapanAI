import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

export default function ContactCtaSection() {
  return (
    <section className="py-20 md:py-32 section-bg-unified" data-component-name="ContactCtaSection">
      {/* 装飾背景 */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-kisui-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-washi-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* セクションヘッダー */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              お問い合わせ
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              常識を革新する新たな一歩を、私たちと共に踏み出しませんか。真摯な対話から生まれる価値をご一緒に。
            </motion.p>
          </div>
          
          {/* コンタクト情報とCTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* 左側: コンタクト情報 */}
            <motion.div
              className="bg-card rounded-lg p-8 shadow-lg border border-border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6">お問い合わせ方法</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">メール</p>
                    <p className="text-foreground/70">【未定】</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">電話</p>
                    <p className="text-foreground/70">【未定】</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">所在地</p>
                    <p className="text-foreground/70">
                      【未定】<br />
                      （2025年8月26日登記予定）
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 右側: CTA */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                本質を見極め、共に創造しませんか
              </h3>
              <p className="text-foreground/80 mb-8">
                私たちはありのままの姿で、感謝の心を持ってお迎えします。遊び心と伝統の融合から生まれる調和を創造し、常識を超えた新たな可能性を共に探求しましょう。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href={ROUTES.CONTACT.path}>
                  <Button variant="accent" size="lg" className="group">
                    お問い合わせフォーム
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href="tel:0312345678">
                  <Button variant="outline" size="lg">
                    電話する
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
