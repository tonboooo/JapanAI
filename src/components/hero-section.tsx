"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { t } from '@/lib/i18n';
import * as THREE from 'three';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // パララックス効果のための変換値
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Three.jsの初期化
  useEffect(() => {
    // ブラウザ環境でのみ実行
    if (typeof window !== 'undefined') {
      try {
        // キャンバス要素の取得
        const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
        if (!canvas) return;
        
        // シーン、カメラ、レンダラーの設定
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
          canvas, 
          alpha: true,
          antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // 和紙のような質感を持つ球体の作成
        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({
          color: '#B5AA8A', // 和紙色
          roughness: 0.8,
          metalness: 0.2,
          wireframe: false,
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        
        // 環境光の追加
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        // 指向性ライトの追加
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        
        // カメラ位置の設定
        camera.position.z = 10;
        
        // マウス位置の追跡
        const mouse = { x: 0, y: 0 };
        
        document.addEventListener('mousemove', (event) => {
          mouse.x = (event.clientX / window.innerWidth) - 0.5;
          mouse.y = (event.clientY / window.innerHeight) - 0.5;
        });
        
        // ウィンドウリサイズハンドラー
        window.addEventListener('resize', () => {
          // キャンバスサイズの更新
          renderer.setSize(window.innerWidth, window.innerHeight);
          
          // カメラのアスペクト比の更新
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        });
        
        // アニメーションループ
        const animate = () => {
          requestAnimationFrame(animate);
          
          // 球体の回転
          sphere.rotation.x += 0.005;
          sphere.rotation.y += 0.005;
          
          // マウス位置に基づく球体の動き
          sphere.position.x += (mouse.x * 2 - sphere.position.x) * 0.05;
          sphere.position.y += (mouse.y * 2 - sphere.position.y) * 0.05;
          
          renderer.render(scene, camera);
        };
        
        animate();
        
        // クリーンアップ関数
        return () => {
          window.removeEventListener('resize', () => {});
          renderer.dispose();
        };
      } catch (error) {
        console.error('Three.jsの初期化に失敗しました:', error);
        const heroSectionElement = document.querySelector('.hero-section');
        if (heroSectionElement) {
          heroSectionElement.classList.add('fallback-bg');
        }
      }
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Three.jsキャンバス */}
      <canvas
        id="hero-canvas"
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* コンテンツオーバーレイ */}
      <motion.div
        className="container relative z-10 mx-auto px-6 lg:px-12 text-center md:text-left"
        style={{ y, opacity }}
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href={ROUTES.SERVICES.path}>
              <Button variant="gold" size="lg" className="group shadow-lg hover:shadow-xl">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-foreground rounded-full mt-2"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
