import type { Filter, Predicate, Single, Unary } from "@vangware/types";

/**
 * Takes a function and returns a copy with negated output.
 *
 * @category Functions
 * @example
 * ```typescript
 * const isPositive = (value: number) => value >= 0;
 * const isNegative = not(isPositive);
 *
 * isPositive(1); // true
 * isNegative(1); // false
 * ```
 * @param predicate Function to be negated.
 * @returns Source function with negated output.
 */
export const negate = <Item, Predicated extends Item = never>(
	predicate: Single<Predicated> extends Single<never>
		? Filter<Item>
		: Predicate<Item, Predicated>,
) =>
	((input: Item) =>
		!predicate(input)) as Single<Predicated> extends Single<never>
		? Unary<Item, boolean>
		: Predicate<Item, Exclude<Item, Predicated>>;
