import { is } from "@lou.codes/predicates";
import type { IsomorphicIterable } from "@lou.codes/types";
import { some } from "./some.js";
import type { ReducerOutput } from "./types/ReducerOutput.js";

/**
 * Tries to find the given `searchItem` in iterable or asynchronous iterable.
 *
 * @category Reducers
 * @example
 * ```
 * const includesTwo = includes(2);
 * includesTwo([1, 2, 3, 4]); // true
 * includesTwo([1, 3, 5, 7]); // false
 * ```
 * @param searchItem Item to search.
 * @returns Curried function with `searchItem` set in context.
 */
export const includes = <SearchItem>(searchItem: SearchItem) =>
	// FIXME: Looks like we need HKT for this -_-
	some(is(searchItem)) as <Iterable extends IsomorphicIterable>(
		iterable: Iterable,
	) => ReducerOutput<Iterable, boolean>;
