import { iterator } from "@lou.codes/constants/Symbol.js";
import { hasIteratorSymbol } from "./hasIteratorSymbol.js";
import { isFunction } from "./isFunction.js";
import { isObject } from "./isObject.js";
import { isString } from "./isString.js";

/**
 * Check if given value is `Iterable`.
 *
 * @category Iterables
 * @example
 * ```typescript
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `Iterable`, `false` otherwise.
 */
export const isIterable = <Item>(
	input: unknown,
): input is Readonly<Iterable<Item>> =>
	isString(input) ||
	(isObject(input) &&
		hasIteratorSymbol(input) &&
		isFunction(input[iterator]));
