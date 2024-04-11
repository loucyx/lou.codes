import type {
	Predicate,
	ReadOnlyIterable,
	Single,
	Unary,
} from "@lou.codes/types";

/**
 * Evaluates items in an iterable against a predicate and returns `true` if all
 * items evaluates to `true`.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const everyEven = every((number: number) => number % 2 === 0);
 * everyEven([2, 4, 6, 8]); // true
 * everyEven([1, 2, 3, 4]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const every =
	<Item, Predicated extends Item = never>(
		predicate: Single<Predicated> extends Single<never> ?
			Unary<Item, boolean>
		:	Predicate<Item, Predicated>,
	) =>
	(iterable: ReadOnlyIterable<Item>) => {
		// eslint-disable-next-line functional/no-loop-statements
		for (const item of iterable) {
			// eslint-disable-next-line functional/no-conditional-statements
			if (!predicate(item)) {
				return false;
			}
		}

		return true;
	};
