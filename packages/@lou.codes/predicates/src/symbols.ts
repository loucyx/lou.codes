const { iterator, asyncIterator } = Symbol;

/**
 * `Symbol.iterator` shorthand (useful for minification/bundling).
 *
 * @category Primitives
 * @see [Symbol.iterator](https://mdn.io/Symbol.iterator)
 */
export const iteratorSymbol: typeof Symbol.iterator =
	iterator as typeof Symbol.iterator;

/**
 * `Symbol.asyncIterator` shorthand (useful for minification/bundling).
 *
 * @category Primitives
 * @see [Symbol.asyncIterator](https://mdn.io/Symbol.asyncIterator)
 */
export const asyncIteratorSymbol: typeof Symbol.asyncIterator =
	asyncIterator as typeof Symbol.asyncIterator;
