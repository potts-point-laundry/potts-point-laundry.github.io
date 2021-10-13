module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "1rem",
				md: "1.5rem",
				lg: "4rem",
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen sm": {
						maxWidth: "640px",
					},
					"@screen md": {
						maxWidth: "768px",
					},
					"@screen lg": {
						maxWidth: "1280px",
					},
				},
			});
		},
	],
};
