import type { IsomorphicIterable } from "@lou.codes/types";
import { flip } from "@lou.codes/utils";
import { append } from "./append.js";
import type { createIterableIterator } from "./createIterableIterator.js";

/**
 * Prepends one iterable or asynchronous iterable to another.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const prependNumbers = prepend([0, 1, 2, 3, 4]);
 * prependNumbers(["foo", "bar"]); // [0, 1, 2, 3, 4, "foo", "bar"]
 * ```
 * @param initialIterable Iterable or asynchronous iterable to be appended.
 * @returns Curried generator function with `initialIterable` set in context.
 */
export const prepend = flip(append) as <InitialItem>(
	initialIterable: IsomorphicIterable<InitialItem>,
) => <TailItem>(
	tailIterable: IsomorphicIterable<TailItem>,
) => ReturnType<
	typeof createIterableIterator<
		() => AsyncGenerator<Awaited<InitialItem> | Awaited<TailItem>>
	>
>;
