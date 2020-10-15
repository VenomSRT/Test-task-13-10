'use strict';

document.addEventListener('click', (event) => {
  if (event.target.className === 'header__menu-button') {
    document.querySelector('.header__main-menu')
      .className = 'header__main-menu header__main-menu--opened';
  }

  if (event.target.className === 'header__close-button'
    || event.target.className === 'header__menu-link') {
    document.querySelector('.header__main-menu')
      .className = 'header__main-menu';
  }
});
