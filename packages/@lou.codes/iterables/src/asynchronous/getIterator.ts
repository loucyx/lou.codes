import {
	asyncIteratorSymbol,
	isIterable,
	iteratorSymbol,
} from "@lou.codes/predicates";
import type { IsomorphicIterable } from "@lou.codes/types";

/**
 * Get a `Symbol.iterator` from an iterable or a `Symbol.asyncIterator` from an
 * asynchronous iterable.
 *
 * @category Asynchronous Common
 * @example
 * ```typescript
 * const iterator = getIterator([1, 2, 3]);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: 2, done: false }
 * iterator.next(); // { value: 3, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @param iterable Iterable to get the iterator from.
 * @returns Iterator instance.
 */
export const getIterator = <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) =>
	(iterable as AsyncIterable<unknown>)[
		(isIterable(iterable) ? iteratorSymbol : (
			asyncIteratorSymbol
		)) as keyof AsyncIterable<unknown>
	]() as Iterable extends IsomorphicIterable<infer Item> ?
		Iterable extends AsyncIterable<Item> ?
			AsyncIterator<Item, Item, Item>
		:	Iterator<Item, Item, Item>
	:	never;
