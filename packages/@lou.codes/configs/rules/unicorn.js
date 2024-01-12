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
			 */
			"unicorn/better-regex": ERROR,
			/**
			 * Catch error must be named `error` or `somethingError` (`_` is allowed unless is used).
			 */
			"unicorn/catch-error-name": ERROR,
			/**
			 * Use destructured variables over properties.
			 */
			"unicorn/consistent-destructuring": ERROR,
			/**
			 * Move function definitions to the highest possible scope.
			 */
			"unicorn/consistent-function-scoping": ERROR,
			/**
			 * Enforce passing a message value when creating a built-in error.
			 */
			"unicorn/error-message": ERROR,
			/**
			 * Require escape sequences to use uppercase values.
			 */
			"unicorn/escape-case": ERROR,
			/**
			 * Enforce specifying rules to disable in eslint-disable comments.
			 */
			"unicorn/no-abusive-eslint-disable": ERROR,
			/**
			 * Do not use leading/trailing space between console.log parameters.
			 */
			"unicorn/no-console-spaces": ERROR,
			/**
			 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
			 */
			"unicorn/no-hex-escape": ERROR,
			/**
			 * Require Array.isArray() instead of instanceof Array.
			 */
			"unicorn/no-instanceof-array": ERROR,
			/**
			 * Prevent calling EventTarget#removeEventListener() with the result of an expression.
			 */
			"unicorn/no-invalid-remove-event-listener": ERROR,
			/**
			 * Disallow negated conditions.
			 */
			"unicorn/no-negated-condition": ERROR,
			/**
			 * Disallow new Array().
			 */
			"unicorn/no-new-array": ERROR,
			/**
			 * Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer().
			 */
			"unicorn/no-new-buffer": ERROR,
			/**
			 * Disallow the use of the null literal.
			 * @see [Reasoning](https://lou.cx/articles/we-don-t-need-null/)
			 */
			"unicorn/no-null": ERROR,
			/**
			 * Enforce the use of built-in methods instead of unnecessary polyfills.
			 */
			"unicorn/no-unnecessary-polyfills": ERROR,
			/**
			 * Disallow useless fallback when spreading in object literals.
			 */
			"unicorn/no-useless-fallback-in-spread": ERROR,
			/**
			 * Disallow useless array length check.
			 */
			"unicorn/no-useless-length-check": ERROR,
			/**
			 * Disallow unnecessary spread.
			 */
			"unicorn/no-useless-spread": ERROR,
			/**
			 * Disallow useless case in switch statements.
			 */
			"unicorn/no-useless-switch-case": ERROR,
			/**
			 * Enforce proper case for numeric literals.
			 */
			"unicorn/number-literal-case": ERROR,
			/**
			 * Enforce the style of numeric separators by correctly grouping digits.
			 */
			"unicorn/numeric-separators-style": ERROR,
			/**
			 * Prefer .addEventListener() and .removeEventListener() over on-functions.
			 */
			"unicorn/prefer-add-event-listener": ERROR,
			/**
			 * Prefer .find(…) and .findLast(…) over the first or last element from .filter(…).
			 */
			"unicorn/prefer-array-find": ERROR,
			/**
			 * Prefer Array#flat() over legacy techniques to flatten arrays.
			 */
			"unicorn/prefer-array-flat": ERROR,
			/**
			 * Prefer .flatMap(…) over .map(…).flat().
			 */
			"unicorn/prefer-array-flat-map": ERROR,
			/**
			 * Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.
			 */
			"unicorn/prefer-array-index-of": ERROR,
			/**
			 * Prefer .some(…) over .filter(…).length check and .{find,findLast}(…).
			 */
			"unicorn/prefer-array-some": ERROR,
			/**
			 * Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
			 */
			"unicorn/prefer-date-now": ERROR,
			/**
			 * Prefer default parameters over reassignment.
			 */
			"unicorn/prefer-default-parameters": ERROR,
			/**
			 * Prefer Node#append() over Node#appendChild().
			 */
			"unicorn/prefer-dom-node-append": ERROR,
			/**
			 * Prefer using .dataset on DOM elements over calling attribute methods.
			 */
			"unicorn/prefer-dom-node-dataset": ERROR,
			/**
			 * Prefer childNode.remove() over parentNode.removeChild(childNode).
			 */
			"unicorn/prefer-dom-node-remove": ERROR,
			/**
			 * Prefer .textContent over .innerText.
			 */
			"unicorn/prefer-dom-node-text-content": ERROR,
			/**
			 * Prefer EventTarget over EventEmitter.
			 */
			"unicorn/prefer-event-target": ERROR,
			/**
			 * Prefer export…from when re-exporting.
			 */
			"unicorn/prefer-export-from": ERROR,
			/**
			 * Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence.
			 */
			"unicorn/prefer-includes": ERROR,
			/**
			 * Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
			 */
			"unicorn/prefer-keyboard-event-key": ERROR,
			/**
			 * Prefer using a logical operator over a ternary.
			 */
			"unicorn/prefer-logical-operator-over-ternary": ERROR,
			/**
			 * Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
			 */
			"unicorn/prefer-modern-dom-apis": ERROR,
			/**
			 * Prefer modern Math APIs over legacy patterns.
			 */
			"unicorn/prefer-modern-math-apis": ERROR,
			/**
			 * Prefer using the node: protocol when importing Node.js builtin modules.
			 */
			"unicorn/prefer-node-protocol": ERROR,
			/**
			 * Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.
			 */
			"unicorn/prefer-object-from-entries": ERROR,
			/**
			 * Prefer omitting the catch binding parameter.
			 */
			"unicorn/prefer-optional-catch-binding": ERROR,
			/**
			 * Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName().
			 */
			"unicorn/prefer-query-selector": ERROR,
			/**
			 * Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('').
			 */
			"unicorn/prefer-spread": ERROR,
			/**
			 * Prefer String#replaceAll() over regex searches with the global flag.
			 */
			"unicorn/prefer-string-replace-all": ERROR,
			/**
			 * Prefer String#slice() over String#substr() and String#substring().
			 */
			"unicorn/prefer-string-slice": ERROR,
			/**
			 * Prefer String#startsWith() & String#endsWith() over RegExp#test().
			 */
			"unicorn/prefer-string-starts-ends-with": ERROR,
			/**
			 * Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight().
			 */
			"unicorn/prefer-string-trim-start-end": ERROR,
			/**
			 * Prefer ternary expressions over simple if-else statements.
			 */
			"unicorn/prefer-ternary": ERROR,
			/**
			 * Enforce throwing TypeError in type checking conditions.
			 */
			"unicorn/prefer-type-error": ERROR,
			/**
			 * Enforce using the separator argument with Array#join().
			 */
			"unicorn/require-array-join-separator": ERROR,
			/**
			 * Enforce consistent case for text encoding identifiers.
			 */
			"unicorn/text-encoding-identifier-case": ERROR,
		},
	}),
);
