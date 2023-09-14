import { isIterable } from "@vangware/predicates";
import type {
	Function,
	IsomorphicIterable,
	ReadOnlyArray,
	Unary,
} from "@vangware/types";
import { createIterableIterator } from "./createIterableIterator.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Takes a generator for iterables, then a generator for async iterables and
 * last an iterable, using the proper generator automatically.
 *
 * @category Common
 * @example
 * ```typescript
 * const handle = handleIsomorphicIterable(
 * 	iterable => function* () {
 * 		yield* iterable;
 * 	}
 * )(
 * 	iterable => async function* () {
 * 		yield* iterable;
 * 	}
 * );
 *
 * handle(nonAsyncIterable); // IterableIterator
 * handle(asyncIterable); // AsyncIterableIterator
 * ```
 * @param iterator Function to be used with non async iterables.
 * @returns Curried function with iterator in context.
 */
export const handleIsomorphicIterable =
	<Item = unknown, Output = unknown>(
		iterator: Unary<
			Iterable<Item>,
			Function<ReadOnlyArray<never>, Generator<Output, void, void>>
		>,
	) =>
	(
		asyncIterator: Unary<
			IsomorphicIterable<Item>,
			Function<ReadOnlyArray<never>, AsyncGenerator<Output, void, void>>
		>,
	) =>
	<Iterable extends IsomorphicIterable<Item>>(iterable: Iterable) =>
		createIterableIterator(
			isIterable(iterable) ? iterator(iterable) : asyncIterator(iterable),
		) as Iterable extends ReadOnlyAsyncIterable<Item>
			? ReadOnlyAsyncIterableIterator<Output>
			: ReadOnlyIterableIterator<Output>;
