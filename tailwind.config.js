/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		borderRadius: {
			none: '0',
			sm: '18px',
			DEFAULT: '18px',
			md: '18px',
			lg: '18px',
			xl: '18px',
			'2xl': '18px',
			'3xl': '18px',
			full: '18px',
			// Update the values of these classes
			'rounded-sm': '18px',
			'rounded': '18px',
			'rounded-lg': '18px',
			'rounded-full': '18px',
			'rounded-box': '18px',
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				winter: {
					...require("daisyui/src/colors/themes")["[data-theme=winter]"],
					"--rounded-box": "18px", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "18px", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "18px", // border radius rounded-badge utility class, used in badges and similar
					"--tab-radius": "18px", // border radius of tabs
				}
			},
			{
				night: {
					...require("daisyui/src/colors/themes")["[data-theme=night]"],
					"--rounded-box": "18px", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "18px", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "18px", // border radius rounded-badge utility class, used in badges and similar
					"--tab-radius": "18px", // border radius of tabs
				}
			},
		],
	},
}
