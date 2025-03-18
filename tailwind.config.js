module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './node_modules/flowbite/**/*.js'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)',
				'linear-gradient': 'linear-gradient(90deg, white, rgba(10,116,218,0))',
			},
			keyframes: {
				'carousel-keyframe': {
					'0%': { transform: 'translateX(1000%)' },
					'100%': { transform: 'translateX(-1000%)' },
				},
			},
			animation: {
				'carousel-item': 'carousel-keyframe 20s linear infinite',
			},
		},
	},
	variants: {},
	plugins: [],
}
