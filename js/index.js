$(document).ready(function(){
	// Navbar links scroll to section
	const scrollToSection = $('.scrollTo');
	
	scrollToSection.on('click', (event) => {
		event.preventDefault();
		
		let navElement = event.target.getAttribute('href');
		let navbarHeight = 53; // Offset nav bar
		let navOffset = $(navElement).offset().top;		
		
		$('html, body').animate({scrollTop: navOffset - navbarHeight}, 500);	
		
		return false; // Remove hashes in URL
	});
	
	
	// Scroll down to about section
	const btnScrollDown = $('.btn-scroll-down');
	
	const scrollToTarget = () => {
		let element = $('.section-about');
		let navbarOffset = 53;
		let elementPosition = element.offset().top;
		let offsetPosition = elementPosition - navbarOffset;
	
		$('html, body').animate({scrollTop: offsetPosition}, 500)
	}
	
	btnScrollDown.on('click', scrollToTarget);
	
	// Animate Project Section & Navbar links active classes
	const breakpointOne = $('.section-about').offset().top - 250;
	const breakpointTwo = $('.section-about').offset().top - 63;
	const breakpointThree = $('.section-projects').offset().top - 63;
	const sectionProjectsRow = $('.section-projects-row');	
	
	$(window).scroll(function(){
		if($(window).scrollTop() > breakpointOne) {
			sectionProjectsRow.addClass('active');
		}
		
		if($(window).scrollTop() >= breakpointTwo) {
			$('.scrollTo-about').addClass('active');
			$('.scrollTo-projects').removeClass('active');
		}else {
			$('.scrollTo-about').removeClass('active');
		}
		
		if($(window).scrollTop() >= breakpointThree) {
			$('.scrollTo-about').removeClass('active');
			$('.scrollTo-projects').addClass('active');
		}
	});
});