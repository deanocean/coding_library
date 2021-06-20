export default function (){

  /* 例：
    <button class="js-slideDownBtn"></button>
    <div data-slidenum="4" data-sliderow="2" class="js-slideDown_wrap">
        <div class="js-slideDown_cont">
          // 内容
        </div>
    </div>

    // data-slidenum: 要素に表示させる行数（縦）
    // data-sliderow: 要素に表示させる列数（横）
  */


  // ディフォルトの高さを決める関数
  function setDefaultHeight(item){
    // item: 該当要素
    // num: 要素に表示させる行数（縦）
    // row: 要素に表示させる列数（横）

    let num = item.dataset.slidenum;
    let row = 1;
    
    // data-sliderow が設定された場合（ディフォルトは 1 列）
    if(item.dataset.sliderow){
      row = item.dataset.sliderow;
    }

    // スマホで閲覧するときは必ず 1 列で表示する
    if(document.body.clientWidth <= 767) {
      row = 1;
    }

    // ☆ 1 列表示の場合、1 2 3 ... つ目だけの高さを加算、下☆の判断式と関わる
    // ☆ 2 列表示の場合、2 4 6 ... つ目だけの高さを加算、下☆の判断式と関わる
    // ☆ 3 列表示の場合、3 6 9 ... つ目だけの高さを加算、下☆の判断式と関わる
    num = num * row;
      
    // 子要素を取得
    let child = [];
    // child = [].slice.call(child);
    for(let j =0; j < num; j++){
      child.push(item.querySelectorAll('.js-slideDown_cont > *')[j]);
    }
   
    let count = 0;
    for(let i = 1; i <= num ; i++){

      // ☆ 上☆の判断式と関わる
      if(i%row != 0) {
        continue;
      }      

      // margin や border などを計算するための関数
      let computeStyle = function(style){
        return parseFloat(window.getComputedStyle(child[i-1]).getPropertyValue(style));
      }
      
      // 各子要素の高さを計算する
      let current = 
        child[i-1].offsetHeight + 
        computeStyle('margin-top') + 
        computeStyle('margin-bottom');

        let current02 = child[i-1].offsetHeight

      // 小数点以下を切り上げる
      current = Math.ceil(current);
      // 高さを加算
      count += current;
    }

    item.style.height = `${count + 1}px`;
  }
  
  // スライドダウン関数
  const slideDown = element => element.style.height = `${element.scrollHeight + 1}px`;
  
  // スライドダウンのボタン
  let slideDownTrigger = document.querySelectorAll(".js-slideDownBtn")
  slideDownTrigger = [].slice.call(slideDownTrigger);

  slideDownTrigger.forEach((item)=>{
    item.addEventListener("click", function (e) {

      // 該当するスライドダウン内容を取得
      let nodes = e.target.parentNode.children; 
      nodes = [].slice.call(nodes);
      let wrap = nodes.find((item)=>{
        return item.classList.contains('js-slideDown_wrap');
      })   

      // ボタンの切り替え機能
      if(!e.target.classList.contains('is-active')){
        e.target.classList.add('is-active')
        slideDown(wrap);
      }else {
        e.target.classList.remove('is-active');
        setDefaultHeight(wrap);
      }
    });
  })


  function init(){
    // 最初にスライドダウンの各要素をディフォルト高さに設定
    let data = document.querySelectorAll('.js-slideDown_wrap');
    data = [].slice.call(data);

    data.forEach((child)=>{
      setDefaultHeight(child);
    })
  }

  init();


  return setDefaultHeight;
}  
