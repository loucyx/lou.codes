import type {
	Head,
	IsomorphicIterable,
	IsomorphicIterableItem,
	Maybe,
	ReadOnlyArray,
} from "@lou.codes/types";
import { awaitableHandler } from "@lou.codes/utils";
import { getIterator } from "./getIterator.js";

/**
 * Get first element of an iterable or asynchronous iterable (`undefined` if
 * it is empty).
 *
 * @category Reducers
 * @example
 * ```typescript
 * head([1, 2, 3]); // 1
 * ```
 * @param iterable Iterable to get the first element from.
 * @returns First element of the iterable (`undefined` if empty).
 */
export const head = <Iterable extends IsomorphicIterable>(iterable: Iterable) =>
	awaitableHandler(
		({
			value,
		}: Readonly<Pick<IteratorResult<unknown, unknown>, "value">>) => value,
	)(getIterator(iterable).next()) as Iterable extends ReadOnlyArray
		? Head<Iterable>
		: Maybe<IsomorphicIterableItem<Iterable>>;
