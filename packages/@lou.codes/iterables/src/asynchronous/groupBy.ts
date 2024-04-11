import { EMPTY_ARRAY, EMPTY_OBJECT } from "@lou.codes/constants/empty.js";
import type {
	Maybe,
	ReadOnlyArray,
	ReadOnlyRecord,
	Unary,
} from "@lou.codes/types";
import { set } from "@lou.codes/utils";
import { reduce } from "./reduce.js";

/**
 * Groups values of an iterable or asynchronous iterable in an object based on
 * the output of the `grouper` function.
 *
 * @category Asynchronous Reducers
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

		return ((groups: ReadOnlyRecord<Key, Maybe<ReadOnlyArray<Item>>>) =>
			set(group)([...(groups[group] ?? EMPTY_ARRAY), item])(groups)) as (
			groups: ReadOnlyRecord<Key, Maybe<ReadOnlyArray<Item>>>,
		) => ReadOnlyRecord<Key, ReadOnlyArray<Item>>;
	})(EMPTY_OBJECT as ReadOnlyRecord<Key, ReadOnlyArray<Item>>);
