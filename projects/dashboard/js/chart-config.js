const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
];
const data = {
	labels: labels,
	datasets: [{
	label: 'Portfolio',
	backgroundColor: 'rgb(255, 99, 132)',
	borderColor: 'rgb(255, 99, 132)',
	data: [0, 10, 5, 2, 20],
	}]
};

const config = {
	type: 'line',
	data,
	options: {
		// responsive: true,
		maintainAspectRatio: false
	}
};

var myChart = new Chart(
	document.querySelector('.my-chart'),	
	config
);