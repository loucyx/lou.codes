import type { IsomorphicIterable, Reducer } from "@lou.codes/types";
import { awaitableHandler } from "@lou.codes/utils";
import { forEach } from "./forEach.js";
import type { ReducerOutput } from "./types/ReducerOutput.js";

/**
 * Reducer function for iterables and asynchronous iterables.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const sum = Accumulator<number>(item => total => total + item);
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
	<Iterable extends IsomorphicIterable<Item>>(iterable: Iterable) => {
		// eslint-disable-next-line functional/no-let
		let accumulator: Accumulator = initialValue;

		return awaitableHandler(_ => accumulator)(
			forEach((item: Item) => (accumulator = reducer(item)(accumulator)))(
				iterable,
			),
		) as ReducerOutput<Iterable, Accumulator>;
	};
