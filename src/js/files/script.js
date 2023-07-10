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
// Аудиоплеер =========================================================================================================================================================================
var audio = document.getElementById("audio");
var av = document.getElementById("av-tag");
var playTime = document.getElementsByClassName("play-time")[0];
var playBtn = document.getElementsByClassName("play-btn")[0];
var curTime = document.getElementById("cur-time");
var speedBtnX1 = document.querySelector('.speed-btnx1');
var speedBtnX1_5 = document.querySelector('.speed-btnx1_5');
var speedBtnX2 = document.querySelector('.speed-btnx2');
// var volume = document.getElementById("volume");
// var speaker = document.getElementById("speaker");

// Функции переключения скорости

function getTimePart(time) {
	var sec_num = time;
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
	if (seconds < 10) { seconds = "0" + seconds; }

	return  {"minutes":minutes, "seconds":seconds}
}

function audioTimeUpdate() {

	 let cur_rez_minus = getTimePart(parseFloat(av.duration)-parseFloat(av.currentTime))

	playTime.innerHTML = "-"+cur_rez_minus.minutes + ':' + cur_rez_minus.seconds;
	if (isPlaying) curTime.value = av.currentTime;
}

function audioTimeInit() {
	let rez = getTimePart(av.duration)
	
	playTime.innerHTML = "-"+rez.minutes + ':' + rez.seconds;
	curTime.value = 0;
}

function normalPlaySpeed() {
	av.playbackRate = 1;
}
function hightPlaySpeed() {
	av.playbackRate = 1.5;
}
function fastPlaySpeed() {
	av.playbackRate = 2;
}

// Клик на кнопки скорости
speedBtnX1.addEventListener("click", (a) => {
	if (speedBtnX1) {
		normalPlaySpeed();
	}
});
speedBtnX1_5.addEventListener("click", (a) => {
	if (speedBtnX1_5) {
		hightPlaySpeed();
	}
});
speedBtnX2.addEventListener("click", (a) => {
	if (speedBtnX2) {
		fastPlaySpeed();
	}
});

//переменная для отслеживания воспроизведения звука
var isPlaying = false;

av.onloadedmetadata = function () {
	console.log("Загрузка метаданных")
	console.log(av.duration)
	curTime.max = av.duration;
	audioTimeInit()
};

//функция вывода текущего времени воспроизведения
av.ontimeupdate = function () {

	audioTimeUpdate()

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
		
		playBtn.classList.remove('paused');
		playBtn.innerHTML = "►"; // Убери как напишишь CSS
		
		// playBtn.style.display = "block";
		// playBtn.innerHTML = '<svg width="18" height="22" viewBox="0 0 18 22" fill="none"><path d="M1.00147 2.44421L15.8205 11L1.00146 19.5557L1.00147 2.44421Z" stroke="#FFAF0F" stroke-width="2"/></svg>';
	}
	else {
		av.play();
		isPlaying = true;
		playBtn.classList.add('paused');

		playBtn.innerHTML = "❚❚"; // Убери как напишишь CSS
	}

});