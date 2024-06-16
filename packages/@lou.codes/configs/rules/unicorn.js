import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { ERROR } from "./levels.js";

/**
 * ESLint `unicorn` namespace.
 */
export const unicornNamespace = "unicorn";

/**
 * ESLint `unicorn` rules.
 * @see [eslint-plugin-unicorn](https://npm.im/eslint-plugin-unicorn)
 */
export const unicornRules =
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { [unicornNamespace]: eslintPluginUnicorn },
		rules: {
			/**
			 * Improve regexes by making them shorter, consistent, and safer.
			 *
			 * @see [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md)
			 */
			[`${unicornNamespace}/better-regex`]: ERROR,

			/**
			 * Catch error must be named `error` or `somethingError` (`_` is allowed unless is used).
			 *
			 * @see [unicorn/catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md)
			 */
			[`${unicornNamespace}/catch-error-name`]: ERROR,

			/**
			 * Use destructured variables over properties.
			 *
			 * @see [unicorn/consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md)
			 */
			[`${unicornNamespace}/consistent-destructuring`]: ERROR,

			/**
			 * Prefer consistent types when spreading a ternary in an array literal.
			 *
			 * @see [unicorn/consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md)
			 */
			[`${unicornNamespace}/consistent-empty-array-spread`]: ERROR,

			/**
			 * Move function definitions to the highest possible scope.
			 *
			 * @see [unicorn/consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md)
			 */
			[`${unicornNamespace}/consistent-function-scoping`]: ERROR,

			/**
			 * Enforce passing a message value when creating a built-in error.
			 *
			 * @see [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)
			 */
			[`${unicornNamespace}/error-message`]: ERROR,

			/**
			 * Require escape sequences to use uppercase values.
			 *
			 * @see [unicorn/escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md)
			 */
			[`${unicornNamespace}/escape-case`]: ERROR,

			/**
			 * Enforce specifying rules to disable in eslint-disable comments.
			 *
			 * @see [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)
			 */
			[`${unicornNamespace}/no-abusive-eslint-disable`]: ERROR,

			/**
			 * Disallow anonymous functions and classes as the default export.
			 *
			 * @see [unicorn/no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md)
			 */
			[`${unicornNamespace}/no-anonymous-default-export`]: ERROR,

			/**
			 * Disallow using await in Promise method parameters.
			 *
			 * @see [unicorn/no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md)
			 */
			[`${unicornNamespace}/no-await-in-promise-methods`]: ERROR,

			/**
			 * Do not use leading/trailing space between `console.log` parameters.
			 *
			 * @see [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md)
			 */
			[`${unicornNamespace}/no-console-spaces`]: ERROR,

			/**
			 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
			 *
			 * @see [unicorn/no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md)
			 */
			[`${unicornNamespace}/no-hex-escape`]: ERROR,

			/**
			 * Require `Array.isArray` instead of `instanceof Array`.
			 *
			 * @see [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md)
			 */
			[`${unicornNamespace}/no-instanceof-array`]: ERROR,

			/**
			 * Disallow invalid options in `fetch()` and new `Request()`.
			 *
			 * @see [unicorn/no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md)
			 */
			[`${unicornNamespace}/no-invalid-fetch-options`]: ERROR,

			/**
			 * Prevent calling `EventTarget#removeEventListener` with the result of an expression.
			 *
			 * @see [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md)
			 */
			[`${unicornNamespace}/no-invalid-remove-event-listener`]: ERROR,

			/**
			 * Disallow a magic number as the `depth` argument in `Array#flat`.
			 *
			 * @see [unicorn/no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md)
			 */
			[`${unicornNamespace}/no-magic-array-flat-depth`]: ERROR,

			/**
			 * Disallow negated conditions.
			 *
			 * @see [unicorn/no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md)
			 */
			[`${unicornNamespace}/no-negated-condition`]: ERROR,

			/**
			 * Disallow negated expression in equality check.
			 *
			 * @see [unicorn/no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md)
			 */
			[`${unicornNamespace}/no-negation-in-equality-check`]: ERROR,

			/**
			 * Disallow `new Array()`.
			 *
			 * @see [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)
			 */
			[`${unicornNamespace}/no-new-array`]: ERROR,

			/**
			 * Enforce the use of `Buffer.from` and `Buffer.alloc` instead of the deprecated `new Buffer()`.
			 *
			 * @see [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md)
			 */
			[`${unicornNamespace}/no-new-buffer`]: ERROR,

			/**
			 * Disallow the use of the null literal.
			 *
			 * @see [Reasoning](https://lou.cx/articles/we-don-t-need-null/)
			 * @see [unicorn/no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md)
			 */
			[`${unicornNamespace}/no-null`]: ERROR,

			/**
			 * Disallow passing single-element arrays to Promise methods.
			 *
			 * @see [unicorn/no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md)
			 */
			[`${unicornNamespace}/no-single-promise-in-promise-methods`]: ERROR,

			/**
			 * Enforce the use of built-in methods instead of unnecessary polyfills.
			 *
			 * @see [unicorn/no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md)
			 */
			[`${unicornNamespace}/no-unnecessary-polyfills`]: ERROR,

			/**
			 * Disallow useless fallback when spreading in object literals.
			 *
			 * @see [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md)
			 */
			[`${unicornNamespace}/no-useless-fallback-in-spread`]: ERROR,

			/**
			 * Disallow useless array length check.
			 *
			 * @see [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md)
			 */
			[`${unicornNamespace}/no-useless-length-check`]: ERROR,

			/**
			 * Disallow unnecessary spread.
			 *
			 * @see [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md)
			 */
			[`${unicornNamespace}/no-useless-spread`]: ERROR,

			/**
			 * Disallow useless case in switch statements.
			 *
			 * @see [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)
			 */
			[`${unicornNamespace}/no-useless-switch-case`]: ERROR,

			/**
			 * Enforce the style of numeric separators by correctly grouping digits.
			 *
			 * @see [unicorn/numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md)
			 */
			[`${unicornNamespace}/numeric-separators-style`]: ERROR,

			/**
			 * Prefer `Element#addEventListener` and `Element#removeEventListener` over on-functions.
			 *
			 * @see [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md)
			 */
			[`${unicornNamespace}/prefer-add-event-listener`]: ERROR,

			/**
			 * Prefer `Array#find` and `Array#findLast` over the first or last element from `Array#filter`.
			 *
			 * @see [unicorn/prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md)
			 */
			[`${unicornNamespace}/prefer-array-find`]: ERROR,

			/**
			 * Prefer `Array#flat` over legacy techniques to flatten arrays.
			 *
			 * @see [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)
			 */
			[`${unicornNamespace}/prefer-array-flat`]: ERROR,

			/**
			 * Prefer `Array#flatMap` over `Array#map(…).flat()`.
			 *
			 * @see [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)
			 */
			[`${unicornNamespace}/prefer-array-flat-map`]: ERROR,

			/**
			 * Prefer `Array#indexOf` and `Array#lastIndexOf` over `Array#findIndex` and `Array#findLastIndex` when looking for the index of an item.
			 *
			 * @see [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md)
			 */
			[`${unicornNamespace}/prefer-array-index-of`]: ERROR,

			/**
			 * Prefer `Array#some` over `Array#filter(…).length` check and `Array#find` or `Array#findLast`.
			 *
			 * @see [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md)
			 */
			[`${unicornNamespace}/prefer-array-some`]: ERROR,

			/**
			 * Prefer `Date.now` to get the number of milliseconds since the Unix Epoch.
			 *
			 * @see [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md)
			 */
			[`${unicornNamespace}/prefer-date-now`]: ERROR,

			/**
			 * Prefer default parameters over reassignment.
			 *
			 * @see [unicorn/prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md)
			 */
			[`${unicornNamespace}/prefer-default-parameters`]: ERROR,

			/**
			 * Prefer `Node#append` over `Node#appendChild`.
			 *
			 * @see [unicorn/prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md)
			 */
			[`${unicornNamespace}/prefer-dom-node-append`]: ERROR,

			/**
			 * Prefer using `Element.dataset` on DOM elements over calling attribute methods.
			 *
			 * @see [unicorn/prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md)
			 */
			[`${unicornNamespace}/prefer-dom-node-dataset`]: ERROR,

			/**
			 * Prefer `ChildNode#remove` over `ParentNode#removeChild(childNode)`.
			 *
			 * @see [unicorn/prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md)
			 */
			[`${unicornNamespace}/prefer-dom-node-remove`]: ERROR,

			/**
			 * Prefer `Element#textContent` over `Element#innerText`.
			 *
			 * @see [unicorn/prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md)
			 */
			[`${unicornNamespace}/prefer-dom-node-text-content`]: ERROR,

			/**
			 * Prefer EventTarget over EventEmitter.
			 *
			 * @see [unicorn/prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md)
			 */
			[`${unicornNamespace}/prefer-event-target`]: ERROR,

			/**
			 * Prefer `export…from` when re-exporting.
			 *
			 * @see [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md)
			 */
			[`${unicornNamespace}/prefer-export-from`]: ERROR,

			/**
			 * Prefer `Array#includes` over `Array.indexOf` and `Array#some` when checking for existence or non-existence.
			 *
			 * @see [unicorn/prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md)
			 */
			[`${unicornNamespace}/prefer-includes`]: ERROR,

			/**
			 * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
			 *
			 * @see [unicorn/prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md)
			 */
			[`${unicornNamespace}/prefer-keyboard-event-key`]: ERROR,

			/**
			 * Prefer using a logical operator over a ternary.
			 *
			 * @see [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)
			 */
			[`${unicornNamespace}/prefer-logical-operator-over-ternary`]: ERROR,

			/**
			 * Modern DOM APIs enforcement:
			 *
			 * | Prefer…                                                                  | over…                                                              |
			 * | ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
			 * | `Element#before`                                                         | `Element#insertBefore`                                             |
			 * | `Element#replaceWith`                                                    | `Element#replaceChild`                                             |
			 * | `Element#before`, `Element#after`, `Element#append` or `Element#prepend` | `Element#insertAdjacentText`() and `Element#insertAdjacentElement` |
			 *
			 * @see [unicorn/prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md)
			 */
			[`${unicornNamespace}/prefer-modern-dom-apis`]: ERROR,

			/**
			 * Prefer modern Math APIs over legacy patterns.
			 *
			 * @see [unicorn/prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md)
			 */
			[`${unicornNamespace}/prefer-modern-math-apis`]: ERROR,

			/**
			 * Prefer using the `node:` protocol when importing Node.js builtin modules.
			 *
			 * @see [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)
			 */
			[`${unicornNamespace}/prefer-node-protocol`]: ERROR,

			/**
			 * Prefer using `Object.fromEntries` to transform a list of key-value pairs into an object.
			 *
			 * @see [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md)
			 */
			[`${unicornNamespace}/prefer-object-from-entries`]: ERROR,

			/**
			 * Prefer omitting the catch binding parameter.
			 *
			 * @see [unicorn/prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md)
			 */
			[`${unicornNamespace}/prefer-optional-catch-binding`]: ERROR,

			/**
			 * Query selector preference:
			 *
			 * | Prefer…                    | over…                                                               |
			 * | -------------------------- | ------------------------------------------------------------------- |
			 * | `Element#querySelector`    | `Element#getElementById`                                            |
			 * | `Element#querySelectorAll` | `Element#getElementsByClassName` and `Element#getElementsByTagName` |
			 *
			 * @see [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md)
			 */
			[`${unicornNamespace}/prefer-query-selector`]: ERROR,

			/**
			 * Prefer the spread operator over `Array.from`, `Array#concat`, `Array#slice`, `Array#toSpliced` and `String#split`.
			 *
			 * @see [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)
			 */
			[`${unicornNamespace}/prefer-spread`]: ERROR,

			/**
			 * Prefer using the `String.raw` tag to avoid escaping `\`.
			 *
			 * @see [unicorn/prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md)
			 */
			[`${unicornNamespace}/prefer-string-raw`]: ERROR,

			/**
			 * Prefer `String#replaceAll` over regex searches with the global flag.
			 *
			 * @see [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md)
			 */
			[`${unicornNamespace}/prefer-string-replace-all`]: ERROR,

			/**
			 * Prefer `String#slice` over `String#substr` and `String#substring`.
			 *
			 * @see [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md)
			 */
			[`${unicornNamespace}/prefer-string-slice`]: ERROR,

			/**
			 * Prefer `String#startsWith` & `String#endsWith` over `RegExp#test`.
			 *
			 * @see [unicorn/prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md)
			 */
			[`${unicornNamespace}/prefer-string-starts-ends-with`]: ERROR,

			/**
			 * Prefer `String#trimStart` and `String#trimEnd` over `String#trimLeft` and `String#trimRight`.
			 *
			 * @see [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md)
			 */
			[`${unicornNamespace}/prefer-string-trim-start-end`]: ERROR,

			/**
			 * Prefer using `structuredClone` to create a deep clone.
			 *
			 * @see [unicorn/prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md)
			 */
			[`${unicornNamespace}/prefer-structured-clone`]: ERROR,

			/**
			 * Prefer ternary expressions over simple if-else statements.
			 *
			 * @see [unicorn/prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)
			 */
			[`${unicornNamespace}/prefer-ternary`]: ERROR,

			/**
			 * Enforce throwing TypeError in type checking conditions.
			 *
			 * @see [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md)
			 */
			[`${unicornNamespace}/prefer-type-error`]: ERROR,

			/**
			 * Enforce using the separator argument with `Array#join`.
			 *
			 * @see [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)
			 */
			[`${unicornNamespace}/require-array-join-separator`]: ERROR,

			/**
			 * Enforce consistent case for text encoding identifiers.
			 *
			 * @see [unicorn/text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md)
			 */
			[`${unicornNamespace}/text-encoding-identifier-case`]: ERROR,
		},
	});
