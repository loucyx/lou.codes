import { isType } from "./isType.js";

/**
 * `typeof` "object" alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isObject({}); // true
 * isObject([]); // true
 * isObject(new Date()); // true
 * isObject(null); // false
 * ```
 * @returns `true` if the given value is an `object`, `false` otherwise.
 */
export const isObject = isType("object");
