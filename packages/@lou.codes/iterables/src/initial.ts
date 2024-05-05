import type {
	Initial,
	IsomorphicIterableItem,
	ReadOnlyArray,
	ReadOnlyIterable,
	ReadOnlyIterableIterator,
} from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import { getIterator } from "./getIterator.js";

/**
 * Get all elements except the last one of an iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * initial([1, 2, 3]); // [1, 2]
 * ```
 * @param iterable Iterable to get the items from.
 * @returns Iterable with all items except the last one.
 */
export const initial = <Iterable extends ReadOnlyIterable>(
	iterable: Iterable,
) =>
	createIterableIterator(function* () {
		const iterator = getIterator(iterable);

		// eslint-disable-next-line functional/no-let
		let item = iterator.next();

		// eslint-disable-next-line functional/no-loop-statements
		for (; !Boolean(item.done); ) {
			const value = item.value;

			item = iterator.next();

			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			Boolean(item.done) ? undefined : yield value;
		}
	}) as ReadOnlyIterableIterator<
		Iterable extends ReadOnlyArray ? Initial<Iterable>[number]
		:	IsomorphicIterableItem<Iterable>
	>;
