// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'adp-red': '#eb575c',
				'adp-primary': '#EA575C',
				'adp-primary-active': '#E62930',
				'adp-border': '#adadad',
				'adp-secondary': '#F5F5F5',
				'adp-tertiary': '#DDDDDD',
				'adp-text-tertiary': '#333333',
				'adp-quarternary': '#D9D9D9',
			},
			boxShadow: {
				adp: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)',
				adpInputFocus: 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
			},
			opacity: {
				65: '.65',
			},
		},
	},
	plugins: [],
};
