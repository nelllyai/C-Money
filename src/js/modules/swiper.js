new Swiper('.swiper', {
  loop: true,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 21,
      slidesPerView: 2,
    },
    1024: {
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 30,
    }
  }
});
