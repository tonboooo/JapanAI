/**
 * シンプルなボタンエフェクト
 * ユーザー要望により、波紋エフェクトは無効化し、シンプルな状態に戻す
 */

export function initButtonEffects() {
  if (typeof window === 'undefined') return;
  
  // すべてのボタンに適切なスタイルを適用
  const buttons = document.querySelectorAll('button');
  
  // ダークモードかどうかチェック
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  buttons.forEach(button => {
    // 不要なエフェクトクラスを削除
    button.classList.remove('gold-hover-effect');
    button.classList.remove('btn-simple-animation');
    
    // 横に伸びる問題を修正するため、transformスタイルをリセット
    button.style.transform = '';
    
    // ダークモードの場合、エメラルドグリーンのボタンスタイルを適用
    if (isDarkMode) {
      if (button.classList.contains('variant-outline') || 
          button.classList.contains('btn-secondary')) {
        button.classList.add('btn-emerald-outline');
      } else {
        button.classList.add('btn-emerald');
      }
    }
    
    // 既存の波紋要素を削除
    const existingRipples = button.querySelectorAll('.btn-ripple, .gold-line-effect');
    existingRipples.forEach(ripple => ripple.remove());
  });
  
  console.log('✨ ボタンスタイルをシンプルなアニメーションに変更しました');
}

// ページロード時にダークモードの変更を監視
// MutationObserverを使用してダークモード切り替え時にボタンスタイルを更新
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && 
            mutation.target === document.documentElement) {
          // ダークモードの切り替えを検知したらボタンスタイルを更新
          initButtonEffects();
        }
      });
    });
    
    // documentElementのクラス変更を監視
    observer.observe(document.documentElement, { attributes: true });
  });
}
