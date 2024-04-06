/**
 * Alias for Symbol to get some minification. Sadly we can't do the same trick
 * we did for `Object`, `Array` and so on because we lose the types.
 */
const SymbolAlias = Symbol;

export const iterator: typeof Symbol.iterator = SymbolAlias.iterator;

export const asyncIterator: typeof Symbol.asyncIterator =
	SymbolAlias.asyncIterator;
