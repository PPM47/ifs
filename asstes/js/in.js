const menuBtn = document.querySelector('.menu-toggle');
const navac = document.querySelector('.nav-links-div');
let menuOpen = false;

const cal1 = document.querySelector('.cal1');
const cal2 = document.querySelector('.cal2');
const cal3 = document.querySelector('.cal3');
let menOpen = false;



menuBtn.addEventListener('click', () =>{
  if (!menuOpen){
    menuBtn.classList.add('active');
    navac.classList.add('navactive');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('active');
    navac.classList.remove('navactive');
    menuOpen = false;
  }
});



cal1.addEventListener('click', () =>{
  if (!menOpen){
    cal1.classList.add('active');
    cal2.classList.remove('active');
    cal3.classList.remove('active');
    menuOpen = true;
  }
  else{
    cal1.classList.remove('active');
    cal2.classList.remove('active');
    cal3.classList.remove('active');
    menuOpen = false;
  }
});
cal2.addEventListener('click', () =>{
  if (!menOpen){
    cal2.classList.add('active');
    cal3.classList.remove('active');
    cal1.classList.remove('active');
    menuOpen = true;
  }
  else{
    cal1.classList.remove('active');
    cal2.classList.remove('active');
    cal3.classList.remove('active');
    menuOpen = false;
  }
});
cal3.addEventListener('click', () =>{
  if (!menOpen){
    cal3.classList.add('active');
    cal1.classList.remove('active');
    cal2.classList.remove('active');
    menuOpen = true;
  }
  else{
    cal1.classList.remove('active');
    cal2.classList.remove('active');
    cal3.classList.remove('active');
    menuOpen = false;
  }
});


$(document).ready(function(){
   
$('.main-icon-div').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  
  responsive: [{
   
    breakpoint: 990,
    settings: {
      slidesToShow: 3,
    },
    breakpoint: 790,
    settings: {
      slidesToShow: 2,
    },

   
   
  }]

});
});





function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }