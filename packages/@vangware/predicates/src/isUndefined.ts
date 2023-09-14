import { isType } from "./isType.js";

/**
 * `typeof` "undefined" alias.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is `undefined`, `false` otherwise.
 */
export const isUndefined = isType("undefined");
