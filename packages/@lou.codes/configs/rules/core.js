import eslintJS from "@eslint/js";
import { ERROR, WARN } from "./levels.js";

/**
 * Core ESLint rules.
 * @see [ESLint core rules](https://eslint.org/docs/latest/rules)
 */
export const coreRules =
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
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const mapped = [1, 2, 3].map(item => {
			 * 	console.log(item * 2);
			 * });
			 *
			 * // ✅ Correct
			 * const mapped = [1, 2, 3].map(item => item * 2);
			 * ```
			 * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
			 */
			"array-callback-return": ERROR,

			/**
			 * Only use braces around an arrow function body when needed.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const arrow = () => {
			 * 	return 1;
			 * };
			 *
			 * // ✅ Correct
			 * const arrow = () => 1;
			 * ```
			 * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
			 */
			"arrow-body-style": ERROR,

			/**
			 * Only use parens in arrow functions when needed.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const arrow = (value) => value * 2;
			 *
			 * // ✅ Correct
			 * const arrow = value => value * 2;
			 * const add = (value1, value2) => (value1 + value2);
			 * ```
			 * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
			 */
			"arrow-parens": [ERROR, "as-needed"],

			/**
			 * Enforce capitalization of the first letter on comments (ignoring consecutive comments).
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * // this is a comment
			 *
			 * // ✅ Correct
			 * // This is a comment
			 * ```
			 * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
			 */
			"capitalized-comments": [
				ERROR,
				"always",
				{ ignoreConsecutiveComments: true },
			],

			/**
			 * Enforce that class methods utilize `this`. If not then it should be a function.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * class Example {
			 * 	private message = "Hello, world!";
			 * 	public log() {
			 * 		console.log(this.message);
			 * 	}
			 * 	public goodbye() {
			 * 		console.log("Goodbye, world!");
			 * 	}
			 * }
			 *
			 * // ✅ Correct
			 * const goodbye = () => console.log("Goodbye, world!");
			 *
			 * class Example {
			 * 	private message = "Hello, world!";
			 * 	public log() {
			 * 		console.log(this.message);
			 * 	}
			 * }
			 * ```
			 * @see [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
			 */
			"class-methods-use-this": ERROR,

			/**
			 * Limit cyclomatic complexity to a maximum of 20.
			 *
			 * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
			 */
			complexity: [ERROR, 20],

			/**
			 * Require curly around all control statements.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * if (true) console.log("Hello, world!");
			 *
			 * // ✅ Correct
			 * if (true) {
			 * 	console.log("Hello, world!");
			 * }
			 * ```
			 * @see [curly](https://eslint.org/docs/latest/rules/curly)
			 */
			curly: ERROR,

			/**
			 * Require `default` case in `switch` statements.
			 *
			 * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
			 */
			"default-case": ERROR,

			/**
			 * Enforce `default` clauses in switch statements to be last.
			 *
			 * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
			 */
			"default-case-last": ERROR,

			/**
			 * Enforce `default` parameters to be last.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = (a = 1, b) => a + b;
			 *
			 * // ✅ Correct
			 * const example = (b, a = 1) => a + b;
			 * ```
			 * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
			 */
			"default-param-last": ERROR,

			/**
			 * Require `===` and `!==` instead of `==` and `!=`.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * if (a == b) // …
			 * if (a != b) // …
			 *
			 * // ✅ Correct
			 * if (a === b) // …
			 * if (a !== b) // …
			 * ```
			 * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
			 */
			eqeqeq: ERROR,

			/**
			 * Require grouped accessor pairs (`get` and `set`) in object literals and classes.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = {
			 * 	get value() { return this._value; },
			 * 	get other() { return this._other; },
			 * 	set value(value) { this._value = value; },
			 * 	set other(value) { this._other = value; },
			 * };
			 *
			 * // ✅ Correct
			 * const example = {
			 * 	get value() { return this._value; },
			 * 	set value(value) { this._value = value; },
			 * 	get other() { return this._other; },
			 * 	set other(value) { this._other = value; },
			 * };
			 * ```
			 * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
			 */
			"grouped-accessor-pairs": ERROR,

			/**
			 * If you really want to use `for..in` for some reason, guard it.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * for (const key in object) {
			 * 	console.log(key);
			 * }
			 *
			 * // ✅ Correct
			 * for (const key in object) {
			 * 	if (Object.hasOwn(object, key)) {
			 * 		console.log(key);
			 * 	}
			 * }
			 * ```
			 * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
			 */
			"guard-for-in": ERROR,

			/**
			 * Disallow specified identifiers:
			 *
			 * -   `auth`: Write `authentication` (`authorization`?), is just a few more letters.
			 * -   `btn`: Write `button`, is just a few more letters.
			 * -   `cb`: Write `callback`, is just a few more letters.
			 * -   `char`: Write `character`, is just a few more letters.
			 * -   `desc`: Write `description`, is just a few more letters.
			 * -   `dest`: Write `destination`, is just a few more letters.
			 * -   `dir`: Write `directory` (`direction`?), is just a few more letters.
			 * -   `e`: What is this? Event? Error? Just type the entire word!
			 * -   `elem`: Write `element`, is just a few more letters.
			 * -   `er`: Write `error`, is just a few  more letters.
			 * -   `err`: Write `error`, is just a few  more letters.
			 * -   `ev`: Write `event`, is just a few more letters.
			 * -   `evt`: Write `event`, is just a few more letters.
			 * -   `fn`: Write `callback`, is just a few more letters.
			 * -   `i`: Write `index`, is just a few more letters.
			 * -   `img`: Write `image`, is just a few more letters.
			 * -   `obj`: Write `object`, is just a few more letters.
			 * -   `opt`: Write `option`, is just a few more letters.
			 * -   `opts`: Write `options`, is just a few more letters.
			 * -   `param`: Write `parameter`, is just a few more letters.
			 * -   `params`: Write `parameters`, is just a few more letters.
			 * -   `prev`: Write `previous`, is just a few more letters.
			 * -   `prop`: Write `property`, is just a few more letters.
			 * -   `props`: Write `properties`, is just a few more letters.
			 * -   `req`: Write `request`, is just a few more letters.
			 * -   `res`: Write `response` (`resource`?), is just a few more letters.
			 * -   `src`: Write `source`, is just a few more letters.
			 * -   `str`: Write `string`, is just a few more letters.
			 * -   `temp`: Write `temporary`, is just a few more letters.
			 * -   `tmp`: Write `temporary`, is just a few more letters.
			 * -   `val`: Write `value`, is just a few more letters.
			 *
			 * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
			 */
			"id-denylist": [
				ERROR,
				"auth",
				"btn",
				"cb",
				"char",
				"desc",
				"dest",
				"dir",
				"e",
				"elem",
				"er",
				"err",
				"ev",
				"evt",
				"fn",
				"i",
				"img",
				"obj",
				"opt",
				"opts",
				"param",
				"params",
				"prev",
				"prop",
				"props",
				"req",
				"res",
				"src",
				"str",
				"temp",
				"tmp",
				"val",
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
			 *
			 * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
			 */
			"id-length": [ERROR, { exceptions: ["_", "x", "y", "z"] }],

			/**
			 * Enforce a maximum of 1 `class` per file.
			 *
			 * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
			 */
			"max-classes-per-file": [ERROR, 1],

			/**
			 * Enforce the maximum of a file length to 300 lines. Need more? Move it to another file.
			 *
			 * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
			 */
			"max-lines": [
				ERROR,
				{ max: 300, skipBlankLines: true, skipComments: true },
			],

			/**
			 * Max amount of parameters set to 3. More than that is too much.
			 *
			 * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
			 */
			"max-params": [ERROR, 3],

			/**
			 * Require parentheses when invoking a constructor with no arguments.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = new Example;
			 *
			 * // ✅ Correct
			 * const example = new Example();
			 * ```
			 * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
			 */
			"new-parens": ERROR,

			/**
			 * Disallow use of `alert`, `confirm`, and `prompt`.
			 *
			 * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
			 */
			"no-alert": ERROR,

			/**
			 * Warn about bitwise that might be wrong usages of logic operators.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = 1 & 2;
			 * const example = 1 | 2;
			 *
			 * // ✅ Correct
			 * const example = 1 && 2;
			 * const example = 1 || 2;
			 * ```
			 * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
			 */
			"no-bitwise": WARN,

			/**
			 * Disallow use of `caller` and `callee`.
			 *
			 * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
			 */
			"no-caller": ERROR,

			/**
			 * Warn about `console` usages.
			 *
			 * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
			 */
			"no-console": WARN,

			/**
			 * Disallow returning value in constructor.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * class Example {
			 * 	constructor() {
			 * 		return "Hello, world!";
			 * 	}
			 * }
			 * ```
			 * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
			 */
			"no-constructor-return": ERROR,

			/**
			 * Disallow `eval`.
			 *
			 * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
			 */
			"no-eval": ERROR,

			/**
			 * Disallow extending of native objects (`prototype` of native).
			 *
			 * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
			 */
			"no-extend-native": ERROR,

			/**
			 * Disallow unnecessary function binding.
			 *
			 * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
			 */
			"no-extra-bind": ERROR,

			/**
			 * Disallow floating decimals (decimals without the `0`).
			 *
			 * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
			 */
			"no-floating-decimal": ERROR,

			/**
			 * Disallow the type conversion with short notation (too "clever").
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const boolean = !!value;
			 * const number = +value;
			 *
			 * // ✅ Correct
			 * const boolean = Boolean(value);
			 * const number = parseFloat(value);
			 * ```
			 * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
			 */
			"no-implicit-coercion": ERROR,

			/**
			 * Disallow assigning to imported bindings.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * import { value } from "./module.js";
			 *
			 * value = 1;
			 * ```
			 * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
			 */
			"no-import-assign": ERROR,

			/**
			 * Disallow unnecessary nested blocks.
			 *
			 * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
			 */
			"no-lone-blocks": ERROR,

			/**
			 * Disallow multiple spaces.
			 *
			 * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
			 */
			"no-multi-spaces": ERROR,

			/**
			 * Disallow multiline strings (use template strings instead).
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const string = "Hello, \
			 * 	world!";
			 *
			 * // ✅ Correct
			 * const string = `Hello,
			 * 	world!`;
			 * ```
			 * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
			 */
			"no-multi-str": ERROR,

			/**
			 * Disallow multiple empty lines.
			 *
			 * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
			 */
			"no-multiple-empty-lines": [ERROR, { max: 1 }],

			/**
			 * Disallow negated conditions.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * !a ? b : c;
			 *
			 * // ✅ Correct
			 * a ? c : b;
			 * ```
			 * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
			 */
			"no-negated-condition": ERROR,

			/**
			 * Disallow `Function` constructor (write the function instead).
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const Example = new Function("a", "b", "return a + b");
			 *
			 * // ✅ Correct
			 * const Example = (a, b) => a + b;
			 * ```
			 * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
			 */
			"no-new-func": ERROR,

			/**
			 * Disallow primitive wrapper instances (`new String()`, `new Boolean()`, etc.).
			 *
			 * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
			 */
			"no-new-wrappers": ERROR,

			/**
			 * Disallow reassignment of function parameters.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = (value) => {
			 * 	value = value * 2;
			 * };
			 *
			 * // ✅ Correct
			 * const example = (value) => {
			 * 	const newValue = value * 2;
			 * };
			 * ```
			 * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
			 */
			"no-param-reassign": ERROR,

			/**
			 * Disallow the unary operators `++` and `--`.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * let a = 0;
			 * a++;
			 *
			 * // ✅ Correct
			 * let a = 0;
			 * a += 1;
			 * ```
			 * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
			 */
			"no-plusplus": ERROR,

			/**
			 * Disallow use of `__proto__` (unsafe and deprecated).
			 *
			 * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
			 */
			"no-proto": ERROR,

			/**
			 * Disallows unnecessary return await.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = async () => {
			 * 	return await Promise.resolve("Hello, world!");
			 * };
			 *
			 * // ✅ Correct
			 * const example = async () => {
			 * 	return Promise.resolve("Hello, world!");
			 * };
			 * ```
			 * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
			 */
			"no-return-await": ERROR,

			/**
			 * Disallow self compare (comparing a value to itself).
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * if (value === value) // …
			 * ```
			 * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
			 */
			"no-self-compare": ERROR,

			/**
			 * Disallow template literal placeholder syntax in regular strings.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = "Hello, ${world}!";
			 *
			 * // ✅ Correct
			 * const example = `Hello, ${world}!`;
			 * ```
			 * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
			 */
			"no-template-curly-in-string": ERROR,

			/**
			 * Disallow unmodified conditions of loops.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * while (node) {
			 * 	someFunction(node);
			 * }
			 *
			 * // ✅ Correct
			 * while (node) {
			 * 	someFunction(node);
			 * 	node = node.next;
			 * }
			 * ```
			 * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
			 */
			"no-unmodified-loop-condition": ERROR,

			/**
			 * Disallow unnecessary ternaries like: `condition ? true : false`.
			 *
			 * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
			 */
			"no-unneeded-ternary": ERROR,

			/**
			 * Disallow loops with a body that allows only one iteration.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * for (let i = 0; i < 100; i++) {
			 * 	if (logic) // …
			 * 	break; // Will always break on first loop
			 * }
			 *
			 * // ✅ Correct
			 * for (let i = 0; i < 100; i++) {
			 * 	if (logic) {
			 * 		// …
			 * 		break;
			 * 	}
			 * }
			 * ```
			 * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
			 */
			"no-unreachable-loop": ERROR,

			/**
			 * Disallow unnecessary `.call()` and `.apply()`.
			 *
			 * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
			 */
			"no-useless-call": ERROR,

			/**
			 * Disallow unnecessary concatenation of strings.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = "Hello, " + "world!";
			 *
			 * // ✅ Correct
			 * const example = "Hello, world!";
			 * ```
			 * @see [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat)
			 */
			"no-useless-concat": ERROR,

			/**
			 * Disallow redundant return statements.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = () => {
			 * 	console.log("Hello, world!");
			 * 	return;
			 * };
			 *
			 * // ✅ Correct
			 * const example = () => console.log("Hello, world!");
			 * ```
			 * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
			 */
			"no-useless-return": ERROR,

			/**
			 * Require `let` or `const` instead of `var`.
			 *
			 * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
			 */
			"no-var": ERROR,

			/**
			 * Require object literal shorthand syntax.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const example = { value: value };
			 *
			 * // ✅ Correct
			 * const example = { value };
			 * ```
			 * @see [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)
			 */
			"object-shorthand": ERROR,

			/**
			 * Enforce variables to be declared separately.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * let a, b;
			 *
			 * // ✅ Correct
			 * let a;
			 * let b;
			 * ```
			 * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
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
			 *
			 * @see [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements)
			 */
			"padding-line-between-statements": [
				ERROR,
				{
					blankLine: "always",
					next: "return",
					// eslint-disable-next-line id-denylist
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					// eslint-disable-next-line id-denylist
					prev: ["import", "const", "let", "var"],
				},
				{
					blankLine: "any",
					next: ["const", "let", "var"],
					// eslint-disable-next-line id-denylist
					prev: ["const", "let", "var"],
				},
				{
					blankLine: "any",
					next: "import",
					// eslint-disable-next-line id-denylist
					prev: "import",
				},
				{
					blankLine: "always",
					next: "export",
					// eslint-disable-next-line id-denylist
					prev: "*",
				},
				{
					blankLine: "any",
					next: "export",
					// eslint-disable-next-line id-denylist
					prev: "export",
				},
			],
			/**
			 * Require using arrow functions for callbacks.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * [1, 2, 3].map(function (value) {
			 * 	return value * 2;
			 * });
			 *
			 * // ✅ Correct
			 * [1, 2, 3].map(value => value * 2);
			 * ```
			 * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
			 */
			"prefer-arrow-callback": ERROR,

			/**
			 * Suggest using `const` over `let` when value is not reassigned.
			 *
			 * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
			 */
			"prefer-const": ERROR,

			/**
			 * Warn about the use of `Math.pow` in favor of the `**` operator.
			 *
			 * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
			 */
			"prefer-exponentiation-operator": WARN,

			/**
			 * Suggest using named capture group in regular expressions.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const regex = /(\d{4})-(\d{2})-(\d{2})/u;
			 *
			 * // ✅ Correct
			 * const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
			 * ```
			 * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
			 */
			"prefer-named-capture-group": WARN,

			/**
			 * Prefer use of an object spread over `Object.assign`.
			 *
			 * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
			 */
			"prefer-object-spread": WARN,

			/**
			 * Disallow use of the `RegExp` in favor of regular expression literals.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const regex = new RegExp("Hello, world!");
			 *
			 * // ✅ Correct
			 * const regex = /Hello, world!/;
			 * ```
			 * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
			 */
			"prefer-regex-literals": ERROR,

			/**
			 * Use the rest parameters instead of `arguments`.
			 *
			 * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
			 */
			"prefer-rest-params": ERROR,

			/**
			 * Use spread syntax instead of `.apply()`.
			 *
			 * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
			 */
			"prefer-spread": ERROR,

			/**
			 * Use template literals instead of string concatenation.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const string = "Hello" + name + "!";
			 *
			 * // ✅ Correct
			 * const string = `Hello, ${name}!`;
			 * ```
			 * @see [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)
			 */
			"prefer-template": ERROR,

			/**
			 * Require radix parameter in `parseInt`.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * const value = parseInt("10");
			 *
			 * // ✅ Correct
			 * const value = parseInt("10", 10);
			 * ```
			 * @see [radix](https://eslint.org/docs/latest/rules/radix)
			 */
			radix: ERROR,

			/**
			 * Enforce the use of `u` flag on `RegExp` (to support unicode).
			 *
			 * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
			 */
			"require-unicode-regexp": ERROR,

			/**
			 * Require object keys to be sorted.
			 *
			 * @see [sort-keys](https://eslint.org/docs/latest/rules/sort-keys)
			 */
			"sort-keys": [ERROR, "asc", { natural: true }],

			/**
			 * Requires a whitespace (space or tab) beginning a comment.
			 *
			 * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
			 */
			"spaced-comment": ERROR,

			/**
			 * Require IIFEs to be wrapped.
			 *
			 * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
			 */
			"wrap-iife": [ERROR, "inside"],

			/**
			 * Disallow yoda conditions.
			 *
			 * @example
			 * ```typescript
			 * // ❌ Incorrect
			 * if (1 === value) // …
			 *
			 * // ✅ Correct
			 * if (value === 1) // …
			 * ```
			 */
			yoda: ERROR,
		},
	});
