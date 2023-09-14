import { isInstanceOf } from "./isInstanceOf.js";

/**
 * `instanceof RegExp` alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isRegExp(new RegExp("-")); // true
 * isRegExp(/-/); // true
 * isRegExp("Vangware"); // false
 * ```
 * @returns `true` if the given value is an instance of `RegExp`, `false` otherwise.
 */
export const isRegExp = isInstanceOf(RegExp);
