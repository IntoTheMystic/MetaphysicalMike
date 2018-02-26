import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';


 function startAnimate(){

               setTimeout (function(){

        $('.section1__title').removeClass('animate');
    }, 500);


 };

startAnimate();




const sliderImages = document.querySelectorAll('.slide_down');






              $('.open_menu').click(function(){
          $('.navbar').toggleClass('navbar_open');
          $('.open_menu').toggleClass('open');

    });


        function scrollpls(){
            const navbar = document.getElementById('header');
            if(window.scrollY >= 183) {
            navbar.classList.add('scroll_nav');
             } else {
                navbar.classList.remove('scroll_nav');
             }
            }



        window.addEventListener('scroll',scrollpls)



$('.header__togglebutton').click(function(){

    $('.header__my_nav').toggleClass('open');
});


const current = document.querySelector('#current-img');
const images = document.querySelectorAll('.my-work__gallery__img img');

const opacity = 0.4;


images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {

  images.forEach(img => (img.style.opacity = 1));


  current.src = e.target.src;


  current.classList.add("fade-in");


  setTimeout(() => current.classList.remove("fade-in"), 1000);

  e.target.style.opacity = opacity;
}

const squares = document.querySelectorAll('.square')
const squarebutton = $('#squarebutton');
squarebutton.click(function () {
  squares.forEach((square)=>{
  square.classList.toggle('rotateme');
  });
});

window.onload = () => {
$.get('dupa.json').then((dupa)=>{
  console.log(dupa)
return  $.get('niemapracy.json');
}).then((niemapracy)=>{
  console.log(niemapracy)
});






}
