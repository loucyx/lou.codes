import type { Unary } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Map for iterables.
 *
 * @category Generators
 * @example
 * ```typescript
 * const double = value => value * 2;
 * const mapDouble = map(double);
 *
 * mapDouble([1, 2, 3]); // [2, 4, 6]
 * ```
 * @param mapper Mapper function.
 * @returns Generator function with `mapper` function set in context.
 */
export const map =
	<Item, MappedItem>(mapper: Unary<Item, MappedItem>) =>
	(iterable: ReadOnlyIterable<Item>) =>
		createIterableIterator(function* () {
			// eslint-disable-next-line functional/no-loop-statements
			for (const item of iterable) {
				yield mapper(item);
			}
		});
