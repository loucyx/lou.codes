import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Range iterable generator (from `from` to `to`).
 *
 * @category Generators
 * @example
 * ```typescript
 * [...range(1)(0)(5)]; // [0, 1, 2, 3, 4, 5]
 * [...range(1)(5)(0)]; // [5, 4, 3, 2, 1, 0]
 * ```
 * @param step Step size.
 * @returns Curried function with `step` set in context.
 */
export const range =
	<Step extends bigint | number>(step: Step) =>
	(from: Step extends bigint ? bigint : number) =>
	(to: Step extends bigint ? bigint : number) =>
		createIterableIterator(function* () {
			// eslint-disable-next-line functional/no-loop-statements
			for (
				let current = from as number;
				from < to ? current <= to : current >= to;
				// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
				current += (from < to ? step : -step) as number
			) {
				yield current as Step extends bigint ? bigint : number;
			}
		});
