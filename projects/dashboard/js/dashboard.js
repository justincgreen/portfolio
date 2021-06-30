const sidebar = document.querySelector('.sidebar-menu');
const expandBtn = document.querySelector('.btn-expand-toolbar');
const mainContent = document.querySelector('.main-content');
const toolbarLink = document.querySelectorAll('.toolbar-link');
const toolbarLabel = document.querySelectorAll('.toolbar-link-label');

// Sidebar Menu Behavior
expandBtn.addEventListener('click', () => {
	sidebar.classList.toggle('expand');
	mainContent.classList.toggle('active');
		
	if(sidebar.classList.contains('expand')) {
		expandBtn.innerHTML = '<';	
		
		toolbarLabel.forEach((label) => {
			label.classList.add('active');
		});			
	}else {
		expandBtn.innerHTML = '>';
		
		toolbarLabel.forEach((label) => {
			label.classList.remove('active');
		});	
	}
});

const menuItem1 = document.querySelector('.toolbar-link-1');
const menuItem2 = document.querySelector('.toolbar-link-2');
const menuItem3 = document.querySelector('.toolbar-link-3');
const menuItem4 = document.querySelector('.toolbar-link-4');

const portfolioContent = document.querySelector('.portfolio-content');
const accountContent = document.querySelector('.account-content');
const sendContent = document.querySelector('.send-content');
const receiveContent = document.querySelector('.receive-content');

menuItem1.addEventListener('click', () => {
	portfolioContent.style.display = 'block';
	accountContent.style.display = 'none';
	sendContent.style.display = 'none';
	receiveContent.style.display = 'none';
	menuItem1.classList.add('active');
	menuItem2.classList.remove('active');
	menuItem3.classList.remove('active');
	menuItem4.classList.remove('active');
});

menuItem2.addEventListener('click', () => {
	accountContent.style.display = 'block';
	portfolioContent.style.display = 'none';
	sendContent.style.display = 'none';
	receiveContent.style.display = 'none';
	menuItem1.classList.remove('active');
	menuItem2.classList.add('active');
	menuItem3.classList.remove('active');
	menuItem4.classList.remove('active');
});

menuItem3.addEventListener('click', () => {
	sendContent.style.display = 'block';
	portfolioContent.style.display = 'none';
	accountContent.style.display = 'none';	
	receiveContent.style.display = 'none';
	menuItem1.classList.remove('active');
	menuItem2.classList.remove('active');
	menuItem3.classList.add('active');
	menuItem4.classList.remove('active');
});

menuItem4.addEventListener('click', () => {
	receiveContent.style.display = 'block';
	portfolioContent.style.display = 'none';
	accountContent.style.display = 'none';	
	sendContent.style.display = 'none';
	menuItem1.classList.remove('active');
	menuItem2.classList.remove('active');
	menuItem3.classList.remove('active');
	menuItem4.classList.add('active');
});

// Generate Random Balance Amount
const balanceValues = ['$500,000', '$1,000,000', '$300,000', '$999,999'];
const balanceAmount = document.querySelector('.balance-amount');

const getRandomBalance = () => {
	return Math.floor(Math.random() * balanceValues.length);
}

window.addEventListener('load', (event) => {
	balanceAmount.innerHTML = balanceValues[getRandomBalance()];
});


// Behavior for Select list in Receive section
const currency = document.querySelector('.select-currency');
const btcAddress = document.querySelector('.btc-address');
const ethAddress = document.querySelector('.eth-address');
const bnbAddress = document.querySelector('.bnb-address');

currency.onchange = function() {
	if(this.value === 'btc') {
		btcAddress.classList.add('active');
		ethAddress.classList.remove('active');
		bnbAddress.classList.remove('active');
	}
	if(this.value === 'eth') {
		ethAddress.classList.add('active');
		btcAddress.classList.remove('active');
		bnbAddress.classList.remove('active');
	}
	if(this.value === 'bnb') {
		bnbAddress.classList.add('active');
		btcAddress.classList.remove('active');
		ethAddress.classList.remove('active');
	}
}

// Copy to clipboard button
const copyAddressBtn = document.querySelector('.copy-to-clipboard');
const currencyAddress1 = document.querySelector('.currency-address-1');
const currencyAddress2 = document.querySelector('.currency-address-2');
const currencyAddress3 = document.querySelector('.currency-address-3');

copyAddressBtn.addEventListener('click', () => {
	event.preventDefault();
	// Check if BTC address has active class
	if(btcAddress.classList.contains('active')) {
		currencyAddress1.select();
		currencyAddress1.setSelectionRange(0, 99999)
		document.execCommand("copy");
		alert("Copied BTC address: " + currencyAddress1.value);	
	}	
	
	// Check if ETH address has active class
	if(ethAddress.classList.contains('active')) {
		currencyAddress2.select();
		currencyAddress2.setSelectionRange(0, 99999)
		document.execCommand("copy");
		alert("Copied ETH address: " + currencyAddress2.value);	
	}	
	
	// Check if BNB address has active class
	if(bnbAddress.classList.contains('active')) {
		currencyAddress3.select();
		currencyAddress3.setSelectionRange(0, 99999)
		document.execCommand("copy");
		alert("Copied BNB address: " + currencyAddress3.value);	
	}	
});
