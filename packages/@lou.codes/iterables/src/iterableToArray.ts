import { EMPTY_ARRAY, freeze } from "@lou.codes/constants";
import type {
	EmptyArray,
	IsomorphicIterableItem,
	ReadOnlyArray,
} from "@lou.codes/types";
import { reduce } from "./reduce.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Turns given iterable into an array.
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
	item => (array: ReadOnlyArray) => freeze([...array, item]),
)(EMPTY_ARRAY) as <Iterable extends ReadOnlyIterable>(
	iterable: Iterable,
) => ReadOnlyArray<IsomorphicIterableItem<Iterable>>;
