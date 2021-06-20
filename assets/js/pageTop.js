import { throttle } from 'lodash';

const pageTopBtn = document.querySelector('.js-pageTopBtn');

export function pageTop() {
  window.addEventListener(
    'scroll',
    _.throttle(
      e => {
        scrollBtnView();
        return false;
      },
      100,
      { trailing: true, leading: true }
    )
  );

  // ページ読み込み時にスクロールトップボタンがkvより下にあれば表示
  window.addEventListener('load', () => {
    const scroll = window.pageYOffset;
    if (scroll > 200) {
      pageTopBtn.classList.add('is-view');
    } else {
      pageTopBtn.classList.remove('is-view');
    }
  });
}

// 間引きしたい処理
function scrollBtnView() {
  const scroll = window.pageYOffset;

  // スクロール量がkvの高さを超えたらページトップボタンを表示
  if (scroll > 200) {
    pageTopBtn.classList.add('is-view');
  } else {
    pageTopBtn.classList.remove('is-view');
  }
}
