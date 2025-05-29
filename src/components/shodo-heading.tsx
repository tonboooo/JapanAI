'use client';

import { motion } from 'framer-motion';

interface ShodoHeadingProps {
  text: string;
  size?: 'large' | 'medium';
  className?: string;
}

/**
 * 本物の書道のような太字で迫力のある見出しコンポーネント
 */
export default function ShodoHeading({ text, size = 'large', className = '' }: ShodoHeadingProps) {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  // 各文字の特性を定義
  const charProperties = [
    { // 和
      rotate: -2.5, 
      scale: 1.08, 
      filter: 'contrast(1.5) brightness(0.88)',
      textShadow: '0 0 1px rgba(0,0,0,0.9)',
      strokeWidth: '1.5px',
      strokeColor: 'rgba(0,0,0,0.95)',
      offsetX: '0.02em',
      offsetY: '-0.01em',
      blur: '0.8px'
    },
    { // の
      rotate: 1.2, 
      scale: 0.96, 
      filter: 'contrast(1.4) brightness(0.9)',
      textShadow: '0 0 1px rgba(0,0,0,0.8)',
      strokeWidth: '1.2px',
      strokeColor: 'rgba(0,0,0,0.9)',
      offsetX: '-0.01em',
      offsetY: '0.02em',
      blur: '0.6px'
    },
    { // 革
      rotate: -1.8, 
      scale: 1.04, 
      filter: 'contrast(1.6) brightness(0.85)',
      textShadow: '0 0 1px rgba(0,0,0,0.95)',
      strokeWidth: '1.4px',
      strokeColor: 'rgba(0,0,0,0.98)',
      offsetX: '0.01em',
      offsetY: '-0.02em',
      blur: '0.9px'
    },
    { // 新
      rotate: 2.2, 
      scale: 1.05, 
      filter: 'contrast(1.45) brightness(0.87)',
      textShadow: '0 0 1px rgba(0,0,0,0.9)',
      strokeWidth: '1.3px',
      strokeColor: 'rgba(0,0,0,0.93)',
      offsetX: '-0.02em',
      offsetY: '0.01em',
      blur: '0.7px'
    }
  ];
  
  // 文字を一文字ずつ分割
  const characters = text.split('');
  
  // アニメーションの基本設定
  const baseVariant = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.75,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 7,  // より強いバネ効果
        stiffness: 65,
        mass: 1.8,   // より重い動きで力強さを表現
        velocity: 2.5  // 初速度を与えて動きにインパクトを出す
      }
    }
  };
  
  // 各文字のバリアントを生成
  const characterVariants = characters.map((_, index) => ({
    hidden: { 
      ...baseVariant.hidden,
      rotateZ: charProperties[index].rotate - 8,
      scale: baseVariant.hidden.scale * charProperties[index].scale,
      x: parseFloat(charProperties[index].offsetX) * 30,
      y: parseFloat(charProperties[index].offsetY) * 30
    },
    visible: { 
      ...baseVariant.visible,
      rotateZ: charProperties[index].rotate,
      scale: baseVariant.visible.scale * charProperties[index].scale,
      x: parseFloat(charProperties[index].offsetX) * 10,
      y: parseFloat(charProperties[index].offsetY) * 10,
      transition: {
        ...baseVariant.visible.transition,
        delay: index * 0.15  // 各文字に少し遅れをつける
      }
    }
  }));
  
  // 横長比現のためのスタイル設定
  const containerStyle = {
    width: '100%',
    maxWidth: size === 'large' ? '750px' : '500px',  // 横長比率に合わせて調整
    height: 'auto',
    aspectRatio: '3/1',  // 3:1の比率を維持
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    position: 'relative' as const,
    margin: '0 auto',
    padding: '0.5em 1em',
    overflow: 'visible'
  };
  
  return (
    <motion.div 
      className={`shodo-title ${size === 'large' ? 'shodo-title-large' : 'shodo-title-medium'} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={containerStyle}
    >
      {characters.map((char, index) => {
        // 各文字の特別なスタイル設定
        const charStyle = {
          display: 'inline-block',
          position: 'relative' as const,
          fontFamily: '"Shippori Mincho", serif',
          fontWeight: 900,
          fontSize: size === 'large' ? '8.5rem' : '5.5rem',
          lineHeight: '1',
          color: '#000',
          filter: charProperties[index].filter,
          textShadow: charProperties[index].textShadow,
          WebkitTextStroke: `${charProperties[index].strokeWidth} ${charProperties[index].strokeColor}`,
          margin: '0 0.03em',
          transform: `rotate(${charProperties[index].rotate}deg)`,
          transformOrigin: 'center bottom'
        } as const;
        
        return (
          <motion.span
            key={`${char}-${index}`}
            className={`shodo-brush-effect shodo-char-${index + 1}`}
            variants={characterVariants[index]}
            custom={index}
            style={charStyle}
            whileHover={{ 
              scale: charProperties[index].scale * 1.05, 
              rotate: charProperties[index].rotate * 1.2,
              transition: { duration: 0.3 }
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
