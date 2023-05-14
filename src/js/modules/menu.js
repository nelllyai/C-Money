const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__navigation');
const overlay = document.querySelector('.overlay');

const menuLinks = document.querySelectorAll('.header__link');

const toggleMenu = () => {
  menu.classList.toggle('header__navigation_active');
  menuButton.classList.toggle('header__menu-button_close');
  overlay.classList.toggle('overlay_active');
};

menuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('header__navigation_active');
    menuButton.classList.remove('header__menu-button_close');
    overlay.classList.remove('overlay_active');
  })
});
