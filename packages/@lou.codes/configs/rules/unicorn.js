import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { freeze } from "../freeze.js";
import { ERROR } from "./levels.js";

/**
 * ESLint `unicorn` rules.
 * @see [eslint-plugin-unicorn](https://npm.im/eslint-plugin-unicorn)
 */
export const unicornRules = freeze(
	/** @type {const} @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { unicorn: eslintPluginUnicorn },
		rules: {
			/**
			 * Improve regexes by making them shorter, consistent, and safer.
			 *
			 * @see [unicorn/better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md)
			 */
			"unicorn/better-regex": ERROR,

			/**
			 * Catch error must be named `error` or `somethingError` (`_` is allowed unless is used).
			 *
			 * @see [unicorn/catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md)
			 */
			"unicorn/catch-error-name": ERROR,

			/**
			 * Use destructured variables over properties.
			 *
			 * @see [unicorn/consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md)
			 */
			"unicorn/consistent-destructuring": ERROR,

			/**
			 * Move function definitions to the highest possible scope.
			 *
			 * @see [unicorn/consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md)
			 */
			"unicorn/consistent-function-scoping": ERROR,

			/**
			 * Enforce passing a message value when creating a built-in error.
			 *
			 * @see [unicorn/error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)
			 */
			"unicorn/error-message": ERROR,

			/**
			 * Require escape sequences to use uppercase values.
			 *
			 * @see [unicorn/escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md)
			 */
			"unicorn/escape-case": ERROR,

			/**
			 * Enforce specifying rules to disable in eslint-disable comments.
			 *
			 * @see [unicorn/no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)
			 */
			"unicorn/no-abusive-eslint-disable": ERROR,

			/**
			 * Do not use leading/trailing space between console.log parameters.
			 *
			 * @see [unicorn/no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md)
			 */
			"unicorn/no-console-spaces": ERROR,

			/**
			 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
			 *
			 * @see [unicorn/no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md)
			 */
			"unicorn/no-hex-escape": ERROR,

			/**
			 * Require Array.isArray() instead of instanceof Array.
			 *
			 * @see [unicorn/no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md)
			 */
			"unicorn/no-instanceof-array": ERROR,

			/**
			 * Prevent calling EventTarget#removeEventListener() with the result of an expression.
			 *
			 * @see [unicorn/no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md)
			 */
			"unicorn/no-invalid-remove-event-listener": ERROR,

			/**
			 * Disallow negated conditions.
			 *
			 * @see [unicorn/no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md)
			 */
			"unicorn/no-negated-condition": ERROR,

			/**
			 * Disallow new Array().
			 *
			 * @see [unicorn/no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)
			 */
			"unicorn/no-new-array": ERROR,

			/**
			 * Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
			 *
			 * @see [unicorn/no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md)
			 */
			"unicorn/no-new-buffer": ERROR,

			/**
			 * Disallow the use of the null literal.
			 * @see [Reasoning](https://lou.cx/articles/we-]l/)
			 *
			 * @see [unicorn/no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md)
			 */
			"unicorn/no-null": ERROR,

			/**
			 * Enforce the use of built-in methods instead of unnecessary polyfills.
			 *
			 * @see [unicorn/no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md)
			 */
			"unicorn/no-unnecessary-polyfills": ERROR,

			/**
			 * Disallow useless fallback when spreading in object literals.
			 *
			 * @see [unicorn/no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md)
			 */
			"unicorn/no-useless-fallback-in-spread": ERROR,

			/**
			 * Disallow useless array length check.
			 *
			 * @see [unicorn/no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md)
			 */
			"unicorn/no-useless-length-check": ERROR,

			/**
			 * Disallow unnecessary spread.
			 *
			 * @see [unicorn/no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md)
			 */
			"unicorn/no-useless-spread": ERROR,

			/**
			 * Disallow useless case in switch statements.
			 *
			 * @see [unicorn/no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)
			 */
			"unicorn/no-useless-switch-case": ERROR,

			/**
			 * Enforce proper case for numeric literals.
			 *
			 * @see [unicorn/number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md)
			 */
			"unicorn/number-literal-case": ERROR,

			/**
			 * Enforce the style of numeric separators by correctly grouping digits.
			 *
			 * @see [unicorn/numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md)
			 */
			"unicorn/numeric-separators-style": ERROR,

			/**
			 * Prefer .addEventListener() and .removeEventListener() over on-functions.
			 *
			 * @see [unicorn/prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md)
			 */
			"unicorn/prefer-add-event-listener": ERROR,

			/**
			 * Prefer .find(…) and .findLast(…) over the first or last element from .filter(…).
			 *
			 * @see [unicorn/prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md)
			 */
			"unicorn/prefer-array-find": ERROR,

			/**
			 * Prefer Array#flat() over legacy techniques to flatten arrays.
			 *
			 * @see [unicorn/prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)
			 */
			"unicorn/prefer-array-flat": ERROR,

			/**
			 * Prefer .flatMap(…) over .map(…).flat().
			 *
			 * @see [unicorn/prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)
			 */
			"unicorn/prefer-array-flat-map": ERROR,

			/**
			 * Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.
			 *
			 * @see [unicorn/prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md)
			 */
			"unicorn/prefer-array-index-of": ERROR,

			/**
			 * Prefer .some(…) over .filter(…).length check and .{find,findLast}(…).
			 *
			 * @see [unicorn/prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md)
			 */
			"unicorn/prefer-array-some": ERROR,

			/**
			 * Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
			 *
			 * @see [unicorn/prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md)
			 */
			"unicorn/prefer-date-now": ERROR,

			/**
			 * Prefer default parameters over reassignment.
			 *
			 * @see [unicorn/prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md)
			 */
			"unicorn/prefer-default-parameters": ERROR,

			/**
			 * Prefer Node#append() over Node#appendChild().
			 *
			 * @see [unicorn/prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md)
			 */
			"unicorn/prefer-dom-node-append": ERROR,

			/**
			 * Prefer using .dataset on DOM elements over calling attribute methods.
			 *
			 * @see [unicorn/prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md)
			 */
			"unicorn/prefer-dom-node-dataset": ERROR,

			/**
			 * Prefer childNode.remove() over parentNode.removeChild(childNode).
			 *
			 * @see [unicorn/prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md)
			 */
			"unicorn/prefer-dom-node-remove": ERROR,

			/**
			 * Prefer .textContent over .innerText.
			 *
			 * @see [unicorn/prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md)
			 */
			"unicorn/prefer-dom-node-text-content": ERROR,

			/**
			 * Prefer EventTarget over EventEmitter.
			 *
			 * @see [unicorn/prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md)
			 */
			"unicorn/prefer-event-target": ERROR,

			/**
			 * Prefer export…from when re-exporting.
			 *
			 * @see [unicorn/prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md)
			 */
			"unicorn/prefer-export-from": ERROR,

			/**
			 * Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence.
			 *
			 * @see [unicorn/prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md)
			 */
			"unicorn/prefer-includes": ERROR,

			/**
			 * Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
			 *
			 * @see [unicorn/prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md)
			 */
			"unicorn/prefer-keyboard-event-key": ERROR,

			/**
			 * Prefer using a logical operator over a ternary.
			 *
			 * @see [unicorn/prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)
			 */
			"unicorn/prefer-logical-operator-over-ternary": ERROR,

			/**
			 * Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
			 *
			 * @see [unicorn/prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md)
			 */
			"unicorn/prefer-modern-dom-apis": ERROR,

			/**
			 * Prefer modern Math APIs over legacy patterns.
			 *
			 * @see [unicorn/prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md)
			 */
			"unicorn/prefer-modern-math-apis": ERROR,

			/**
			 * Prefer using the node: protocol when importing Node.js builtin modules.
			 *
			 * @see [unicorn/prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)
			 */
			"unicorn/prefer-node-protocol": ERROR,

			/**
			 * Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.
			 *
			 * @see [unicorn/prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md)
			 */
			"unicorn/prefer-object-from-entries": ERROR,

			/**
			 * Prefer omitting the catch binding parameter.
			 *
			 * @see [unicorn/prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md)
			 */
			"unicorn/prefer-optional-catch-binding": ERROR,

			/**
			 * Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName().
			 *
			 * @see [unicorn/prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md)
			 */
			"unicorn/prefer-query-selector": ERROR,

			/**
			 * Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('').
			 *
			 * @see [unicorn/prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)
			 */
			"unicorn/prefer-spread": ERROR,

			/**
			 * Prefer String#replaceAll() over regex searches with the global flag.
			 *
			 * @see [unicorn/prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md)
			 */
			"unicorn/prefer-string-replace-all": ERROR,

			/**
			 * Prefer String#slice() over String#substr() and String#substring().
			 *
			 * @see [unicorn/prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md)
			 */
			"unicorn/prefer-string-slice": ERROR,

			/**
			 * Prefer String#startsWith() & String#endsWith() over RegExp#test().
			 *
			 * @see [unicorn/prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md)
			 */
			"unicorn/prefer-string-starts-ends-with": ERROR,

			/**
			 * Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
			 *
			 * @see [unicorn/prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md)
			 */
			"unicorn/prefer-string-trim-start-end": ERROR,

			/**
			 * Prefer ternary expressions over simple if-else statements.
			 *
			 * @see [unicorn/prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)
			 */
			"unicorn/prefer-ternary": ERROR,

			/**
			 * Enforce throwing TypeError in type checking conditions.
			 *
			 * @see [unicorn/prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md)
			 */
			"unicorn/prefer-type-error": ERROR,

			/**
			 * Enforce using the separator argument with Array#join().
			 *
			 * @see [unicorn/require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)
			 */
			"unicorn/require-array-join-separator": ERROR,

			/**
			 * Enforce consistent case for text encoding identifiers.
			 *
			 * @see [unicorn/text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md)
			 */
			"unicorn/text-encoding-identifier-case": ERROR,
		},
	}),
);
