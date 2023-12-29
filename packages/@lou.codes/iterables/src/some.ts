import type { Predicate, Single, Unary } from "@lou.codes/types";
import { negate } from "@lou.codes/utils";
import { every } from "./every.js";
import type { ReadOnlyIterable } from "./types/ReadOnlyIterable.js";

/**
 * Evaluates items in an iterable against a predicate and returns `true` if any
 * item evaluates to `true`.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const someEven = some((number: number) => number % 2 === 0);
 * someEven([1, 2, 3, 4]); // true
 * someEven([1, 3, 5, 7]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const some = <Item, Predicated extends Item = never>(
	predicate: Single<Predicated> extends Single<never> ? Unary<Item, boolean>
	:	Predicate<Item, Predicated>,
) => {
	const everyPredicate = every(negate(predicate) as (item: Item) => boolean);

	return (iterable: ReadOnlyIterable<Item>) => !everyPredicate(iterable);
};
