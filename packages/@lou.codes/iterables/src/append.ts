import type { ReadOnlyIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Appends one iterable to another.
 *
 * @category Generators
 * @example
 * ```typescript
 * const appendNumbers = append([0, 1, 2, 3, 4]);
 *
 * appendNumbers(["foo", "bar"]); // ["foo", "bar", 0, 1, 2, 3, 4]
 * appendNumbers([]); // [0, 1, 2, 3, 4]
 * ```
 * @param tailIterable Iterable to be appended.
 * @returns Curried generator function with `tailIterable` set in context.
 */
export const append =
	<TailItem>(tailIterable: ReadOnlyIterable<TailItem>) =>
	<InitialItem>(initialIterable: ReadOnlyIterable<InitialItem>) =>
		createIterableIterator(function* () {
			yield* initialIterable;
			yield* tailIterable;
		});
