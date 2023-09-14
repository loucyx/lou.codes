import type { IsomorphicIterable } from "@vangware/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { GeneratorOutput } from "./types/GeneratorOutput.js";

/**
 * Take the given amount of items from the iterable or asynchronous iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * const take2 = take(2);
 * take2([1, 2, 3, 4, 5]); // [1, 2]
 * ```
 * @param amount Amount of items to take.
 * @returns Curried function with `amount` in context.
 */
export const take = (amount: bigint | number) =>
	handleIsomorphicIterable(
		iterable =>
			function* () {
				// eslint-disable-next-line functional/no-let
				let count = 0n;

				// eslint-disable-next-line functional/no-loop-statements
				for (const item of iterable) {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					count < amount ? (yield item, (count += 1n)) : undefined;
				}
			},
	)(
		iterable =>
			async function* () {
				// eslint-disable-next-line functional/no-let
				let count = 0n;

				// eslint-disable-next-line functional/no-loop-statements
				for await (const item of iterable) {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					count < amount ? (yield item, (count += 1n)) : undefined;
				}
			},
	) as <Iterable extends IsomorphicIterable>(
		iterable: Iterable,
	) => GeneratorOutput<Iterable>;
