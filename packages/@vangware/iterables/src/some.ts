import type {
	IsomorphicIterable,
	Predicate,
	Single,
	Unary,
} from "@vangware/types";
import { awaitableHandler } from "@vangware/utils";
import { every } from "./every.js";
import type { ReducerOutput } from "./types/ReducerOutput.js";

const someHandler = awaitableHandler((result: boolean) => !result);

/**
 * Evaluates items in an iterable or asynchronous iterable against a predicate
 * and returns `true` if any item evaluates to `true`.
 *
 * @category Reducers
 * @example
 * ```
 * const someEven = some((number: number) => number % 2 === 0);
 * someEven([1, 2, 3, 4]); // true
 * someEven([1, 3, 5, 7]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const some = <Item, Predicated extends Item = never>(
	predicate: Single<Predicated> extends Single<never>
		? Unary<Item, boolean>
		: Predicate<Item, Predicated>,
) => {
	const everyPredicate = every<Item>(item => !predicate(item));

	return <Iterable extends IsomorphicIterable<Item>>(iterable: Iterable) =>
		someHandler(everyPredicate(iterable)) as ReducerOutput<
			Iterable,
			boolean
		>;
};
