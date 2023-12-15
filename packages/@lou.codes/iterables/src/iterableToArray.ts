import { EMPTY_ARRAY } from "@lou.codes/constants";
import type {
	EmptyArray,
	IsomorphicIterable,
	ReadOnlyArray,
} from "@lou.codes/types";
import { reduce } from "./reduce.js";
import type { ReadOnlyAsyncIterable } from "./types/ReadOnlyAsyncIterable.js";

/**
 * Turns given iterable or asynchronous iterable into an array.
 *
 * @category Reducers
 * @example
 * ```typescript
 * iterableToArray([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be turned into an array.
 * @returns Array made of iterable items.
 */
export const iterableToArray = reduce<unknown, ReadOnlyArray | EmptyArray>(
	item => (array: ReadOnlyArray) => [...array, item],
)(EMPTY_ARRAY) as <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) => Iterable extends IsomorphicIterable<infer Item> ?
	Iterable extends ReadOnlyAsyncIterable<Item> ?
		Promise<ReadOnlyArray<Item>>
	:	ReadOnlyArray<Item>
:	never;
