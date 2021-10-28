Particles.init({
	selector: '.particle-bg',
	color: ['#fff', '#29AB87'],
	maxParticles: 200,
	speed: 1,
	responsive: [
		{
			breakpoint: 768,
			options: {
				maxParticles: 0
			}
		},
		{
			breakpoint: 425,
			options: {
				maxParticles: 100
			}
		},
		{
			breakpoint: 375,
			options: {
				maxParticles: 100
			}
		},
		{
			breakpoint: 320,
			options: {
				maxParticles: 100
			}
		}
	]
});	