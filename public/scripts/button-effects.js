/**
 * 高級感のあるボタン波紋エフェクト
 * ボタンクリック・ホバー時に水面に落ちる雫のような波紋効果を追加
 */

// グローバルスコープで関数を公開
window.initButtonEffects = function() {
  // .gold-hover-effectクラスを持つすべてのボタンを選択
  const buttons = document.querySelectorAll('.gold-hover-effect');
  
  buttons.forEach(button => {
    // マウスエンター時の波紋エフェクト
    button.addEventListener('mouseenter', function(e) {
      // マウスの位置を取得
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // 波紋要素を作成
      createRipple(this, x, y);
    });
    
    // クリック時の波紋エフェクト（別の位置から発生）
    button.addEventListener('click', function(e) {
      // クリック位置を取得
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // 波紋要素を作成（クリック時は大きめの波紋）
      createRipple(this, x, y, true);
    });
  });
  
  console.log('✨ ボタンエフェクト初期化完了');
};

/**
 * 波紋要素を作成する関数
 * @param {HTMLElement} parent - 波紋を追加する親要素
 * @param {number} x - 波紋のx座標
 * @param {number} y - 波紋のy座標
 * @param {boolean} isClick - クリックによる波紋かどうか
 */
function createRipple(parent, x, y, isClick = false) {
  // 既存の波紋を削除（多くなりすぎないように）
  const existingRipples = parent.querySelectorAll('.btn-ripple');
  if (existingRipples.length > 5) {
    existingRipples[0].remove();
  }
  
  // 新しい波紋要素を作成
  const ripple = document.createElement('span');
  ripple.className = 'btn-ripple';
  
  // 波紋のスタイルを設定
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.opacity = isClick ? '0.8' : '0.5';
  
  // 波紋の大きさを親要素のサイズに基づいて設定（クリック時は大きめ）
  const size = Math.max(parent.offsetWidth, parent.offsetHeight);
  ripple.style.width = `${size * (isClick ? 2.5 : 2)}px`;
  ripple.style.height = `${size * (isClick ? 2.5 : 2)}px`;
  
  // 親要素に波紋を追加
  parent.appendChild(ripple);
  
  // アニメーション完了後に波紋要素を削除
  setTimeout(() => {
    ripple.remove();
  }, 1000);
}
