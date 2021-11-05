module.exports = {
	parser: "babel-eslint",

  extends: [
    "standard",
    "standard-jsx",
    "standard-react"
  ],

  plugins: [
    "jest",
		"react-hooks"
  ],

	env: {
		browser: true,
		es6: true,
		"jest/globals": true,
		node: true
	},

	globals: {
		expect: true,
		browser: true,
		global: true
	},

	settings: {
		// Preact CLI provides these defaults
		targets: ['last 2 versions'],
		polyfills: ['fetch', 'Promise'],
		react: {
			// eslint-plugin-preact interprets this as "h.createElement",
			// however we only care about marking h() as being a used variable.
			pragma: 'h',
			// We use "react 16.0" to avoid pushing folks to UNSAFE_ methods.
			version: '16.0'
		}
	},

	rules: {
		/**
		 * Preact / JSX rules
		 */
		'react/no-deprecated': 2,
		'react/react-in-jsx-scope': 0, // handled this automatically
		'react/display-name': [1, { ignoreTranspilerName: false }],
		'react/jsx-no-bind': [1, {
			ignoreRefs: true,
			allowFunctions: true,
			allowArrowFunctions: true
		}],
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-target-blank': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
		'react/jsx-uses-react': 2, // debatable
		'react/jsx-uses-vars': 2,
		'react/jsx-key': [2, { checkFragmentShorthand: true }],
		'react/self-closing-comp': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 1,
		'react/require-render-return': 2,
		'react/no-danger': 1,
		// Legacy APIs not supported in Preact:
		'react/no-did-mount-set-state': 2,
		'react/no-did-update-set-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-string-refs': 2,

		/**
		 * Hooks
		 */
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,

    // above is from eslint-config-preact
    // below is our own modifications
    'react/prop-types': 0,
    'react/jsx-handler-names': 0
	}
}