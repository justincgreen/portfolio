Particles.init({
	selector: '.particle-bg',
	color: ['#fff', '#29AB87'],
	maxParticles: 200,
	speed: 1,
	responsive: [
		{
			breakpoint: 768,
			options: {
				maxParticles: 100
			}
		}
	]
});	