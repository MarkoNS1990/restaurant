import { load } from './components/header';
import { home } from './components/home';
import { menu } from './components/menu';
import { contact } from './components/contact';
import { footer } from './components/footer';

const linkHome = document.querySelector('.link-home');
const linkMenu = document.querySelector('.link-menu');
const linkContact = document.querySelector('.link-contact');
const homeDiv = document.querySelector('.home-div');
const menuDiv = document.querySelector('.menu-div');
const contactDiv = document.querySelector('.contact-div');
// Show only home page
linkHome.addEventListener('click', () => {
  homeDiv.style.display = 'block';
  menuDiv.style.display = 'none';
  contactDiv.style.display = 'none';
});

// Show only menu page
linkMenu.addEventListener('click', () => {
  homeDiv.style.display = 'none';
  menuDiv.style.display = 'block';
  contactDiv.style.display = 'none';
});

// Show only contact page
linkContact.addEventListener('click', () => {
  homeDiv.style.display = 'none';
  menuDiv.style.display = 'none';
  contactDiv.style.display = 'block';
});
