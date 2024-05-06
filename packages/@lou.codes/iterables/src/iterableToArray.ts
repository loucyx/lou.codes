import type {
	IsomorphicIterableItem,
	ReadOnlyArray,
	ReadOnlyIterable,
} from "@lou.codes/types";

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
export const iterableToArray = <Iterable extends ReadOnlyIterable>(
	iterable: Iterable,
) => [...iterable] as ReadOnlyArray<IsomorphicIterableItem<Iterable>>;
