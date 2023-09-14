import type {
	Maybe,
	ReadOnlyArray,
	ReadOnlyRecord,
	Unary,
} from "@vangware/types";
import { reduce } from "./reduce.js";

/**
 * Groups values of an iterable or asynchronous iterable in an object based on
 * the output of the `grouper` function.
 *
 * @category Reducers
 * @example
 * ```typescript
 * const groupByType = groupBy((value: number) => number % 2 === 0 ? "even" : "odd");
 * groupByType([1, 2, 3, 4, 5]); // { even: [2, 4], odd: [1, 3, 5] }
 * ```
 * @param grouper Grouper function.
 * @returns Object with grouped values.
 */
export const groupBy = <Item, Key extends PropertyKey>(
	grouper: Unary<Item, Key>,
) =>
	reduce((item: Item) => {
		const group = grouper(item);

		return (groups: ReadOnlyRecord<Key, Maybe<ReadOnlyArray<Item>>>) =>
			({
				...groups,
				[group]: [
					...((groups[group as keyof typeof groups] ??
						[]) as ReadOnlyArray<Item>),
					item,
				],
			}) as ReadOnlyRecord<Key, ReadOnlyArray<Item>>;
		// eslint-disable-next-line no-null/no-null
	})(Object.create(null) as ReadOnlyRecord<Key, ReadOnlyArray<Item>>);
