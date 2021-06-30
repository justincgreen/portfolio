$(document).ready(function(){
	// Scroll top button
	const scrollTop = $('.scroll-top');
	
	const scrollToTop = () => {
		$('html, body').animate({scrollTop: 0}, 500);
	}
	
	scrollTop.on('click', scrollToTop);
});