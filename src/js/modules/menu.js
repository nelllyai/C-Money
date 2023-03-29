const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__navigation');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('header__navigation_active');
  menuButton.classList.toggle('header__menu-button_close');
});
