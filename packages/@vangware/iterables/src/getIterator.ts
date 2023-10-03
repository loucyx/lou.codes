import {
	asyncIteratorSymbol,
	isIterable,
	iteratorSymbol,
} from "@vangware/predicates";
import type { IsomorphicIterable } from "@vangware/types";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterator } from "./types/ReadOnlyAsyncIterator.js";
import type { ReadOnlyIterator } from "./types/ReadOnlyIterator.js";

/**
 * Get a `Symbol.iterator` from an iterable or a `Symbol.asyncIterator` from an
 * asynchronous iterable.
 *
 * @category Common
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
		(isIterable(iterable)
			? iteratorSymbol
			: asyncIteratorSymbol) as keyof AsyncIterable<unknown>
	]() as Iterable extends IsomorphicIterable<infer Item>
		? Iterable extends ReadOnlyAsyncIterable<Item>
			? ReadOnlyAsyncIterator<Item, Item, Item>
			: ReadOnlyIterator<Item, Item, Item>
		: never;
