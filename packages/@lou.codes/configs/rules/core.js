import eslintJS from "@eslint/js";
import { freeze } from "../freeze.js";
import { ERROR, WARN } from "./levels.js";

/**
 * Core ESLint rules.
 * @see [ESLint core rules](https://eslint.org/docs/latest/rules)
 */
export const coreRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
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
			/**
			 * Mapping functions should always return a value explicitly.
			 */
			"array-callback-return": ERROR,
			/**
			 * Only use braces around an arrow function body when needed.
			 */
			"arrow-body-style": [ERROR, "as-needed"],
			/**
			 * Only use parens in arrow functions when needed.
			 */
			"arrow-parens": [ERROR, "as-needed"],
			/**
			 * Enforce capitalization of the first letter on comments (ignoring consecutive comments).
			 */
			"capitalized-comments": [
				ERROR,
				"always",
				{ ignoreConsecutiveComments: true },
			],
			/**
			 * Enforce that class methods utilize `this`. If not then it should be a function.
			 */
			"class-methods-use-this": ERROR,
			/**
			 * Limit cyclomatic complexity to a maximum of 20.
			 */
			complexity: [ERROR, 20],
			/**
			 * Require functions to either always return, or never.
			 */
			"consistent-return": ERROR,
			/**
			 * Require curly around all control statements.
			 */
			curly: ERROR,
			/**
			 * Require `default` case in `switch` statements.
			 */
			"default-case": ERROR,
			/**
			 * Enforce `default` clauses in switch statements to be last.
			 */
			"default-case-last": ERROR,
			/**
			 * Enforce `default` parameters to be last.
			 */
			"default-param-last": ERROR,
			/**
			 * Require newline at the end of files.
			 */
			"eol-last": ERROR,
			/**
			 * Require `===` and `!==` instead of `==` and `!=`.
			 */
			eqeqeq: ERROR,
			/**
			 * Require grouped accessor pairs (`get` and `set`) in object literals and classes.
			 */
			"grouped-accessor-pairs": ERROR,
			/**
			 * Require guarding `for..in` loops.
			 */
			"guard-for-in": ERROR,
			/**
			 * Disallow specified identifiers:
			 *
			 * -   `cb`: Write `callback`, is just a few more letters.
			 * -   `e`: What is this? Event? Error? Just type the entire word!
			 * -   `er`: Write `error`, is just a few  more letters.
			 * -   `err`: Write `error`, is just a few  more letters.
			 * -   `ev`: Write `event`, is just a few more letters.
			 * -   `i`: Write `index`, is just a few more letters.
			 * -   `opt`: Write `option`, is just a few more letters.
			 * -   `opts`: Write `options`, is just a few more letters.
			 */
			"id-blacklist": [
				ERROR,
				"cb",
				"e",
				"er",
				"err",
				"ev",
				"i",
				"opt",
				"opts",
			],
			/**
			 * Enforce minimum identifier length to be 2 characters long.
			 *
			 * Exceptions:
			 *
			 * -   `_`: Allow `_` as a common "placeholder".
			 * -   `x`: Allow `x` for the x coordinate.
			 * -   `y`: Allow `y` for the y coordinate.
			 * -   `z`: Allow `z` for the z coordinate.
			 */
			"id-length": [ERROR, { exceptions: ["_", "x", "y", "z"] }],
			/**
			 * Enforce a maximum of 1 `class` per file.
			 */
			"max-classes-per-file": [ERROR, 1],
			/**
			 * Enforce the maximum of a file length to 300 lines.
			 */
			"max-lines": [
				ERROR,
				{ max: 300, skipBlankLines: true, skipComments: true },
			],
			/**
			 * Max amount of parameters set to 3. More than that is too much.
			 */
			"max-params": [ERROR, 3],
			/**
			 * Require parentheses when invoking a constructor with no arguments.
			 */
			"new-parens": ERROR,
			/**
			 * Disallow use of `alert`, `confirm`, and `prompt`.
			 */
			"no-alert": ERROR,
			/**
			 * Warn about bitwise that might be wrong usages of logic operators.
			 */
			"no-bitwise": WARN,
			/**
			 * Disallow use of `caller` and `callee`.
			 */
			"no-caller": ERROR,
			/**
			 * Warn about `console` usages.
			 */
			"no-console": WARN,
			/**
			 * Disallow returning value in constructor.
			 */
			"no-constructor-return": ERROR,
			/**
			 * Disallow `eval`.
			 */
			"no-eval": ERROR,
			/**
			 * Disallow extending of native objects (`prototype` of native).
			 */
			"no-extend-native": ERROR,
			/**
			 * Disallow unnecessary function binding.
			 */
			"no-extra-bind": ERROR,
			/**
			 * Disallow floating decimals (decimals without the `0`).
			 */
			"no-floating-decimal": ERROR,
			/**
			 * Disallow the type conversion with short notation (too "clever").
			 */
			"no-implicit-coercion": ERROR,
			/**
			 * Disallow assigning to imported bindings.
			 */
			"no-import-assign": ERROR,
			/**
			 * Disallow unnecessary nested blocks.
			 */
			"no-lone-blocks": ERROR,
			/**
			 * Disallow multiple spaces.
			 */
			"no-multi-spaces": ERROR,
			/**
			 * Disallow multiline strings (use template strings instead).
			 */
			"no-multi-str": ERROR,
			/**
			 * Disallow multiple empty lines.
			 */
			"no-multiple-empty-lines": [ERROR, { max: 1 }],
			/**
			 * Disallow negated conditions.
			 */
			"no-negated-condition": ERROR,
			/**
			 * Disallow function constructor (use `class` instead).
			 */
			"no-new-func": ERROR,
			/**
			 * Disallow primitive wrapper instances (`new String()`, `new Boolean()`, etc.).
			 */
			"no-new-wrappers": ERROR,
			/**
			 * Disallow reassignment of function parameters.
			 */
			"no-param-reassign": ERROR,
			/**
			 * Disallow the unary operators `++` and `--`.
			 */
			"no-plusplus": ERROR,
			/**
			 * Disallow use of `__proto__` (unsafe and deprecated).
			 */
			"no-proto": ERROR,
			/**
			 * Disallows unnecessary return await.
			 */
			"no-return-await": ERROR,
			/**
			 * Disallow self compare (comparing a value to itself).
			 */
			"no-self-compare": ERROR,
			/**
			 * Disallow template literal placeholder syntax in regular strings.
			 */
			"no-template-curly-in-string": ERROR,
			/**
			 * Restrict what can be thrown as an exception.
			 */
			"no-throw-literal": ERROR,
			/**
			 * Disallow trailing whitespace at the end of lines.
			 */
			"no-trailing-spaces": ERROR,
			/**
			 * Disallow initializing to `undefined`. That is the default value already.
			 */
			"no-undef-init": ERROR,
			/**
			 * Disallow unmodified conditions of loops.
			 */
			"no-unmodified-loop-condition": ERROR,
			/**
			 * Disallow unnecessary ternaries like: `condition ? true : false`.
			 */
			"no-unneeded-ternary": ERROR,
			/**
			 * Disallow loops with a body that allows only one iteration.
			 */
			"no-unreachable-loop": ERROR,
			/**
			 * Disallow unnecessary `.call()` and `.apply()`.
			 */
			"no-useless-call": ERROR,
			/**
			 * Disallow unnecessary concatenation of strings.
			 */
			"no-useless-concat": ERROR,
			/**
			 * Disallow redundant return statements.
			 */
			"no-useless-return": ERROR,
			/**
			 * Require `let` or `const` instead of `var`.
			 */
			"no-var": ERROR,
			/**
			 * Require object literal shorthand syntax.
			 */
			"object-shorthand": ERROR,
			/**
			 * Enforce variables to be declared separately.
			 */
			"one-var": [ERROR, "never"],
			/**
			 * Require padding lines between statements:
			 *
			 * -   Always a new line before a `return` statement.
			 * -   Always a new line after an `import`, `const`, `let` or `var` statement.
			 * -   Indifferent if followed by same type (`const`, `let` or `var`).
			 * -   Indifferent in `import` followed by other `import`.
			 * -   Always a new line before an `export` statement.
			 * -   Indifferent in `export` followed by other `export`.
			 */
			"padding-line-between-statements": [
				ERROR,
				{
					blankLine: "always",
					next: "return",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: ["import", "const", "let", "var"],
				},
				{
					blankLine: "any",
					next: ["const", "let", "var"],
					prev: ["const", "let", "var"],
				},
				{
					blankLine: "any",
					next: "import",
					prev: "import",
				},
				{
					blankLine: "always",
					next: "export",
					prev: "*",
				},
				{
					blankLine: "any",
					next: "export",
					prev: "export",
				},
			],
			/**
			 * Suggest using `const` over `let`.
			 */
			"prefer-const": ERROR,
			/**
			 * Warn about the use of `Math.pow` in favor of the `**` operator.
			 */
			"prefer-exponentiation-operator": WARN,
			/**
			 * Suggest using named capture group in regular expressions.
			 */
			"prefer-named-capture-group": WARN,
			/**
			 * Prefer use of an object spread over `Object.assign`.
			 */
			"prefer-object-spread": WARN,
			/**
			 * Disallow use of the `RegExp` in favor of regular expression literals.
			 */
			"prefer-regex-literals": ERROR,
			/**
			 * Use the rest parameters instead of `arguments`.
			 */
			"prefer-rest-params": ERROR,
			/**
			 * Use spread syntax instead of `.apply()`.
			 */
			"prefer-spread": ERROR,
			/**
			 * Use template literals instead of string concatenation.
			 */
			"prefer-template": ERROR,
			/**
			 * Require quotes in props as needed.
			 */
			"quote-props": [ERROR, "as-needed"],
			/**
			 * Require radix parameter in `parseInt`.
			 */
			radix: ERROR,
			/**
			 * Enforce the use of `u` flag on `RegExp`.
			 */
			"require-unicode-regexp": ERROR,
			/**
			 * Require object keys to be sorted.
			 */
			"sort-keys": [ERROR, "asc", { natural: true }],
			/**
			 * Requires a whitespace (space or tab) beginning a comment.
			 */
			"spaced-comment": ERROR,
			/**
			 * Require IIFEs to be wrapped.
			 */
			"wrap-iife": [ERROR, "inside"],
			/**
			 * Disallow yoda conditions.
			 */
			yoda: ERROR,
		},
	}),
);
