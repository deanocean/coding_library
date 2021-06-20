// import Swiper from 'swiper';
// import Swiper from "swiper/bundle";

export function swiper() {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    autoHeight: true,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 80,
    slidesPerGroup: 1,
    // direction: 'vertical',
    loop: false,
    loopFillGroupWithBlank: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // The scrollbar is not supported with loop mode 
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      767: {
        autoHeight: false,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
    },
  });
}
