import { iteratorSymbol } from "@lou.codes/predicates";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Get a `Symbol.iterator` from an iterable.
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
export const getIterator = <Iterable extends ReadOnlyIterable>(
	iterable: Iterable,
) =>
	iterable[iteratorSymbol]() as Iterable extends (
		ReadOnlyIterable<infer Item>
	) ?
		Iterator<Item, Item, Item>
	:	never;
