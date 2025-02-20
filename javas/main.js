// JavaScript
const barsIcon = document.querySelector('.fa-list');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

barsIcon.addEventListener('click', function() {
  barsIcon.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('load', function() {
  barsIcon.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 30) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
});

