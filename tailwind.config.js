module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'radial-gradient':
					'radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)',
				'linear-gradient': 'linear-gradient(90deg, white, rgba(10,116,218,0))',
			},
			keyframes: {
				'carousel-keyframe': {
					'0%': { transform: 'translateX(1000%)' },
					'100%': { transform: 'translateX(-1000%)' },
				},
				'fade-in-keyframe': {
					"0%": { opacity: 0.7, transform: "translateY(0px) scale(0.99)" },
					"100%": { opacity: 1, transform: "translateY(0px) scale(1)" },
				},
			},
			animation: {
				'carousel-item': 'carousel-keyframe 30s linear infinite',
				'fade': "fade-in-keyframe 1s ease-out forwards",
			},
			screens: {
				'min-1045': '1045px',
				'min-445': '445px',
			},
		},
	},
	variants: {},
	plugins: [],
};
