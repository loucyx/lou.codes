import eslintJS from "@eslint/js";
import { ERROR, OFF, WARN } from "./levels.js";

/**
 * Core ESLint rules.
 * @see [ESLint core rules](https://eslint.org/docs/latest/rules)
 */
export default Object.freeze(
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		files: [
			"**/*.cjs",
			"**/*.cts",
			"**/*.js",
			"**/*.jsx",
			"**/*.mjs",
			"**/*.mts",
			"**/*.ts",
			"**/*.tsx",
		],
		rules: {
			...eslintJS.configs.recommended.rules,
			// Makes sure you return from mapping functions.
			"array-callback-return": ERROR,
			// Only use braces in arrow functions when needed.
			"arrow-body-style": [ERROR, "as-needed"],
			// Only use parens in arrow functions when needed.
			"arrow-parens": [ERROR, "as-needed"],
			// Handled by `@typescript-eslint/naming-convention`
			camelcase: OFF,
			// Enforce capitalization of the first letter on comments
			"capitalized-comments": [ERROR, "always"],
			// Enforce that class methods utilize `this`
			"class-methods-use-this": ERROR,
			// Handled by Prettier
			"comma-dangle": OFF,
			// Limit Cyclomatic Complexity
			complexity: ERROR,
			// Require return statements to either always or never specify values
			"consistent-return": ERROR,
			// Require following curly brace conventions
			curly: ERROR,
			// Require `default` case in `switch` statements
			"default-case": ERROR,
			// Enforce default clauses in switch statements to be last
			"default-case-last": ERROR,
			// Enforce default parameters to be last
			"default-param-last": ERROR,
			// Handled by `@typescript-eslint/dot-notation`
			"dot-notation": OFF,
			// Require newline at the end of files
			"eol-last": ERROR,
			// Require `===` and `!==`
			eqeqeq: ERROR,
			// Require grouped accessor pairs in object literals and classes
			"grouped-accessor-pairs": ERROR,
			// Require guarding for..in loops
			"guard-for-in": ERROR,
			// Disallow specified identifiers
			"id-blacklist": [
				ERROR,
				"cb", // Write "callback", is just a few more letters.
				"e", // What is this? Event? Error? Just type the entire word!
				"err", // Write "error", is just a few  more letters.
				"ev", // Write "event", is just a few more letters.
				"i", // Write "index", is just a few more letters.
				"opt", // Write "option", is just a few more letters.
				"opts", // Write "options", is just a few more letters.
			],
			// Enforce minimum (2) identifier lengths
			"id-length": [
				ERROR,
				{
					exceptions: [
						"_", // Allow `_` as a common "placeholder"
						"x", // Allow `x` for the x coordinate
						"y", // Allow `y` for the y coordinate
						"z", // Allow `z` for the z coordinate
					],
				},
			],
			// Handled by `@typescript-eslint/naming-convention`
			"id-match": OFF,
			// Handled by `@typescript-eslint/init-declarations`
			"init-declarations": OFF,
			// Enforce consistent linebreak style (unix)
			"linebreak-style": [ERROR, "unix"],
			// Enforce a maximum of 1 `class` per file
			"max-classes-per-file": [ERROR, 1],
			// Handled by Prettier (some lines can't be limited)
			"max-len": OFF,
			// Enforce a maximum file length
			"max-lines": [
				ERROR,
				// eslint-disable-next-line id-blacklist
				{ max: 300, skipBlankLines: true, skipComments: true },
			],
			// Try to keep it as low as possible, but don't enforce it.
			"max-params": OFF,
			// Require parentheses when invoking a constructor with no arguments
			"new-parens": ERROR,
			// Handled by Prettier
			"newline-per-chained-call": OFF,
			// Disallow use of `alert`, `confirm`, and `prompt`
			"no-alert": ERROR,
			// Warn about bitwise that might be wrong usages of logic operators
			"no-bitwise": WARN,
			// Disallow use of `caller` and `callee`
			"no-caller": ERROR,
			// Warn about `console` usages
			"no-console": WARN,
			// Disallow returning value in constructor
			"no-constructor-return": ERROR,
			// Disallow eval()
			"no-eval": ERROR,
			// Disallow extending of native objects (`prototype` of native)
			"no-extend-native": ERROR,
			// Disallow unnecessary function binding
			"no-extra-bind": ERROR,
			// Handled by TypeScript
			"no-extra-boolean-cast": OFF,
			// Disallow floating decimals (decimals without the `0`)
			"no-floating-decimal": ERROR,
			// Disallow the type conversion with shorter notations
			"no-implicit-coercion": ERROR,
			// Handled by `@typescript-eslint/no-implied-eval`
			"no-implied-eval": OFF,
			// Disallow assigning to imported bindings
			"no-import-assign": ERROR,
			// Disallow Unnecessary Nested Blocks
			"no-lone-blocks": ERROR,
			// Handled by `@typescript-eslint/no-loop-func`
			"no-loop-func": OFF,
			// Disallow multiple spaces (generally handled by Prettier)
			"no-multi-spaces": ERROR,
			// Disallow multiline strings (use template strings instead)
			"no-multi-str": ERROR,
			// Disallow multiple empty lines (generally handled by Prettier)
			"no-multiple-empty-lines": [ERROR, { max: 1 }],
			// Disallow function constructor (`new Function()`)
			"no-new-func": ERROR,
			// Disallow primitive wrapper instances (new String, new Boolean, etc.)
			"no-new-wrappers": ERROR,
			// Disallow reassignment of function parameters
			"no-param-reassign": ERROR,
			// Disallow the unary operators `++` and `--`
			"no-plusplus": ERROR,
			// Disallow use of `__proto__` (deprecated).
			"no-proto": ERROR,
			// Handled by `@typescript-eslint/no-redeclare`
			"no-redeclare": OFF,
			// Disallows unnecessary return await
			"no-return-await": ERROR,
			// Disallow self compare (comparing a value to itself)
			"no-self-compare": ERROR,
			// Handled by `@typescript-eslint/no-shadow`
			"no-shadow": OFF,
			// Disallow template literal placeholder syntax in regular strings
			"no-template-curly-in-string": ERROR,
			// Restrict what can be thrown as an exception
			"no-throw-literal": ERROR,
			// Disallow trailing whitespace at the end of lines
			"no-trailing-spaces": ERROR,
			// Handled by TypeScript
			"no-undef": OFF,
			// Disallow initializing to `undefined`
			"no-undef-init": ERROR,
			// Handled by Prettier
			"no-unexpected-multiline": OFF,
			// Disallow unmodified conditions of loops
			"no-unmodified-loop-condition": ERROR,
			// Disallow ternaries like: condition ? true : false
			"no-unneeded-ternary": ERROR,
			// Disallow loops with a body that allows only one iteration
			"no-unreachable-loop": ERROR,
			// Handled by `@typescript-eslint/no-unused-expressions`
			"no-unused-expressions": OFF,
			// Disallow unnecessary `.call()` and `.apply()`
			"no-useless-call": ERROR,
			// Disallow unnecessary concatenation of strings
			"no-useless-concat": ERROR,
			// Disallow redundant return statements
			"no-useless-return": ERROR,
			// Require let or const instead of var
			"no-var": ERROR,
			// Require object literal shorthand syntax
			"object-shorthand": ERROR,
			// Enforce variables to be declared separately in functions
			"one-var": [ERROR, "never"],
			// Require padding lines between statements
			"padding-line-between-statements": [
				ERROR,
				// Always a new line before a `return`
				{
					blankLine: "always",
					next: "return",
					prev: "*",
				},
				// Always add a new line after an `import`, `const`, `let` or `var`
				{
					blankLine: "always",
					next: "*",
					prev: ["import", "const", "let", "var"],
				},
				// Indifferent if followed by same type (`const`, `let` or `var`).
				{
					blankLine: "any",
					next: ["const", "let", "var"],
					prev: ["const", "let", "var"],
				},
				// Indifferent in `import` followed by other `import`
				{
					blankLine: "any",
					next: "import",
					prev: "import",
				},
				// Always a new line before an `export`
				{
					blankLine: "always",
					next: "export",
					prev: "*",
				},
				// Indifferent in `export` followed by other `export`
				{
					blankLine: "any",
					next: "export",
					prev: "export",
				},
			],
			// Suggest using const
			"prefer-const": ERROR,
			// Warn about the use of `Math.pow` in favor of the `**` operator
			"prefer-exponentiation-operator": WARN,
			// Suggest using named capture group in regular expressions
			"prefer-named-capture-group": WARN,
			// Prefer use of an object spread over `Object.assign`
			"prefer-object-spread": WARN,
			// Disallow use of the `RegExp` in favor of regular expression literals
			"prefer-regex-literals": ERROR,
			// Suggest using the rest parameters instead of `arguments`
			"prefer-rest-params": ERROR,
			// Suggest using spread syntax instead of `.apply()`
			"prefer-spread": ERROR,
			// Suggest using template literals instead of string concatenation.
			"prefer-template": ERROR,
			// Require quotes in props as needed (generally handled by Prettier)
			"quote-props": [ERROR, "as-needed"],
			// Require radix parameter in `parseInt`
			radix: ERROR,
			// Handled by `@typescript-eslint/require-await`
			"require-await": OFF, // Checked by TS
			// Enforce the use of `u` flag on `RegExp`
			"require-unicode-regexp": ERROR,
			// Require object keys to be sorted
			"sort-keys": ERROR,
			// Handled by `@typescript-eslint/space-before-function-paren`
			"space-before-function-paren": OFF,
			// Requires a whitespace (space or tab) beginning a comment
			"spaced-comment": ERROR,
			// Require IIFEs to be wrapped
			"wrap-iife": [ERROR, "inside"],
			// Disallow yoda conditions
			yoda: ERROR,
		},
	}),
);
