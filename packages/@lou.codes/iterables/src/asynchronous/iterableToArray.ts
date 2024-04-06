import { freeze } from "@lou.codes/constants/Object.js";
import { EMPTY_ARRAY } from "@lou.codes/constants/empty.js";
import type {
	EmptyArray,
	IsomorphicIterable,
	IsomorphicIterableItem,
	ReadOnlyArray,
} from "@lou.codes/types";
import { reduce } from "./reduce.js";

/**
 * Turns given iterable or asynchronous iterable into an array.
 *
 * @category Asynchronous Reducers
 * @example
 * ```typescript
 * iterableToArray([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be turned into an array.
 * @returns Array made of iterable items.
 */
export const iterableToArray = reduce<unknown, ReadOnlyArray | EmptyArray>(
	item => (array: ReadOnlyArray) => freeze([...array, item]),
)(EMPTY_ARRAY) as <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) => Promise<ReadOnlyArray<IsomorphicIterableItem<Iterable>>>;
