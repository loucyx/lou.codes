import { is } from "@lou.codes/predicates";
import { some } from "./some.js";

/**
 * Tries to find the given `searchItem` in iterable or asynchronous iterable.
 *
 * @category Asynchronous Reducers
 * @example
 * ```typescript
 * const includesTwo = includes(2);
 * includesTwo([1, 2, 3, 4]); // true
 * includesTwo([1, 3, 5, 7]); // false
 * ```
 * @param searchItem Item to search.
 * @returns Curried function with `searchItem` set in context.
 */
export const includes = <SearchItem>(searchItem: SearchItem) =>
	some(is(searchItem));
