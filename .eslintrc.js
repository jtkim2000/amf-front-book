module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'eslint-config-prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: 'off',
		'linebreak-style': 0,
		// quotes: ['warn', 'single'],
		quotes: 'off',
		semi: ['error', 'always'],
		'react/prop-types': 'off'
	}
};
