import type { IsomorphicIterable, Unary } from "@lou.codes/types";
import { whenIsIterable } from "@lou.codes/utils";
import type { ReducerOutput } from "./types/ReducerOutput.js";

/**
 * For each function for iterables and asynchronous iterables.
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
export const forEach = <Item>(callback: Unary<Item, void>) =>
	whenIsIterable(iterable => {
		// eslint-disable-next-line functional/no-loop-statements
		for (const item of iterable) {
			callback(item as Item);
		}
	})(async (iterable: AsyncIterable<Item>) => {
		// eslint-disable-next-line functional/no-loop-statements
		for await (const item of iterable) {
			callback(item);
		}
	}) as <Iterable extends IsomorphicIterable<Item>>(
		iterable: Iterable,
	) => ReducerOutput<Iterable, void>;
