import type {
	IsomorphicIterable,
	Predicate,
	Single,
	Unary,
} from "@lou.codes/types";
import { handleIsomorphicIterable } from "./handleIsomorphicIterable.js";
import type { GeneratorOutput } from "./types/GeneratorOutput.js";

/**
 * Filters items in an iterable or asynchronous iterable against a predicate and
 * returns items that evaluated to `true`.
 *
 * @category Generators
 * @example
 * ```
 * const filterEven = filter((number: number) => number % 2 === 0);
 *
 * iterableToArray(filterEven([1, 2, 3, 4])); // [2, 4]
 * iterableToArray(filterEven([1, 3, 5, 7])); // []
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const filter = <Item, Filtered extends Item = never>(
	predicate: Single<Filtered> extends Single<never>
		? Unary<Item, boolean>
		: Predicate<Item, Filtered>,
) =>
	handleIsomorphicIterable<Item, Filtered>(
		iterable =>
			function* () {
				// eslint-disable-next-line functional/no-loop-statements
				for (const item of iterable) {
					// eslint-disable-next-line functional/no-conditional-statements
					if (predicate(item)) {
						yield item as Filtered;
					}
				}
			},
	)(
		iterable =>
			async function* () {
				// eslint-disable-next-line functional/no-loop-statements
				for await (const item of iterable) {
					// eslint-disable-next-line functional/no-conditional-statements
					if (predicate(item)) {
						yield item as Filtered;
					}
				}
			},
	) as <Iterable extends IsomorphicIterable<Item>>(
		iterable: Iterable,
	) => GeneratorOutput<Iterable>;
