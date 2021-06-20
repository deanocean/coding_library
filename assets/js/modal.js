export default function() {
  const body = document.querySelector("body"); // 背景固定用に使用　付与されるis-fixedがbodyに付きます。検証してもらうと内容わかります。
  const modal = document.querySelector(".js-modal"); // 実際に表示させるモーダルのdiv
  const modalTrigger = document.querySelectorAll(".js-modalTrigger"); // 選択したい各動画
  const modalOverlay = document.querySelector(".js-modalOverlay"); // モーダル表示した際の黒透過背景用
  const modalClose = document.querySelector(".js-modalClose"); // モーダルを閉じるボタン

  // modal open
  const triggerList = Array.prototype.slice.call(modalTrigger, 0);
  triggerList.forEach((targetBox) => {
    targetBox.addEventListener("click", () => {
      // 各動画のhtmlタグに設置しているdata-movie属性の内容を取得
      const movieId = targetBox.getAttribute("data-movie");

      // モーダルの内容を動的に作成する為にdivを作成
      const movieCont = document.createElement("div");

      // 先程作成したdivにclassを付与
      movieCont.className = "c-modal_cont";

      // 実際に反映するiframeのurlを先程作成したdivに反映する
      // 各動画のiframeで変わる固有のID??があると思うので、そちらがdata-movieに入る内容にして頂ければ上手くいくと思います
      movieCont.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        movieId +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

      // モーダル用のdiv内に↑で準備したiframeなどを追加する
      modal.appendChild(movieCont);

      body.classList.add("is-fixed"); // bodyにclassを付与して背景固定
      modalOverlay.classList.add("is-active"); // 背景に黒透過を表示
      modal.classList.add("is-active"); // モーダルを表示
    });
  });

  // modal close
  modalClose.addEventListener("click", () => {
    const modalMovie = document.querySelector(".c-modal_cont");
    modal.removeChild(modalMovie);

    body.classList.remove("is-fixed");
    modalOverlay.classList.remove("is-active");
    modal.classList.remove("is-active");
  });
}
