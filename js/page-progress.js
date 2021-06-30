// Page Scroll Progress Bar
let progress = document.querySelector('.page-progress-bar');

window.addEventListener('scroll', () => {
	let pageScroll = document.body.ScrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (pageScroll / height) * 100;
	progress.style.width = scrolled + '%';
});