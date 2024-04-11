import type {
	Head,
	IsomorphicIterableItem,
	Maybe,
	ReadOnlyArray,
	ReadOnlyIterable,
} from "@lou.codes/types";
import { getIterator } from "./getIterator.js";

/**
 * Get first element of an iterable (`undefined` if it is empty).
 *
 * @category Reducers
 * @example
 * ```typescript
 * head([1, 2, 3]); // 1
 * ```
 * @param iterable Iterable to get the first element from.
 * @returns First element of the iterable (`undefined` if empty).
 */
export const head = <Iterable extends ReadOnlyIterable>(iterable: Iterable) =>
	getIterator(iterable).next().value as Iterable extends ReadOnlyArray ?
		Head<Iterable>
	:	Maybe<IsomorphicIterableItem<Iterable>>;
