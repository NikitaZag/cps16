!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(14)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){var e=document.querySelector(".header__button-burger"),t=document.querySelector(".menu-mobile__button"),n=document.querySelector(".menu"),i=document.querySelectorAll(".buttons-connections__feedback"),r=document.querySelector(".feedback__button"),s=document.querySelector(".feedback"),o=document.querySelectorAll(".buttons-connections__call"),c=document.querySelector(".call__button"),l=document.querySelector(".call"),u=document.querySelector("body"),a=(document.querySelectorAll(".header-desktop__button"),document.querySelector(".content"));function d(e,t){return function(i){e.classList.contains(t)||setTimeout((function(){return window.addEventListener("click",function(e,t){return function(n){!e.contains(n.target)&&a.classList.contains("content--blur")&&d(e,t)()}}(e,t),{once:!0})}),300),e.classList.toggle(t),a.classList.toggle("content--blur"),window.innerWidth<1366&&(a.classList.toggle("content--fixed"),(i.target.classList.contains("buttons-connections__feedback")||i.target.classList.contains("buttons-connections__call")||i.target.classList.contains("buttons-connections__img"))&&(n.classList.remove("menu--active"),a.classList.add("content--fixed"),a.classList.add("content--blur"))),window.innerWidth>1366&&(n.classList.toggle("content--blur"),u.classList.toggle("content--fixed"))}}document.querySelector(".header"),e.addEventListener("click",d(n,"menu--active")),t.addEventListener("click",d(n,"menu--active")),i[0].addEventListener("click",d(s,"feedback--active")),i[1].addEventListener("click",d(s,"feedback--active")),r.addEventListener("click",d(s,"feedback--active")),o[0].addEventListener("click",d(l,"call--active")),o[1].addEventListener("click",d(l,"call--active")),c.addEventListener("click",d(l,"call--active"))}(),function(){var e=null,t=null,n=null;function r(){e||(e=new Swiper(".fixed__mobile",{loop:!0,slidesPerView:1.15,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{350:{slidesPerView:1.35,slidesPerGroup:1,spaceBetween:17},400:{slidesPerView:1.55,slidesPerGroup:1,spaceBetween:17},450:{slidesPerView:2,slidesPerGroup:2,spaceBetween:17},550:{slidesPerView:2.3,slidesPerGroup:2,spaceBetween:17},600:{slidesPerView:2.4,slidesPerGroup:2,spaceBetween:17},650:{slidesPerView:2.75,slidesPerGroup:2,spaceBetween:17},700:{slidesPerView:3,slidesPerGroup:3,spaceBetween:17}}}))}function s(){t||(t=new Swiper(".repair-type__mobile",{loop:!0,slidesPerView:1.15,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{350:{slidesPerView:1.35,spaceBetween:17},400:{slidesPerView:1.55,spaceBetween:17},450:{slidesPerView:2,spaceBetween:17},550:{slidesPerView:2.3,slidesPerGroup:2,spaceBetween:17},600:{slidesPerView:2.4,slidesPerGroup:2,spaceBetween:17},650:{slidesPerView:2.75,slidesPerGroup:2,spaceBetween:17},700:{slidesPerView:3,slidesPerGroup:3,spaceBetween:17}}}))}function o(){var e;n||(n=new Swiper(".prices__mobile",{loop:!0,slidesPerView:1.15,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:(e={300:{slidesPerView:1.05,slidesPerGroup:1,spaceBetween:17},350:{slidesPerView:1.2,slidesPerGroup:1,spaceBetween:17},400:{slidesPerView:1.4,slidesPerGroup:1,spaceBetween:17},450:{slidesPerView:1.6,slidesPerGroup:1,spaceBetween:17},550:{slidesPerView:1.75,slidesPerGroup:1,spaceBetween:17}},i(e,"550",{slidesPerView:2,slidesPerGroup:2,spaceBetween:17}),i(e,650,{slidesPerView:2.3,slidesPerGroup:2,spaceBetween:17}),i(e,700,{slidesPerView:2.5,slidesPerGroup:2,spaceBetween:17}),e)}))}function c(e){e&&(e.destroy(),e=null)}r(),s(),o(),window.addEventListener("resize",(function(){var i=window.innerWidth;!e&&!t&&!n&&i<767&&(r(),s(),o()),i>767&&(c(e),c(t),c(n))}))}(),function(){var e=document.querySelectorAll(".button-unwrap"),t=document.querySelectorAll(".button-unwrap__text"),n=document.querySelectorAll(".button-unwrap__arrow"),i=document.querySelector(".fixed__desc"),r=document.querySelector(".services__text"),s=document.querySelector(".repair-type__desc");function o(e,t,n,o,c,l,u){return function(){c.classList.contains("services__button")&&(r.classList.toggle(e),l.innerText===n?l.innerText="Читать далее":l.innerText=n,u.classList.toggle(t)),c.classList.contains("fixed__toggle")&&(i.classList.toggle(e),l.innerText===n?l.innerText=o:l.innerText=n,u.classList.toggle(t)),c.classList.contains("repair-type__toggle")&&(s.classList.toggle(e),l.innerText===n?l.innerText=o:l.innerText=n,u.classList.toggle(t))}}for(var c=0;c<e.length;c++)e[c].addEventListener("click",o("show-more","button-unwrap__arrow--hide","Скрыть","Показать все",e[c],t[c],n[c]))}()}]);
import '../scss/style.scss';
import '../scss/menu.scss';
import '../scss/header.scss';
import '../scss/navigation.scss';
import '../scss/feedback.scss';
import '../scss/fonts.scss';
import '../scss/footer.scss';
import '../scss/call.scss';
import '../scss/fix.scss';
import '../scss/services.scss';
import '../scss/prices.scss';
import '../scss/repare-type.scss'
import '../scss/media.scss';

import modal from './modal';
import swiper from './swiper';
import showMore from './showMore';

modal();
swiper();
showMore();
//# sourceMappingURL=bundle.js.map
export default function modal () {
  const menuOpen = document.querySelector('.header__button-burger');
  const menuClose = document.querySelector('.menu-mobile__button');
  const menu = document.querySelector('.menu');

  const feedbackOpen = document.querySelectorAll('.buttons-connections__feedback');
  const feedbackClose = document.querySelector('.feedback__button');
  const feedbackBlock = document.querySelector('.feedback');

  const callOpen = document.querySelectorAll('.buttons-connections__call');
  const callClose = document.querySelector('.call__button');
  const callBlock = document.querySelector('.call');

  const body = document.querySelector('body');
  const but = document.querySelectorAll('.header-desktop__button');
  const contentBlock = document.querySelector('.content');
  const header = document.querySelector('.header');

  function menuToogle(block, activeClass){
      return (event) => {

          if (!block.classList.contains(activeClass)){
              setTimeout(() => window.addEventListener('click', closePopUp(block, activeClass), {once: true}), 300);
          }

          block.classList.toggle(activeClass);
          // contentBlock.classList.toggle('overflow');
          contentBlock.classList.toggle('content--blur');
          // contentBlock.classList.toggle('content--fixed');

          if (window.innerWidth < 1366){
              contentBlock.classList.toggle('content--fixed');

              if (event.target.classList.contains('buttons-connections__feedback')||
                  event.target.classList.contains('buttons-connections__call')||
                  event.target.classList.contains("buttons-connections__img")
                  ){
                      menu.classList.remove('menu--active');
                      contentBlock.classList.add('content--fixed');
                      contentBlock.classList.add('content--blur');
              }
          }

          if (window.innerWidth > 1366){
              menu.classList.toggle('content--blur');
              body.classList.toggle('content--fixed');
          }
      };
  }
  function closePopUp(block,activeClass){
      return (e) => {
          if(!block.contains(e.target) && contentBlock.classList.contains('content--blur')){
              menuToogle(block, activeClass)();
          }
      };
  }

  menuOpen.addEventListener('click', menuToogle(menu, 'menu--active'));
  menuClose.addEventListener('click', menuToogle(menu, 'menu--active'));

  feedbackOpen[0].addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
  feedbackOpen[1].addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
  feedbackClose.addEventListener('click', menuToogle(feedbackBlock, 'feedback--active'));

  callOpen[0].addEventListener('click', menuToogle(callBlock, 'call--active'));
  callOpen[1].addEventListener('click', menuToogle(callBlock, 'call--active'));
  callClose.addEventListener('click', menuToogle(callBlock, 'call--active'));
}
export default function showMore(){
  const buttons = document.querySelectorAll('.button-unwrap');
  const buttonText = document.querySelectorAll('.button-unwrap__text');
  const buttonImg = document.querySelectorAll('.button-unwrap__arrow');

  const fixBrandsBlock = document.querySelector('.fixed__desc');
  const servicesBlock = document.querySelector('.services__text');
  const repairBlock = document.querySelector('.repair-type__desc');



  function hideShowBrandsBlock(classMore, classArrowHide, textHide, textShow,button, buttonText, buttonImg){


      function showMore(){
          if (button.classList.contains('services__button')){
              servicesBlock.classList.toggle(classMore);
              buttonText.innerText === textHide ? buttonText.innerText = "Читать далее" : buttonText.innerText = textHide;
              buttonImg.classList.toggle(classArrowHide);
          }
          if (button.classList.contains('fixed__toggle')){
              fixBrandsBlock.classList.toggle(classMore);
              buttonText.innerText === textHide ? buttonText.innerText = textShow : buttonText.innerText = textHide;
              buttonImg.classList.toggle(classArrowHide);
          }
          if (button.classList.contains('repair-type__toggle')){
              repairBlock.classList.toggle(classMore);
              buttonText.innerText === textHide ? buttonText.innerText = textShow : buttonText.innerText = textHide;
              buttonImg.classList.toggle(classArrowHide);
          }
      }

      return showMore;
  }

  for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', hideShowBrandsBlock('show-more','button-unwrap__arrow--hide','Скрыть','Показать все', buttons[i], buttonText[i], buttonImg[i]));
  }
}
export default function modal(){
  let swiperFix = null;
  let swiperRepair = null;
  let swiperPrices = null;

  function fixSliderInit () {
      if (!swiperFix) {
          swiperFix = new Swiper('.fixed__mobile', {
              loop: true,
              slidesPerView: 1.15,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              keyboard:{
                  enabled: true,
                  onlyInViewport:true,
              },

              breakpoints:{
                  350: {
                      slidesPerView: 1.35,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  400: {
                      slidesPerView: 1.55,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  450: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  550: {
                      slidesPerView: 2.30,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  600: {
                      slidesPerView: 2.4,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  650: {
                      slidesPerView: 2.75,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  700: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 17,
                  },
              }
              });
      }
  }

  function repairSliderInit(){
      if (!swiperRepair) {
          swiperRepair = new Swiper('.repair-type__mobile', {
              loop: true,
              slidesPerView: 1.15,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              keyboard:{
                  enabled: true,
                  onlyInViewport:true
              },

              breakpoints:{
                  350: {
                      slidesPerView: 1.35,
                      spaceBetween: 17,
                  },
                  400: {
                      slidesPerView: 1.55,
                      spaceBetween: 17,
                  },
                  450: {
                      slidesPerView: 2,
                      spaceBetween: 17,
                  },
                  550: {
                      slidesPerView: 2.30,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  600: {
                      slidesPerView: 2.4,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  650: {
                      slidesPerView: 2.75,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  700: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 17,
                  },
              }
              });
      }
  }

  function pricesSliderInit(){
      if (!swiperPrices) {
          swiperPrices = new Swiper('.prices__mobile', {
              loop: true,
              slidesPerView: 1.15,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              keyboard:{
                  enabled: true,
                  onlyInViewport:true
              },

              breakpoints:{
                  300: {
                      slidesPerView: 1.05,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  350: {
                      slidesPerView: 1.20,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  400: {
                      slidesPerView: 1.40,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  450: {
                      slidesPerView: 1.60,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  550: {
                      slidesPerView: 1.75,
                      slidesPerGroup: 1,
                      spaceBetween: 17,
                  },
                  550: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  650: {
                      slidesPerView: 2.30,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },
                  700: {
                      slidesPerView: 2.5,
                      slidesPerGroup: 2,
                      spaceBetween: 17,
                  },

              }
              });
      }
  }

  function sliderDestroy (slider) {
      if (slider) {
          slider.destroy();
          slider = null;
      }
  }

  fixSliderInit ();
  repairSliderInit();
  pricesSliderInit();

  window.addEventListener('resize', function(){
      let widthClient = window.innerWidth;

      if (!swiperFix && !swiperRepair && !swiperPrices && widthClient < 767){
          fixSliderInit ();
          repairSliderInit();
          pricesSliderInit();
      }
      if (widthClient > 767){
          sliderDestroy(swiperFix);
          sliderDestroy(swiperRepair);
          sliderDestroy(swiperPrices);

      }
  });
}
