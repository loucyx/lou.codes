import { isType } from "./isType.js";

/**
 * `typeof` "bigint" alias.
 *
 * @category Primitive
 * @example
 * ```typescript
 * isBigInt(1n); // true
 * isBigInt(1); // false
 * ```
 * @returns `true` if the given value is a `bigint`, `false` otherwise.
 */
export const isBigInt = isType("bigint");
