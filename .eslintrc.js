/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/unbound-method */
const { resolve } = require("path")

module.exports = {
	root: true,
	parserOptions: {
		// Needed to make the parser take into account 'vue' files
		extraFileExtensions: [".vue"],
		parser: "@typescript-eslint/parser",
		project: [
			resolve(__dirname, "./tsconfig.json"),
			resolve(__dirname, "./tsconfig.eslint.json")
		],
		tsconfigRootDir: __dirname,
		ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
		sourceType: "module" // Allows for the use of imports
	},

	env: {
		browser: true
	},

	// Rules order is important, please avoid shuffling them
	extends: [
		// ESLint typescript rules
		"plugin:@typescript-eslint/recommended",
		// consider disabling this class of rules if linting takes too long
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		// Uncomment any of the lines below to choose desired strictness,
		// but leave only one uncommented!
		// See https://eslint.vuejs.org/rules/#available-rules
		// "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
		// "plugin:vue/vue3-strongly-recommended", // Priority B: Strongly Recommended (Improving Readability)
		"plugin:vue/vue3-recommended" // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
	],

	plugins: [
		// required to apply rules which need type information
		"@typescript-eslint",
		"unused-imports",

		// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
		// required to lint *.vue files
		"vue"
	],

	globals: {
		process: "readonly",
		document: "readonly",
		navigator: "readonly",
		window: "readonly"
	},

	// add your custom rules here
	rules: {
		// Typescript Rules
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-call": "off",

		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
		"@typescript-eslint/member-delimiter-style": ["error", { multiline: { delimiter: "none" } }],
		"@typescript-eslint/type-annotation-spacing": ["error", {}],
		"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports", disallowTypeAnnotations: true }],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/prefer-ts-expect-error": "error",

		// General Rules
		"prefer-promise-reject-errors": "off",
		"func-style": ["error", "declaration"],
		"comma-dangle": ["warn", {
			objects: "never",
			arrays: "never",
			imports: "never",
			exports: "never",
			functions: "never"
		}],
		"object-shorthand": ["warn", "properties"],
		"array-callback-return": ["error", {
			allowImplicit: false,
			checkForEach: false
		}],
		camelcase: ["error", {
			allow: ["^UNSAFE_"],
			properties: "never",
			ignoreGlobals: true
		}],
		"eol-last": "error",
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never", { enforceForClassMembers: true }],
		"dot-location": ["error", "property"],
		"generator-star-spacing": ["error", { before: true, after: true }],
		"key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
		"multiline-ternary": ["error", "always-multiline"],
		"new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-condition": ["error", { checkLoops: false }],
		"no-control-regex": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-useless-backreference": "error",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": ["error", "functions"],
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-labels": ["error", { allowLoop: false, allowSwitch: false }],
		"no-lone-blocks": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-prototype-builtins": "error",
		"no-useless-catch": "error",
		"no-mixed-operators": ["error", {
			groups: [
				["==", "!=", "===", "!==", ">", ">=", "<", "<="],
				["&&", "||", "?:"],
				["in", "instanceof"]
			],
			allowSamePrecedence: true
		}],
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 0 }],
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-redeclare": ["error", { builtinGlobals: false }],
		"no-regex-spaces": "error",
		"no-return-assign": ["error", "except-parens"],
		"no-self-assign": ["error", { props: true }],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "warn",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unused-expressions": ["error", {
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true
		}],
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
		],
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"object-curly-newline": ["error", { multiline: true, consistent: true }],
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
		"one-var": ["error", { initialized: "never" }],
		"operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before", "|>": "before" } }],
		"padded-blocks": ["error", { blocks: "never", switches: "never", classes: "never" }],
		"prefer-const": ["error", { destructuring: "all" }],
		"prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
		"quote-props": ["error", "as-needed"],
		quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
		"rest-spread-spacing": ["error", "never"],
		semi: ["error", "never"],
		"semi-spacing": ["error", { before: false, after: true }],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", { words: true, nonwords: false }],
		"spaced-comment": ["error", "always", {
			line: { markers: ["*package", "!", "/", ",", "="] },
			block: { balanced: true, markers: ["*package", "!", ",", ":", "::", "flow-include"], exceptions: ["*"] }
		}],
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": ["error", "never"],
		"use-isnan": ["error", {
			enforceForSwitchCase: true,
			enforceForIndexOf: true
		}],
		"valid-typeof": ["error", { requireStringLiterals: true }],
		"yield-star-spacing": ["error", "both"],
		yoda: ["error", "never"],

		// Vue Lints
		"vue/no-v-html": "off",
		"vue/v-on-event-hyphenation": "off",
		"vue/require-prop-types": "off",
		"vue/multi-word-component-names": "off",
		"vue/prefer-import-from-vue": "off",
		"vue/multiline-html-element-content-newline": "error",
		"vue/html-closing-bracket-newline": ["error", {
			singleline: "never",
			multiline: "never"
		}],
		"vue/html-indent": ["error", 2, {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: false,
			ignores: []
		}],
		"vue/attribute-hyphenation": "off",
		"vue/max-attributes-per-line": ["error", {
			singleline: {
				max: 1
			},
			multiline: {
				max: 1
			}
		}],
		"vue/block-tag-newline": ["error", {
			singleline: "always",
			multiline: "always"
		}],

		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"vue/component-options-name-casing": ["error", "PascalCase"],
		"vue/custom-event-name-casing": ["error", "camelCase"],
		"vue/no-restricted-v-bind": ["error", "/^v-/"],
		"vue/no-useless-v-bind": "error",
		"vue/no-v-text-v-html-on-component": "error",
		"vue/padding-line-between-blocks": ["error", "always"],
		"vue/prefer-separate-static-class": "error",
		"vue/template-curly-spacing": "error",
		"vue/array-bracket-spacing": ["error", "never"],
		"vue/arrow-spacing": ["error", { before: true, after: true }],
		"vue/block-spacing": ["error", "always"],
		"vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
		"vue/comma-dangle": ["error", "always-multiline"],
		"vue/comma-spacing": ["error", { before: false, after: true }],
		"vue/comma-style": ["error", "last"],
		"vue/dot-location": ["error", "property"],
		"vue/dot-notation": ["error", { allowKeywords: true }],
		"vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"vue/keyword-spacing": ["error", { before: true, after: true }],
		"vue/no-constant-condition": "warn",
		"vue/no-empty-pattern": "error",
		"vue/no-extra-parens": ["error", "functions"],
		"vue/no-irregular-whitespace": "error",
		"vue/no-loss-of-precision": "error",
		"vue/no-restricted-syntax": [
			"error",
			"DebuggerStatement",
			"LabeledStatement",
			"WithStatement"
		],
		"vue/no-sparse-arrays": "error",
		"vue/object-curly-newline": ["error", { multiline: true, consistent: true }],
		"vue/object-curly-spacing": ["error", "always"],
		"vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
		"vue/object-shorthand": [
			"error",
			"always",
			{
				ignoreConstructors: false,
				avoidQuotes: true
			}
		],
		"vue/operator-linebreak": ["error", "before"],
		"vue/prefer-template": "error",
		"vue/quote-props": ["error", "consistent-as-needed"],
		"vue/space-in-parens": ["error", "never"],
		"vue/space-infix-ops": "error",
		"vue/space-unary-ops": ["error", { words: true, nonwords: false }],
		"vue/component-tags-order": ["warn", {
			order: ["script", "template", "style"]
		}],

		// allow debugger during development only
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
}
