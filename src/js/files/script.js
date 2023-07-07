// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

const iconMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const menuBody = document.querySelector(".mob-menu");
const menuListItemElems = document.querySelector(".mob-menu__list");
const mobsearch = document.querySelector(".header__mob-search-btn");
const headsearch = document.querySelector(".header__search-mob");

//BURGER
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("_lock");
		menuBody.classList.toggle("active");
	});
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
	menuListItemElems.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("_lock");
		menuBody.classList.toggle("active");
	});
}


// Закрытие моб меню при клике вне области меню 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
	const target = e.target // находим элемент, на котором был клик
	if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('.header__mob-search-btn') && !target.closest('.header__search-mob') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
		menuBody.classList.remove('active')
		body.classList.remove('_lock')
		// headsearch.classList.remove('_active')
	}
})

// Переключение Гид
const productsViewToggle = document.querySelectorAll('.switch-btn');

if (productsViewToggle.length > 0) {
	productsViewToggle.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			let btns = document.querySelectorAll('.switch-btn');

			btns.forEach((b) => {
				if (b == btn) {
					b.classList.add('active');
				} else {
					b.classList.remove('active');
				}
			});

			let catalogEntity = document.querySelectorAll('.guide__tabs');
			let view = btn.getAttribute('data-view');

			if (catalogEntity.length > 0) {
				catalogEntity.forEach((ce) => {
					if (view == ce.getAttribute('data-view')) {
						ce.classList.add('active');
					} else {
						ce.classList.remove('active');
					}
				});
			}
		});
	});
}

// Плавная прокрутка
const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smotScrollElems.forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault()
		console.log(event);

		const id = link.getAttribute('href').substring(1)
		console.log('id : ', id);

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
	})
});




// Поочередное открытие нескольких блоков меню, табы, либо что то еще
// const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
// const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
// const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

// BarIconElems.forEach((btn, index) => {
// 	btn.addEventListener('click', () => {

// 		if (!btn.classList.contains('sidebar__menu-icon_active')) {

// 			BarSubMenuElems.forEach((BarSubMenuElem) => {
// 				BarSubMenuElem.classList.remove('active')
// 			});
// 			BarIconElems.forEach((BarIconElem) => {
// 				BarIconElem.classList.remove('sidebar__menu-icon_active')
// 			});
// 			BarLinkIconElems.forEach((BarLinkIconElem) => {
// 				BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
// 			});

// 			BarSubMenuElems[index].classList.add('active')
// 			BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
// 			btn.classList.add('sidebar__menu-icon_active')
// 		} else {
// 			BarSubMenuElems[index].classList.remove('active')
// 			BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
// 			btn.classList.remove('sidebar__menu-icon_active')
// 		}
// 	})
// })

