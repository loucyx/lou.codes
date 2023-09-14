import type { IsomorphicIterable } from "@vangware/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { GeneratorOutput } from "./types/GeneratorOutput.js";

/**
 * Returns a single instance of each item in the iterable or asynchronous
 * iterable.
 *
 * @category Generators
 * @example
 * ```typescript
 * unique([1, 2, 3, 4, 1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be filtered.
 * @returns Generators with a single instance of each item of the iterable.
 */
export const unique = handleIsomorphicIterable(
	iterable =>
		function* () {
			const set = new Set();

			// eslint-disable-next-line functional/no-loop-statements
			for (const item of iterable) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				!set.has(item) ? (set.add(item), yield item) : undefined;
			}
		},
)(
	iterable =>
		async function* () {
			const set = new Set();

			// eslint-disable-next-line functional/no-loop-statements
			for await (const item of iterable) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				!set.has(item) ? (set.add(item), yield item) : undefined;
			}
		},
) as <Iterable extends IsomorphicIterable>(
	iterable: Iterable,
) => GeneratorOutput<Iterable>;
