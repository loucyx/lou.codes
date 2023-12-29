import type { IsomorphicIterable } from "@lou.codes/types";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Take the given amount of items from the iterable or asynchronous iterable.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const take2 = take(2);
 * take2([1, 2, 3, 4, 5]); // [1, 2]
 * ```
 * @param amount Amount of items to take.
 * @returns Curried function with `amount` in context.
 */
export const take =
	(amount: bigint | number) =>
	<Item>(iterable: IsomorphicIterable<Item>) =>
		createIterableIterator(async function* () {
			// eslint-disable-next-line functional/no-let
			let count = 0n;

			// eslint-disable-next-line functional/no-conditional-statements
			if (amount > 0) {
				// eslint-disable-next-line functional/no-loop-statements
				for await (const item of iterable) {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions, functional/no-conditional-statements
					if (count < amount) {
						yield item;
						// eslint-disable-next-line functional/no-expression-statements
						count += 1n;
					} else {
						break;
					}
				}
			}
		});
