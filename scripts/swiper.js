
//DESTINADO AO SWIPPER
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 2.5,
  //responsividade a definir: ver documentação https://swiperjs.com/swiper-api#initialize-swiper
  breakpoints: {

  }
});
