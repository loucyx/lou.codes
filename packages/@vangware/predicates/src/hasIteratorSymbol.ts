import { has } from "./has.js";

/**
 * Check if given object has the `Symbol.iterator` symbol.
 *
 * @category Iterables
 * @category Objects
 * @example
 * ```typescript
 * hasIteratorSymbol({ [Symbol.iterator]() {} }); // true
 * hasIteratorSymbol({ bar: "bar" }); // false
 * ```
 * @returns `true` when given object has the `Symbol.iterator` symbol, `false`
 * otherwise.
 */
export const hasIteratorSymbol = has(Symbol.iterator);
