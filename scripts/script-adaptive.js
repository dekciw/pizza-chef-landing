// ========= Управление состоянием мобильного меню =========
const burgerButton = document.getElementById('burger');
const navigationMenu = document.getElementById('menu');
const navigationCloseButton = document.querySelector('.site-header__close');
const navigationLinks = document.querySelectorAll('.site-header__menu-link');

if (burgerButton && navigationMenu) {
	burgerButton.addEventListener('click', () => {
		navigationMenu.classList.add('site-header__navigation--open');
	});
}

// ========= Закрываем меню по кнопке-крестику =========
if (navigationCloseButton && navigationMenu) {
	navigationCloseButton.addEventListener('click', () => {
		navigationMenu.classList.remove('site-header__navigation--open');
	});
}

// ========= Скрываем меню после выбора пункта =========
navigationLinks.forEach(link => {
	link.addEventListener('click', () => {
		if (navigationMenu) {
			navigationMenu.classList.remove('site-header__navigation--open');
		}
	});
});
