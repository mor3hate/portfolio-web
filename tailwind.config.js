const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			gray: {
				600: '#303030',
				500: '#606060',
				400: '#202020',
				100: '#f3f3f3'
			},
			green: {
				DEFAULT: '#4DC57C'
			},
			violet: {
				DEFAULT: '#6F48F6'
			},
			yellow: {
				DEFAULT: '#f7df1e'
			}
		},
		extend: {
			transitionDuration: {
				DEFAULT: '200ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
				},
				'.image-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none'
				}
			})
		})
	]
}
