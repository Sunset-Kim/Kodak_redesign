// dom element
const header = document.querySelector('.header');
const gnb = document.querySelector('.gnb');
let isScroll = false;
let scrollCheck;
window.addEventListener('scroll', function(e){
  isScroll = true;
})

scrollCheck = setInterval( () => {
  if(isScroll) {
    isScroll = false;
    header.classList.add('invisible');
  } else {
    header.classList.remove('invisible');
  }
} ,250)

// slide
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// best item tap menu
const btnTap = document.querySelectorAll('.btn-tap');
const tapPage = document.querySelectorAll('.item-tab');
const tapContainer = document.querySelector('.item-tab-container');

btnTap.forEach((element,index) => {
  element.addEventListener('click',(e) => {

    if(element.classList.contains('active')) {
      return
    }

    tapContainer.classList.add('selected');
    
    setTimeout(() => {
      btnTap.forEach(btn => btn.classList.remove('active'));
      tapPage.forEach(page => page.classList.remove('is-show'));

      e.target.classList.add('active');
      tapPage[index].classList.add('is-show');
      tapContainer.classList.remove('selected');
    },300)
  })
});

// lookbook
const lookbook = document.querySelector('#lookbook .container');
const lookbookLabel = document.querySelectorAll('.lookbook-label');

lookbook.addEventListener('click', function(e) {
  if(e.target.classList.contains('lookbook-label')) {
    if(e.target.classList.contains('active')) {
      return resetLookbook();
    }
    
    resetLookbook()
    e.target.classList.add('active');
    let nextNode = e.target.nextElementSibling;
    nextNode.classList.add('active');
  }

  function resetLookbook() {
    lookbookLabel.forEach((element)=> {
      element.classList.remove('active');
      element.nextElementSibling.classList.remove('active');
    })
  }
})

// moblie side bar
const btnTrigger = document.querySelector('.btn-trigger');
const rnb = document.querySelector('.rnb');
btnTrigger.addEventListener('click', function(e){
  e.stopPropagation();
  this.classList.toggle('active');
  rnb.classList.toggle('active');
});

rnb.addEventListener('click', (e) => {
  e.stopPropagation();
  if(e.target.nodeName === 'A' || e.target.nodeName === 'I') {
    btnTrigger.classList.remove('active');
    rnb.classList.remove('active');
  }
});

document.documentElement.addEventListener('click', () => {
  btnTrigger.classList.remove('active');
  rnb.classList.remove('active');
})

// item toggle btn
const items =document.querySelectorAll('.item-icon')

items.forEach(item => item.addEventListener('click', function(e){
  if(e.target.classList.contains('fa-heart')) {
    e.target.classList.toggle('active');
  }
}))


