/*swiper 動作記述*/
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 460,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});