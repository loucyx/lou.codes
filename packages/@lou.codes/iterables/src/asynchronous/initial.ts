import type {
	IsomorphicIterable,
	IsomorphicIterableItem,
	IsomorphicIterableIterator,
} from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import { getIterator } from "./getIterator.js";

/**
 * Get all elements except the last one of an iterable or asynchronous iterable.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * initial([1, 2, 3]); // [1, 2]
 * ```
 * @param iterable Iterable to get the items from.
 * @returns Iterable with all items except the last one.
 */
export const initial = <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) =>
	createIterableIterator(async function* () {
		const iterator = getIterator(iterable);
		let item = await iterator.next();

		// eslint-disable-next-line functional/no-loop-statements
		for (; !Boolean(item.done); ) {
			const value = item.value;

			item = await iterator.next();

			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			Boolean(item.done) ? undefined : yield value;
		}
	}) as IsomorphicIterableIterator<IsomorphicIterableItem<Iterable>>;
