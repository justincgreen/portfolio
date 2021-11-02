window.addEventListener('DOMContentLoaded', () => {
	const badge = document.querySelectorAll('.badge');
	let allCategories = document.querySelector('.all-categories');
	let categoryOne = document.querySelector('.category-1');
	let categoryTwo = document.querySelector('.category-2');
	let photoCategoryOne = document.querySelector('.photo-category-1');
	let photoCategoryTwo = document.querySelector('.photo-category-2');
	
	badge.forEach((badgeBtn) => {
		badgeBtn.addEventListener('click', (e) => {
			
			if(e.target.classList.contains('all-categories')) {
				if(!e.target.classList.contains('badge-green')) {
					categoryOne.classList.remove('badge-green');
					categoryTwo.classList.remove('badge-green');
					allCategories.classList.add('badge-green');										
				}
				
				// Add active class to both photo categories so they will be displayed
				// remove any hidden classes that may have been previously added
				photoCategoryOne.classList.remove('hidden');
				photoCategoryTwo.classList.remove('hidden');
				photoCategoryOne.classList.add('active');
				photoCategoryTwo.classList.add('active');
			}
			
			if(e.target.classList.contains('category-1')) {
				allCategories.classList.remove('badge-green');
				categoryTwo.classList.remove('badge-green');
				categoryOne.classList.add('badge-green');
				
				// Add active class to photo category 1
				// remove any hidden class from photo category 1
				// remove any active class from photo category 2
				photoCategoryTwo.classList.remove('active');
				photoCategoryTwo.classList.add('hidden');
				photoCategoryOne.classList.remove('hidden');
				photoCategoryOne.classList.add('active');
			}
			
			if(e.target.classList.contains('category-2')) {
				allCategories.classList.remove('badge-green');
				categoryOne.classList.remove('badge-green');
				categoryTwo.classList.add('badge-green');
				
				// Add active class to photo category 2
				// remove any hidden class from photo category 2
				// remove any active class from photo category 1
				photoCategoryOne.classList.remove('active');
				photoCategoryTwo.classList.remove('hidden');
				photoCategoryOne.classList.add('hidden');
				photoCategoryTwo.classList.add('active');
			}	
			
		});
	});
});