import type { IsomorphicIterable } from "@vangware/types";
import type { ReadOnlyAsyncIterable } from "./ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./ReadOnlyIterableIterator.js";

/**
 * `IsomorphicIterable` generator function optional return value.
 *
 * @category Generators
 * @remarks
 * Generator functions in this library can return either an
 * {@link ReadOnlyAsyncIterableIterator} or an {@link ReadOnlyIterableIterator}
 * depending on the input. This type simplifies the output of said functions.
 * @see {@link ReadOnlyAsyncIterable}
 * @see {@link ReadOnlyAsyncIterableIterator}
 * @see {@link ReadOnlyIterableIterator}
 *
 * @template Iterable `IsomorphicIterable` to get the output from.
 */
export type GeneratorOutput<Iterable> = Iterable extends IsomorphicIterable<
	infer Item
>
	? Iterable extends ReadOnlyAsyncIterable<Item>
		? ReadOnlyAsyncIterableIterator<Item>
		: ReadOnlyIterableIterator<Item>
	: never;
