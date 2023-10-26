import { has } from "./has.js";
import { asyncIteratorSymbol } from "./symbols.js";

/**
 * Check if given object has the `Symbol.asyncIterator` symbol.
 *
 * @category Iterables
 * @category Objects
 * @example
 * ```typescript
 * hasAsyncIteratorSymbol({ [Symbol.asyncIterator]() {} }); // true
 * hasAsyncIteratorSymbol({ bar: "bar" }); // false
 * ```
 * @returns `true` when given object has the `Symbol.asyncIterator` symbol,
 * `false` otherwise.
 */
export const hasAsyncIteratorSymbol = has(asyncIteratorSymbol);
