import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const icon = document?.querySelector('.header__icon-wrapper');
  const description = document?.querySelector('.header__description');
  const download = document?.querySelector('.header__download');
  const social = document?.querySelector('.header__social');
  const buttons = document?.querySelector('.hero__button-wrapper');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('header__burger--active');
    menu?.classList.toggle('header__list--active');
    icon?.classList.toggle('active');
    description?.classList.toggle('active');
    download?.classList.toggle('active');
    social?.classList.toggle('active');
    buttons?.classList.toggle('active');

    if (menu?.classList.contains('header__list--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__list--active');
    icon.classList.remove('active');
    description.classList.remove('active');
    download.classList.remove('active');
    social.classList.remove('active');
    enableScroll();
  });
  
  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__list--active');
      enableScroll();
    });
  });
})();
