// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

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


document.addEventListener("DOMContentLoaded", (e) => {

	//dom объекты элементов контроля
	var av = document.getElementById("av-tag");
	var playTime = document.getElementsByClassName("play-time")[0];
	var playBtn = document.getElementsByClassName("play-btn")[0];
	var curTime = document.getElementById("cur-time");
	var volume = document.getElementById("volume");
	var speaker = document.getElementById("speaker");

	//переменная для отслеживания воспроизведения звука
	var isPlaying = false;

	av.onloadedmetadata = function () {
		curTime.max = av.duration;
	};

	//функция вывода текущего времени воспроизведения
	av.ontimeupdate = function () {

		var sec_num = av.currentTime;
		var hours = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);
		seconds = Math.round(seconds);

		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) { seconds = "0" + seconds; } playTime.innerHTML = minutes + ':' + seconds;
		if (isPlaying) curTime.value = av.currentTime;
	};
	//функция для настройки громкости
	// volume.onchange = function () {

	// 	av.volume = volume.value / 10;
	// };
	//функция для установки начала воспроизведения
	curTime.onchange = function () {

		av.pause(); av.currentTime = curTime.value; av.play();
	};
	//функция для вкл/выкл громкости
	// speaker.onclick = function () {

	// 	if (volume.value == 0) {
	// 		volume.value = 10; av.volume = 1;
	// 	} else {
	// 		volume.value = 0; av.volume = 0;
	// 	}
	// };
	//функция для play/pause и изображения кнопки воспроизведения
	playBtn.addEventListener("click", (a) => {

		if (isPlaying) {
			av.pause();
			isPlaying = false;
			playBtn.innerHTML = "►";
			// playBtn.style.display = "block";
			// playBtn.innerHTML = '<svg width="18" height="22" viewBox="0 0 18 22" fill="none"><path d="M1.00147 2.44421L15.8205 11L1.00146 19.5557L1.00147 2.44421Z" stroke="#FFAF0F" stroke-width="2"/></svg>';
		}
		else {
			av.play();
			isPlaying = true;
			playBtn.innerHTML = "❚❚";
		}

	});
});