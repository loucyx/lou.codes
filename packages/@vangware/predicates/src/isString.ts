import { isType } from "./isType.js";

/**
 * `typeof` "string" alias.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isString("Vangware"); // true
 * isString(`Vangware`); // true
 * isString(Symbol("Vangware")); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `string`, `false` otherwise.
 */
export const isString = isType("string");
