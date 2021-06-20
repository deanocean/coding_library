export default function() {
  // **** アンカーリンクなどで使用 ****
  const scrollTop = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    header: '#header', // 固定ヘッダーがある場合、その高さ分も込みで追従してくれる
  });
}