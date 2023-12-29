import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

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
export const drop =
	(amount: bigint | number) =>
	<Item>(iterable: IsomorphicIterable<Item>) =>
		createIterableIterator(async function* () {
			// eslint-disable-next-line functional/no-let
			let count = 0n;

			// eslint-disable-next-line functional/no-conditional-statements
			if (amount > 0) {
				// eslint-disable-next-line functional/no-loop-statements
				for await (const item of iterable) {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					count >= amount ? yield item : (count += 1n);
				}
				// eslint-disable-next-line functional/no-conditional-statements
			} else {
				yield* iterable;
			}
		});
