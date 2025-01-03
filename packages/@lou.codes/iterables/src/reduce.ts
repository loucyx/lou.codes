import type { ReadOnlyIterable, Reducer } from "@lou.codes/types";
import { forEach } from "./forEach.js";

/**
 * Reducer function for iterables.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const sum = reduce<number>(item => total => total + item);
 * const sumFrom0 = sum(0);
 *
 * sumFrom0([1, 2, 3]); // 6
 * ```
 * @param reducer Reducer function.
 * @returns Curried function with `reducer` in context.
 */
export const reduce =
	<Item, Accumulator>(reducer: Reducer<Item, Accumulator>) =>
	(initialValue: Accumulator) =>
	(iterable: ReadOnlyIterable<Item>) => {
		let accumulator: Accumulator = initialValue;

		return (
			forEach((item: Item) => (accumulator = reducer(item)(accumulator)))(
				iterable,
			),
			accumulator
		);
	};
