const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');
const nav = document.querySelector('.header__navigation');
let popup;

burger.addEventListener('click', showMenu);
menu.addEventListener('click', isClickMenu);
nav.addEventListener('click', isPopup);

function showMenu() {
	burger.classList.toggle('burger_active');
	menu.classList.toggle('header__list_active');

	if (burger.classList.contains('burger_active')) {
		nav.insertAdjacentHTML(
			'afterbegin',
			`
		<div class='header__popup'></div>
	`
		);
		popup = document.querySelector('.header__popup');
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
		popup.remove();
	}
}

function isPopup(e) {
	if (e.target.classList.contains('header__popup')) {
		popup.remove();
		burger.classList.remove('burger_active');
		menu.classList.remove('header__list_active');
		document.body.style.overflow = '';
	}
}

function isClickMenu(e) {
	if (e.target.closest('.header__list-item')) {
		popup.remove();
		burger.classList.remove('burger_active');
		menu.classList.remove('header__list_active');
		document.body.style.overflow = '';
	}
}
