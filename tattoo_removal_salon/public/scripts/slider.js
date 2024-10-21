const swiper = new Swiper('.swiper-container', {
  loop: true, // Бесконечная прокрутка
  slidesPerView: 'auto',
  spaceBetween: 50,
  centeredSlides: true,
  speed: 1000,
  effect: 'slide',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  on: {
    slideChangeTransitionEnd: function () {
      let slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(slide => {
        slide.style.transform = 'scale(1)';
      });
      let activeSlide = document.querySelector('.swiper-slide-active');
      activeSlide.style.transform = 'scale(1.1)';
    }
  }
});
