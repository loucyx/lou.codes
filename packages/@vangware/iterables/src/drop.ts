import type { IsomorphicIterable } from "@vangware/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { GeneratorOutput } from "./types/GeneratorOutput.js";

/**
 * Drop the specified amount of items from the given iterable or asynchronous
 * iterable.
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
export const drop = (amount: bigint | number) =>
	handleIsomorphicIterable(
		iterable =>
			function* () {
				// eslint-disable-next-line functional/no-let
				let count = 0n;

				// eslint-disable-next-line functional/no-conditional-statements
				if (amount > 0) {
					// eslint-disable-next-line functional/no-loop-statements
					for (const item of iterable) {
						// eslint-disable-next-line @typescript-eslint/no-unused-expressions
						count >= amount ? yield item : (count += 1n);
					}
					// eslint-disable-next-line functional/no-conditional-statements
				} else {
					yield* iterable;
				}
			},
	)(
		iterable =>
			async function* () {
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
			},
	) as <Iterable extends IsomorphicIterable>(
		iterable: Iterable,
	) => GeneratorOutput<Iterable>;
