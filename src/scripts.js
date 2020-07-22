import './styles.scss';

// Use JS for Smooth Scrolling
const navLinks = document.getElementsByClassName('nav-link');
const dangers = document.getElementById('dangers');
navLinks[0].addEventListener('click', (e) => {
  e.preventDefault();
  dangers.scrollIntoView({behavior: 'smooth'});
});
const example = document.getElementById('example');
navLinks[1].addEventListener('click', (e) => {
  e.preventDefault();
  example.scrollIntoView({behavior: 'smooth'});
});
const sources = document.getElementById('sources');
navLinks[2].addEventListener('click', (e) => {
  e.preventDefault();
  sources.scrollIntoView({behavior: 'smooth'});
});