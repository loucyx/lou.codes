import type { IsomorphicIterable, Numeric } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";
import { filter } from "./filter.js";

/**
 * Drop the specified amount of items from the given iterable or asynchronous
 * iterable.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const drop2 = drop(2);
 * drop2([1, 2, 3, 4, 5]); // [3, 4, 5]
 * ```
 * @param amount Amount of items to drop.
 * @returns Curried function with `amount` in context.
 */
export const drop = (amount: Numeric) => {
	const amountFilter = <Item>(iterable: IsomorphicIterable<Item>) => {
		let count = -1n;

		return filter(() => (count += 1n) >= amount)(
			iterable,
		) as IsomorphicIterable<Item>;
	};

	return <Item>(iterable: IsomorphicIterable<Item>) =>
		createIterableIterator(async function* () {
			yield* amount > 0 ? amountFilter(iterable) : iterable;
		});
};
