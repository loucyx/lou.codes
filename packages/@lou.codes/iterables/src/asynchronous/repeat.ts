import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Repeat given item the specified amount of times (can be `BigInt` or
 * `Infinity` times) as an iterable.
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const repeat3Times = repeat(3);
 * repeat3Times("foo"); // ["foo", "foo", "foo"]
 * ```
 * @param item Item to repeat.
 * @returns Curried function with `item` in context.
 */
export const repeat =
	(times: bigint | number) =>
	<Item>(item: Item) =>
		// eslint-disable-next-line @typescript-eslint/require-await
		createIterableIterator(async function* () {
			// eslint-disable-next-line functional/no-conditional-statements
			if (times === Infinity) {
				// eslint-disable-next-line functional/no-loop-statements, @typescript-eslint/no-unnecessary-condition
				while (true) {
					yield item;
				}
				// eslint-disable-next-line functional/no-conditional-statements
			} else {
				// eslint-disable-next-line functional/no-let, functional/no-loop-statements
				for (let count = 0n; count < times; count += 1n) {
					yield item;
				}
			}
		});
