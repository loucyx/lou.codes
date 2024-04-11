import type { ReadOnlyIterable, Unary } from "@lou.codes/types";

/**
 * For each function for iterables.
 *
 * @category Common
 * @example
 * ```typescript
 * const logEach = forEach(console.log);
 *
 * logEach([1, 2, 3]); // Logs 1, 2 and 3 separately
 * ```
 * @param callback Function to be called for every item of the iterable.
 * @returns Curried function that expects an iterable to loop over and has `callback` set in context.
 */
export const forEach =
	<Item>(callback: Unary<Item, void>) =>
	(iterable: ReadOnlyIterable<Item>) => {
		// eslint-disable-next-line functional/no-loop-statements
		for (const item of iterable) {
			callback(item);
		}
	};
