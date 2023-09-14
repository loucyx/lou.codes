import { isType } from "./isType.js";

/**
 * `typeof` "number" alias.
 *
 * @category Primitive
 * @example
 * ```typescript
 * isNumber(1); // true
 * isNumber(Infinity); // true
 * isNumber(NaN); // true
 * isNumber(1n); // false
 * ```
 * @returns `true` if the given value is a `number`, `false` otherwise.
 */
export const isNumber = isType("number");
