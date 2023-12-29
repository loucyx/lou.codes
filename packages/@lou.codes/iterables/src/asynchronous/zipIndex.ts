import { range } from "./range.js";
import { zip } from "./zip.js";

/**
 * Yields a tuple for each item in the iterable with the index of said item.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * zipIndex(["foo", "bar"]); // [[0, "foo"], [1, "bar"]]
 * ```
 * @param iterable Iterable to add indexes to.
 * @yields Tuples with the index of each item.
 */
export const zipIndex = zip(range(1)(0)(Infinity));
