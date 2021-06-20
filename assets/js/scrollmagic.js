// import ScrollMagic from 'scrollmagic';

// スクロールした際に、js-scrollAnimationが画面に入ったタイミングを設定して、付与したいclassを設定するやつ
// triggerHook: 'onEnter' -> 画面下に表示された時に設定したclass付与（1でもOK）
// triggerHook: 'onCenter' -> 画面中央に表示された時に設定したclass付与（0.5でもOK）
// triggerHook: 'onLeave' -> 画面上に表示された時に設定したclass付与（0でもOK）
// offset -> triggerHookの位置からどれだけズラした位置にしたいか offset: 100だと100px手前が判定基準になります
// reverse: false -> trueにすると、上からscrollしてきた際に毎回classの付与が実行される
export function scrollmagic() {
  let controller = new ScrollMagic.Controller();

  let fadeIn = document.querySelectorAll('.js-scrollAnimation'); // classを付与するかを判定するための変数およびclass名

  for (let i = 0; i < fadeIn.length; i++) {
    let tag = fadeIn[i];

    new ScrollMagic.Scene({
      triggerElement: tag, // for文で画面内に入った際に判定するためのtriggerをtagという変数に代入してます
      triggerHook: 'onCenter',
      offset: 0,
      reverse: false
    })
      .setClassToggle(tag, 'is-animated') // 付与したいclas
      .addTo(controller);
  }
}
