const burgerBtn = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('change');
   menu.classList.toggle('open');
});



window.addEventListener("scroll", ()=>{
    header.classList.toggle('change', window.scrollY > 0);
});


