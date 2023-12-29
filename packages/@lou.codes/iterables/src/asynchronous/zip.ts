import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import { getIterator } from "./getIterator.js";

/**
 * Takes two iterables or asynchronous iterable and returns a new iterable or
 * asynchronous iterable with the length of the shortest iterable with tuples
 * containing the items from both.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const zipNumbers = zip([0, 1, 2]);
 * zipNumbers([3, 4, 5]); // [[0, 3], [1, 4], [2, 5]]
 * ```
 * @param iterableFirst One of the iterables to be zipped.
 * @returns Curried function with `iterableFirst` in context.
 */
export const zip =
	<ItemFirst>(iterableFirst: IsomorphicIterable<ItemFirst>) =>
	<ItemSecond>(iterableSecond: IsomorphicIterable<ItemSecond>) =>
		createIterableIterator(async function* () {
			const asyncIteratorSecond = getIterator(iterableSecond);

			// eslint-disable-next-line functional/no-loop-statements
			for await (const itemFirst of iterableFirst) {
				const itemSecond = await asyncIteratorSecond.next();

				// eslint-disable-next-line functional/no-conditional-statements
				if (itemSecond.done ?? false) {
					break;
				}

				yield [itemFirst, itemSecond.value] as const;
			}
		});
