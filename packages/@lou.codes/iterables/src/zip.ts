import { createIterableIterator } from "./createIterableIterator.js";
import { getIterator } from "./getIterator.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Takes two iterables and returns a new iterable with the length of the
 * shortest iterable with tuples containing the items from both.
 *
 * @category Generators
 * @example
 * ```typescript
 * const zipNumbers = zip([0, 1, 2]);
 * zipNumbers([3, 4, 5]); // [[0, 3], [1, 4], [2, 5]]
 * ```
 * @param iterableFirst One of the iterables to be zipped.
 * @returns Curried function with `iterableFirst` in context.
 */
export const zip =
	<ItemFirst>(iterableFirst: ReadOnlyIterable<ItemFirst>) =>
	<ItemSecond>(iterableSecond: ReadOnlyIterable<ItemSecond>) =>
		createIterableIterator(function* () {
			const iteratorSecond = getIterator(iterableSecond);

			// eslint-disable-next-line functional/no-loop-statements
			for (const itemFirst of iterableFirst) {
				const { done = false, value } = iteratorSecond.next();

				// eslint-disable-next-line functional/no-conditional-statements
				if (done) {
					break;
				}

				yield [itemFirst, value] as const;
			}
		});
