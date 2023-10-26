import { isType } from "./isType.js";

/**
 * `typeof` "string" alias.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isString("Lou"); // true
 * isString(`Lou`); // true
 * isString(Symbol("Lou")); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `string`, `false` otherwise.
 */
export const isString = isType("string");
