const navbtn = document.querySelector('#nav-button');
const navbar = document.querySelector('#navbar');
const navclosebtn = document.querySelector('#navclosebutton');
const web3img = document.querySelector('.web-3');




function myFunction(x) {
  if (x.matches) { // If media query matches
    navbar.classList.remove('hidden');
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});
 
window.addEventListener('load', function() {
 
  AOS.init();
  navbtn.addEventListener('click', function () {
  navbar.classList.remove('hidden');
})


navclosebtn.addEventListener('click', function() {
  navbar.classList.add('hidden');
})
  
})