import { isType } from "./isType.js";

/**
 * `typeof` "boolean" alias.
 *
 * @category Primitive
 * @example
 * ```typescript
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(null); // false
 * ```
 * @returns `true` if the given value is a `boolean`, `false` otherwise.
 */
export const isBoolean = isType("boolean");
