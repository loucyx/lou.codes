import type { IsomorphicIterable } from "@lou.codes/types";
import { getIterator } from "./getIterator.js";
import { handleCurriedIsomorphicIterable } from "./handleCurriedIsomorphicIterable.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Takes two iterables or asynchronous iterable and returns a new iterable or
 * asynchronous iterable with the length of the shortest iterable with tuples
 * containing the items from both.
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
export const zip = handleCurriedIsomorphicIterable(
	iterableFirst => iterableSecond =>
		function* () {
			const iteratorSecond = getIterator(iterableSecond);

			// eslint-disable-next-line functional/no-loop-statements
			for (const itemA of iterableFirst) {
				const { done = false, value } = iteratorSecond.next();

				// eslint-disable-next-line functional/no-conditional-statements
				if (done) {
					break;
				}

				yield [itemA, value] as const;
			}
		},
)(
	iterableFirst => iterableSecond =>
		async function* () {
			const iteratorSecond = getIterator(iterableSecond);

			// eslint-disable-next-line functional/no-loop-statements
			for await (const itemA of iterableFirst) {
				const { done = false, value } = await iteratorSecond.next();

				// eslint-disable-next-line functional/no-conditional-statements
				if (done) {
					break;
				}

				yield [itemA, value] as const;
			}
		},
) as <FirstIterable extends IsomorphicIterable>(
	iterableFirst: FirstIterable,
) => <SecondIterable extends IsomorphicIterable>(
	iterableSecond: SecondIterable,
) => FirstIterable extends IsomorphicIterable<infer FirstItem> ?
	SecondIterable extends IsomorphicIterable<infer SecondItem> ?
		FirstIterable extends ReadOnlyAsyncIterable<FirstItem> ?
			ReadOnlyAsyncIterableIterator<readonly [FirstItem, SecondItem]>
		: SecondIterable extends ReadOnlyAsyncIterable<SecondItem> ?
			ReadOnlyAsyncIterableIterator<readonly [FirstItem, SecondItem]>
		:	ReadOnlyIterableIterator<readonly [FirstItem, SecondItem]>
	:	never
:	never;
