
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');



const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//event capturing and bubling
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

  
document.querySelector(".nav__link").addEventListener("click",function (e){
  this.style.backgroundColor= randomColor()
  console.log(e.target);
  console.log("link");
})
document.querySelector(".nav__links").addEventListener("click",function(e){
  this.style.backgroundColor= randomColor()
  console.log(e.target);
  console.log("con");


})
document.querySelector(".nav").addEventListener("click",function(e){
  this.style.backgroundColor= randomColor()
  console.log(e.target);
  console.log("nav");

},true)

//event delegation
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault()
    const id= this.getAttribute('href')
    console.log(id);
    document.querySelector(id).scrollIntoView({behaviour:'smooth'})
  })
})

document.querySelector('.nav__links').addEventListener("click",function(e){
  console.log("link");
  e.preventDefault()
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behaviour:'smooth'})
    console.log(e.target);

  }
})

// sticky navbar
// const obscallback = function(entries, observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// }
// const obsOption ={
//   root:null,
//   threshold:0.15
// }
// const observer = new IntersectionObserver(obscallback,obsOption)
// observer.observe(section1)



const header = document.querySelector('.header')
const nvHeight = nav.getBoundingClientRect().height
// console.log(nvHeight);
const  stickyNav = function(entries){
const [entry] = entries; 
// console.log(entry);
if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')


}

const Headerobserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0.1,
  rootMargin:`-${nvHeight}px`
})
Headerobserver.observe(header)



//lazy loading

const imgTarget = document.querySelectorAll('img[data-src]')
const loadImg = function (entries, observer){
  const [entry] = entries // we have only one threshold so only one entry
  console.log(entry);
  if(!entry.isIntersecting) return
   entry.target.src = entry.target.dataset.src
   entry.target.addEventListener('load',function(e){
    entry.target.classList.remove('lazy-img')

   })
   observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0
})
imgTarget.forEach(img =>imgObserver.observe(img))


