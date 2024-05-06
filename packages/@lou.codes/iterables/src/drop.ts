import type { Numeric, ReadOnlyIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import { filter } from "./filter.js";

/**
 * Drop the specified amount of items from the given iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * const drop2 = drop(2);
 * drop2([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 * @param amount Amount of items to drop.
 * @returns Curried function with `amount` in context.
 */
export const drop = (amount: Numeric) => {
	const amountFilter = <Item>(iterable: ReadOnlyIterable<Item>) => {
		let count = -1n;

		return filter(() => (count += 1n) >= amount)(
			iterable,
		) as ReadOnlyIterable<Item>;
	};

	return <Item>(iterable: ReadOnlyIterable<Item>) =>
		createIterableIterator(function* () {
			yield* amount > 0 ? amountFilter(iterable) : iterable;
		});
};
