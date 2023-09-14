import type {
	Entry,
	EntryKey,
	EntryValue,
	IsomorphicIterable,
	IsomorphicIterableItem,
	ReadOnlyRecord,
} from "@vangware/types";
import { reduce } from "./reduce.js";
import type { ReducerOutput } from "./types/ReducerOutput.js";

/**
 * Takes an entries iterable or asynchronous iterable and returns an object.
 *
 * @category Reducers
 * @example
 * ```typescript
 * entriesToObject([["key", "value"]]); // { key: "value" }
 * entriesToObject([
 * 	["foo", "bar"],
 * 	["number", 1]
 * ]); // { foo: "bar", number: 1 }
 * ```
 * @returns Object constructed from entries.
 */
export const entriesToObject = reduce(
	<Key extends PropertyKey, Value>([key, value]: Entry<Key, Value>) =>
		(object: ReadOnlyRecord<Key, Value>) =>
			({ ...object, [key]: value }) as ReadOnlyRecord<Key, Value>,
	// eslint-disable-next-line no-null/no-null
)(Object.create(null) as ReadOnlyRecord) as <
	Iterable extends IsomorphicIterable<Entry>,
>(
	iterable: Iterable,
) => ReducerOutput<
	Iterable,
	ReadOnlyRecord<
		EntryKey<IsomorphicIterableItem<Iterable>>,
		EntryValue<IsomorphicIterableItem<Iterable>>
	>
>;
