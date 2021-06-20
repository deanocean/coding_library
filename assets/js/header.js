// メニューの切り替え
export default function(){
  let menuTrigger = document.querySelectorAll('.js-menuTrigger');
  let menu = document.querySelector('.js-menu');
  menuTrigger = [].slice.call(menuTrigger);
  menuTrigger.forEach((item) => {
    item.addEventListener('click', (e) => {
      menu.classList.toggle('is-active');
    });
  })
}