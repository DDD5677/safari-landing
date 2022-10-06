$(function(){
	$('.about__video-play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	$('.gallery__slider').slick({

		prevArrow:`<button type="button" class="gallery-arrow slick-prev"><img
		src="images/arrow-left.svg"
		alt=""/></button>`,
		nextArrow:`<button type="button" class="gallery-arrow slick-next"><img
		src="images/arrow-right.svg"
		alt=""/></button>`
	 });

	 const burger=document.querySelector('.burger');
	 const menu=document.querySelector('.menu');

	 burger.addEventListener('click',()=>{
		menu.classList.toggle('burger__active');
		burger.classList.toggle('toggle')
	 })

});