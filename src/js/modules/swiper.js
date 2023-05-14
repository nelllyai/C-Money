new Swiper('.swiper', {
  loop: true,
  speed: 400,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      loopedSlides: 1,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 2,
      loopedSlides: 2,
    },
    1024: {
      spaceBetween: -10,
      slidesPerView: 3,
      loopedSlides: 3,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      loopedSlides: 3,
    }
  }
});
