export default function(){

// タブリストの切り替え
let tabTrigger = document.querySelectorAll('.js-tabTrigger'); // トリガーのタブ
tabTrigger = [].slice.call(tabTrigger);

// init
let dataContent = document.querySelectorAll('.js-tabList_data[data-type]');
dataContent.forEach((item)=>{
  if(!item.classList.contains('is-active')){
    item.style.position = 'absolute';
  }
})

tabTrigger.forEach((item) => {
  item.addEventListener('click', () => {
    // タブを切り替え
      let tabs = item.parentNode.children; // タブを全部取得
      tabs = [].slice.call(tabs);
      tabs.forEach((item)=>{
        item.classList.remove('is-active'); // タブを一旦全部無効にしておく
      })
      item.classList.add('is-active'); // 押されたタブだけ有効にする

      // 内容を切り替え
      let type = item.dataset.type; // タブのdata-typeを取得
      let content = item.parentNode.nextElementSibling.querySelectorAll('[data-type]'); // 内容を取得
      content = [].slice.call(content);
      let old = content.find((item)=>{ return item.classList.contains('is-active'); }) // 現在有効の内容
      let current = content.find((item)=>{ return type === item.dataset.type }); // これから有効の内容
      if(old === current) { // 同じ要素であれば、何もしない
        return;
      }
      old.classList.remove('is-active'); // 現在有効の内容を無効に
      old.style.position = 'absolute';
      current.classList.add('is-active'); // これから有効の内容を有効に
      current.style.position = 'relative';
  }, true);
})

}
