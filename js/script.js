$(document).ready(function() {
	'use strict';
	// переменная с массивом элементов с датами и фото
	var divs = $('div[data-order]');
	// функция выключающая не нужные элементы с датами и фото
	var hideDiv = function() {
		// для медиа с min-width: 320px
		if (window.matchMedia('(min-width: 320px)').matches) {
			divs.each(function() {
				var order = $(this).attr('data-order');
				if (order > 20 || order === '13') {
					$(this).css({'display': 'none'});
				}
				else {
					$(this).css({'display': 'inline-block'});
				}
			});
		}
		// для медиа с min-width: 480px
		if (window.matchMedia('(min-width: 480px)').matches) {
			divs.each(function() {
				var order = $(this).attr('data-order');
				if (order === '25' || order === '26' || order > 28) {
					$(this).css({'display': 'none'});
				}
				else {
					$(this).css({'display': 'inline-block'});
				}
			});
		}
		// для медиа с min-width: 768px
		if (window.matchMedia('(min-width: 768px)').matches) {
			divs.each(function() {
				var order = $(this).attr('data-order');
				if (order === '5' || order === '6' || order === '13' || order === '19' || order === '20') {
					$(this).css({'display': 'none'});
				}
				else {
					$(this).css({'display': 'inline-block'});
				}
			});
		}
	};
	// вызов функции при загрузке страницы и ее изменении ширины
	hideDiv();
	$(window).bind('resize', hideDiv);
});