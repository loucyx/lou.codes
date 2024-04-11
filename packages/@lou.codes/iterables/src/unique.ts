import type { ReadOnlyIterable } from "@lou.codes/types";
import { constructSet } from "@lou.codes/utils";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Returns a single instance of each item in the iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * unique([1, 2, 3, 4, 1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be filtered.
 * @returns Generators with a single instance of each item of the iterable.
 */
export const unique = <Item>(iterable: ReadOnlyIterable<Item>) =>
	createIterableIterator(function* () {
		const set = constructSet<Item>();

		// eslint-disable-next-line functional/no-loop-statements
		for (const item of iterable) {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			set.has(item) ? undefined : (set.add(item), yield item);
		}
	});
