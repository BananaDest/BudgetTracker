/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0b2e46',

					secondary: '#024499',

					accent: '#C5A917',

					neutral: '#3c411e',

					'base-100': '#030b12',

					info: '#007ab7',

					success: '#36B477',

					warning: '#ffbb00',

					error: '#e94550'
				}
			}
		]
	},
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {},
		colors: {
			black: colors.black,
			white: colors.white,
			old_gold: {
				DEFAULT: '#C5A917',
				100: '#272105',
				200: '#4f4309',
				300: '#76640e',
				400: '#9d8612',
				500: '#c5a917',
				600: '#e7c82f',
				700: '#edd663',
				800: '#f3e397',
				900: '#f9f1cb'
			},
			jade: {
				DEFAULT: '#36B477',
				100: '#0b2418',
				200: '#164830',
				300: '#206c48',
				400: '#2b9160',
				500: '#36b477',
				600: '#55cc93',
				700: '#80d9ae',
				800: '#aae6c9',
				900: '#d5f2e4'
			},
			robin_egg_blue: {
				DEFAULT: '#2EBCC6',
				100: '#092628',
				200: '#134b4f',
				300: '#1c7177',
				400: '#25979f',
				500: '#2ebcc6',
				600: '#53ced7',
				700: '#7edae1',
				800: '#a9e6eb',
				900: '#d4f3f5'
			},
			cobalt_blue: {
				DEFAULT: '#024499',
				100: '#000d1e',
				200: '#011b3c',
				300: '#01285a',
				400: '#023579',
				500: '#024499',
				600: '#0362dd',
				700: '#2c86fc',
				800: '#72aefd',
				900: '#b9d7fe'
			},
			prussian_blue: {
				DEFAULT: '#0E3857',
				100: '#030b12',
				200: '#061723',
				300: '#092235',
				400: '#0b2e46',
				500: '#0e3857',
				600: '#1a679e',
				700: '#2c93dd',
				800: '#73b7e8',
				900: '#b9dbf4'
			},
			ivory: {
				DEFAULT: '#F1F3E5',
				100: '#3c411e',
				200: '#77823c',
				300: '#abb865',
				400: '#cfd6a6',
				500: '#f1f3e5',
				600: '#f4f6eb',
				700: '#f7f8f0',
				800: '#fafbf5',
				900: '#fcfdfa'
			}
		}
	},

	plugins: [require("@tailwindcss/typography"), require('daisyui')]
};
