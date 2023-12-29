import type { Filter } from "@lou.codes/types";
import { filter } from "./filter.js";
import { length } from "./length.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Counts the number of items that satisfy a predicate in the given iterable.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const countOdds = count((number: number) => number % 2 !== 1);
 * countOdds([1, 2, 3, 4, 5]); // 3
 * countOdds([0, 2, 4, 6, 8]); // 0
 * ```
 * @param predicate Predicate function for items to be counted.
 * @returns Curried function with `predicate` in context.
 */
export const count = <Item>(predicate: Filter<Item>) => {
	const predicateFilter = filter(predicate);

	return (iterable: ReadOnlyIterable<Item>) =>
		length(predicateFilter(iterable));
};
