/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(15rem,1fr))",
			},
			gridColumn: {
				"wider-p": "span 2",
			},
			fontFamily: {
				sans: ["var(--font-GoudyStM)"],
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-30deg)" },
					"50%": { transform: "rotate(30deg)" },
				},
			},
		},
	},
	plugins: [],
};
