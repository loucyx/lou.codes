import { isInstanceOf } from "./isInstanceOf.js";

/**
 * `instanceof Date` alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isBigInt(1n); // true
 * isBigInt(1); // false
 * ```
 * @returns `true` if the given value is a `Date`, `false` otherwise.
 */
export const isDate = isInstanceOf(Date);
