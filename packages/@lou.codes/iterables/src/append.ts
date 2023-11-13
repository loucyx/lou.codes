import type { IsomorphicIterable } from "@lou.codes/types";
import { handleCurriedIsomorphicIterable } from "./handleCurriedIsomorphicIterable.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Appends one iterable or asynchronous iterable to another.
 *
 * @category Generators
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
export const append = handleCurriedIsomorphicIterable(
	tailIterable => initialIterable =>
		function* () {
			yield* initialIterable;
			yield* tailIterable;
		},
)(
	tailIterable => initialIterable =>
		async function* () {
			yield* initialIterable;
			yield* tailIterable;
		},
) as <TailIterable extends IsomorphicIterable>(
	tailIterable: TailIterable,
) => <InitialIterable extends IsomorphicIterable>(
	initialIterable: InitialIterable,
) => TailIterable extends IsomorphicIterable<infer TailItem> ?
	InitialIterable extends IsomorphicIterable<infer InitialItem> ?
		TailIterable extends ReadOnlyAsyncIterable<TailItem> ?
			ReadOnlyAsyncIterableIterator<InitialItem | TailItem>
		: InitialIterable extends ReadOnlyAsyncIterable<InitialItem> ?
			ReadOnlyAsyncIterableIterator<InitialItem | TailItem>
		:	ReadOnlyIterableIterator<InitialItem | TailItem>
	:	never
:	never;
