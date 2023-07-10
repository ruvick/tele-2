/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.swiper')) {
		new Swiper('.slider-bg', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],

			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-main',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-main-next',
				prevEl: '.swiper-button-main-prev',
			},
			// breakpoints: {
			// 	415: {
			// 		slidesPerView: 1.8,
			// 		spaceBetween: 10,
			// 	},
			// 	516: {
			// 		slidesPerView: 2.6,
			// 		spaceBetween: 10,
			// 	},
			// 	// 768: {
			// 	// 	slidesPerView: 2,
			// 	// 	spaceBetween: 20,
			// 	// },
			// 	1025: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 20,
			// 	},
			// 	// 1268: {
			// 	// 	slidesPerView: 4,
			// 	// 	spaceBetween: 30,
			// 	// },
			// },
			on: {
				init() {
					this.el.addEventListener('mouseenter', () => {
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.autoplay.start();
					});
				}
			}
		});
		new Swiper('.card-page-sl', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-card',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.slider-info__button-next',
			// 	prevEl: '.slider-info__button-prev',
			// },
			// breakpoints: {
			// 	415: {
			// 		slidesPerView: 1.8,
			// 		spaceBetween: 10,
			// 	},
			// 	516: {
			// 		slidesPerView: 2.6,
			// 		spaceBetween: 10,
			// 	},
			// 	// 768: {
			// 	// 	slidesPerView: 2,
			// 	// 	spaceBetween: 20,
			// 	// },
			// 	1025: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 20,
			// 	},
			// 	// 1268: {
			// 	// 	slidesPerView: 4,
			// 	// 	spaceBetween: 30,
			// 	// },
			// },
			on: {
				init() {
					this.el.addEventListener('mouseenter', () => {
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.autoplay.start();
					});
				}
			}
		});
		new Swiper('.gifts-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation,],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.swiper-pagination-main',
			// 	// clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.swiper-button-gifts-next',
				prevEl: '.swiper-button-gifts-prev',
			},
			breakpoints: {
				375: {
					slidesPerView: 1.4,
				},
				414: {
					slidesPerView: 1.6,
				},
				515: {
					slidesPerView: 1.8,
				},
				540: {
					slidesPerView: 2.2,
				},
				700: {
					slidesPerView: 2.6,
				},
				812: {
					slidesPerView: 3.2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3.6,
					spaceBetween: 26,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 36,
				},
			},
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});