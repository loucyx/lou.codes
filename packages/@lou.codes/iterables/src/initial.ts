import type {
	Initial,
	IsomorphicIterableItem,
	ReadOnlyArray,
	ReadOnlyIterable,
	ReadOnlyIterableIterator,
} from "@lou.codes/types";
import { mutate } from "@lou.codes/utils";
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

		const item = {
			done: false,
			...iterator.next(),
		};

		// eslint-disable-next-line functional/no-loop-statements
		while (!item.done) {
			const next = {
				done: false,
				...iterator.next(),
			};

			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			next.done ? undefined : yield item.value;

			void mutate(next)(item);
		}
	}) as ReadOnlyIterableIterator<
		Iterable extends ReadOnlyArray ? Initial<Iterable>[number]
		:	IsomorphicIterableItem<Iterable>
	>;
