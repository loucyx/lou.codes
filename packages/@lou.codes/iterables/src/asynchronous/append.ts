import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Appends one iterable or asynchronous iterable to another.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const appendNumbers = append([0, 1, 2, 3, 4]);
 *
 * appendNumbers(["foo", "bar"]); // ["foo", "bar", 0, 1, 2, 3, 4]
 * appendNumbers([]); // [0, 1, 2, 3, 4]
 * ```
 * @param tailIterable Iterable or asynchronous to be appended.
 * @returns Curried generator function with `tailIterable` set in context.
 */
export const append =
	<TailItem>(tailIterable: IsomorphicIterable<TailItem>) =>
	<InitialItem>(initialIterable: IsomorphicIterable<InitialItem>) =>
		createIterableIterator(async function* () {
			yield* initialIterable;
			yield* tailIterable;
		});
