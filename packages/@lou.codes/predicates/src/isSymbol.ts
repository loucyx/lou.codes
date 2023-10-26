import { isType } from "./isType.js";

/**
 * `typeof` "symbol" alias.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isSymbol(Symbol("Lou")); // true
 * isSymbol(Symbol.iterator); // true
 * isSymbol("Lou"); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `symbol`, `false` otherwise.
 */
export const isSymbol = isType("symbol");
