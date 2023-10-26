import { isIsomorphicIterable, isIterable } from "@lou.codes/predicates";
import type { IsomorphicIterable } from "@lou.codes/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Flattens one level of the given iterable or asynchronous iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to flatten.
 * @returns Iterable with flatten items.
 */
export const flat = handleIsomorphicIterable(
	iterable =>
		function* () {
			// eslint-disable-next-line functional/no-loop-statements
			for (const iterableOrItem of iterable) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				isIterable(iterableOrItem)
					? yield* iterableOrItem
					: yield iterableOrItem;
			}
		},
)(
	iterable =>
		async function* () {
			// eslint-disable-next-line functional/no-loop-statements
			for await (const iterableOrItem of iterable) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				isIsomorphicIterable(iterableOrItem)
					? yield* iterableOrItem
					: yield iterableOrItem;
			}
		},
) as <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) => Iterable extends IsomorphicIterable<infer Item>
	? Item extends IsomorphicIterable<infer SubItem>
		? Item extends ReadOnlyAsyncIterable<SubItem>
			? ReadOnlyAsyncIterableIterator<SubItem>
			: ReadOnlyIterableIterator<SubItem>
		: Iterable extends ReadOnlyAsyncIterable<Item>
		? ReadOnlyAsyncIterableIterator<Item>
		: ReadOnlyIterableIterator<Item>
	: never;
