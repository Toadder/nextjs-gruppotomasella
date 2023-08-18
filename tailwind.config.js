const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true
	},
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			orange: '#f27935', 
			'light-grey': '#EEEEEE',
			grey: '#333333'
		},
		extend: {
			lineHeight: {
				DEFAULT: '1.25'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '200ms',
				400: '400ms'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			},
			boxShadow: {
				primary: '0px 5px 10px 4px rgba(0, 0, 0, 0.2)'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			animation: {
				fade: 'fade .2s ease-in-out',
			},
		}
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addComponents({
				'.btn-primary': {
					color: theme('colors.white'),
					backgroundColor: theme('colors.orange'),
					transition: 'background-color .3s ease 0s',
					borderRadius: '0.75rem',
					textAlign: 'center',
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: '#f06619'
					}
				},

				'.btn-secondary': {
					color: theme('colors.grey'),
					backgroundColor: theme('colors.white'),
					transition: 'background-color .3s ease 0s, color .3s ease 0s',
					borderRadius: '0.75rem',
					textAlign: 'center',
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: theme('colors.orange'),
						color: theme('colors.white')
					}
				}
			});

			addUtilities({
				'.container': {
					width: '100%',
					margin: '0 auto',
					paddingLeft: '15px',
					paddingRight: '15px',
					maxWidth: '81.25rem'
				},

				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},

				'.image-like-bg': {
					objectFit: 'cover',
					objectPosition: 'center',
					pointerEvents: 'none'
				},
			});
		})
	]
};
