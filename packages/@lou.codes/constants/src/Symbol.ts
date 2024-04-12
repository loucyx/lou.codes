/**
 * Alias for `Symbol` (not exported, only for minification).
 *
 * @see [Symbol](https://mdn.io/Symbol)
 */
const SymbolAlias = Symbol;

/**
 * Alias for `Symbol.iterator`.
 *
 * @see [Symbol.iterator](https://mdn.io/Symbol.iterator)
 */
export const iterator: typeof Symbol.iterator = SymbolAlias.iterator;

/**
 * Alias for `Symbol.asyncIterator`.
 *
 * @see [Symbol.asyncIterator](https://mdn.io/Symbol.asyncIterator)
 */
export const asyncIterator: typeof Symbol.asyncIterator =
	SymbolAlias.asyncIterator;
