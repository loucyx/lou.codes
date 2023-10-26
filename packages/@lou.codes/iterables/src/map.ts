import type { IsomorphicIterable, Unary } from "@lou.codes/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";
import type { ReadOnlyAsyncIterableIterator } from "./types/ReadOnlyAsyncIterableIterator.js";
import type { ReadOnlyIterableIterator } from "./types/ReadOnlyIterableIterator.js";

/**
 * Map for iterables and asynchronous iterables.
 *
 * @category Generators
 * @example
 * ```
 * const double = value => value * 2;
 * const mapDouble = map(double);
 *
 * mapDouble([1, 2, 3]); // [2, 4, 6]
 * ```
 * @param mapper Mapper function.
 * @returns Generator function with `mapper` function set in context.
 */
export const map = <Item, MappedItem>(mapper: Unary<Item, MappedItem>) =>
	handleIsomorphicIterable<Item, MappedItem>(
		iterable =>
			function* () {
				// eslint-disable-next-line functional/no-loop-statements
				for (const item of iterable) {
					yield mapper(item);
				}
			},
	)(
		iterable =>
			async function* () {
				// eslint-disable-next-line functional/no-loop-statements
				for await (const item of iterable) {
					yield mapper(item);
				}
			},
	) as <Iterable extends IsomorphicIterable<Item>>(
		iterable: Iterable,
	) => Iterable extends ReadOnlyAsyncIterable<Item>
		? ReadOnlyAsyncIterableIterator<MappedItem>
		: ReadOnlyIterableIterator<MappedItem>;
