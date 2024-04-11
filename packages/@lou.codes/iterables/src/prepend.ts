import type {
	ReadOnlyIterable,
	ReadOnlyIterableIterator,
} from "@lou.codes/types";
import { flip } from "@lou.codes/utils";
import { append } from "./append.js";

/**
 * Prepends one iterable to another.
 *
 * @category Generators
 * @example
 * ```typescript
 * const prependNumbers = prepend([0, 1, 2, 3, 4]);
 * prependNumbers(["foo", "bar"]); // [0, 1, 2, 3, 4, "foo", "bar"]
 * ```
 * @param initialIterable Iterable to be appended.
 * @returns Curried generator function with `initialIterable` set in context.
 */
export const prepend = flip(append) as <InitialItem>(
	initialIterable: ReadOnlyIterable<InitialItem>,
) => <TailItem>(
	tailIterable: ReadOnlyIterable<TailItem>,
) => ReadOnlyIterableIterator<InitialItem | TailItem>;
