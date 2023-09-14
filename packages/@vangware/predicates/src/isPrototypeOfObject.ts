import { isPrototypeOf } from "./isPrototypeOf.js";

/**
 * Given `input`'s prototype comes directly from Object.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isPrototypeOfObject({}); // true
 * isPrototypeOfObject(/./); // false
 * ```
 * @returns `true` if the given value is an object inheriting directly from `Object`, `false` otherwise.
 */
export const isPrototypeOfObject = isPrototypeOf(Object);
