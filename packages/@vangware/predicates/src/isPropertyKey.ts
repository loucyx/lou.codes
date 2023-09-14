import { isNumber } from "./isNumber.js";
import { isString } from "./isString.js";
import { isSymbol } from "./isSymbol.js";

/**
 * Checks if the given value is a valid PropertyKey of an object (`string`, `symbol`, or `number`).
 *
 * @category Objects
 * @example
 * ```
 * isPropertyKey("Vangware"); // true
 * isPropertyKey(1); // true
 * isPropertyKey(Symbol("Vangware")); // true
 * isPropertyKey({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` if the given value is a valid PropertyKey of an object, `false` otherwise.
 */
export const isPropertyKey = (input: unknown): input is PropertyKey =>
	isNumber(input) || isString(input) || isSymbol(input);
