// слайдер секции "hero"

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

});

// аккордион секции "questions"

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

// поле поиска

const buttonSearch = document.querySelector('.button-search');
const search = document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

buttonSearch.addEventListener('click',
  function () {
    search.classList.add('search--active');
  });

searchClose.addEventListener('click',
  function () {
    search.classList.remove('search--active');
  });

