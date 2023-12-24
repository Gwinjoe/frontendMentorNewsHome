const navbtn = document.querySelector('#nav-button');
const navbar = document.querySelector('#navbar');
const navclosebtn = document.querySelector('#navclosebutton');
const web3img = document.querySelector('.web-3');





 
window.addEventListener('load', function() {
 
  AOS.init();
  navbtn.addEventListener('click', function () {
  navbar.classList.remove('hidden');
});


navclosebtn.addEventListener('click', function() {
  navbar.classList.add('hidden');
});
  
});