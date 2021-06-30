const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelectorAll('.btn-close-modal');

const notifications = document.querySelector('.notifications-link');
const help = document.querySelector('.help-link');
const settings = document.querySelector('.settings-link');

const notificationPanel = document.querySelector('.notification-panel');
const helpPanel = document.querySelector('.help-panel');
const settingsPanel = document.querySelector('.settings-panel');

notifications.addEventListener('click', () => {
	modalContent.classList.add('active');
	notificationPanel.classList.add('active');
	helpPanel.classList.remove('active');
	settingsPanel.classList.remove('active');
});

help.addEventListener('click', () => {
	modalContent.classList.add('active');
	helpPanel.classList.add('active');
	notificationPanel.classList.remove('active');	
	settingsPanel.classList.remove('active');
});

settings.addEventListener('click', () => {
	modalContent.classList.add('active');
	settingsPanel.classList.add('active');
	notificationPanel.classList.remove('active');	
	helpPanel.classList.remove('active');
});

closeModal.forEach((button) => {
	button.addEventListener('click', () => {
		modalContent.classList.remove('active');
	});
});