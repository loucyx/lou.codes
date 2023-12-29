import { isIterable } from "@lou.codes/predicates";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Flattens one level of the given iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to flatten.
 * @returns Iterable with flatten items.
 */
export const flat = <Iterable extends ReadOnlyIterable>(iterable: Iterable) =>
	createIterableIterator(function* () {
		// eslint-disable-next-line functional/no-loop-statements
		for (const iterableOrItem of iterable) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			isIterable(iterableOrItem) ?
				yield* iterableOrItem
			:	yield iterableOrItem;
		}
	}) as Iterable extends ReadOnlyIterable<infer Item> ?
		Item extends ReadOnlyIterable<infer SubItem> ?
			ReadOnlyIterableIterator<SubItem>
		:	ReadOnlyIterableIterator<Item>
	:	never;
