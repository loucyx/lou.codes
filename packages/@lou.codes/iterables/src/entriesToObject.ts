import { EMPTY_OBJECT } from "@lou.codes/constants/empty.js";
import type {
	Entry,
	EntryKey,
	EntryValue,
	ReadOnlyIterable,
	ReadOnlyRecord,
} from "@lou.codes/types";
import { set } from "@lou.codes/utils";
import { reduce } from "./reduce.js";

/**
 * Takes an entries iterable and returns an object.
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
		set(key)(value) as (
			object: ReadOnlyRecord<Key, Value>,
		) => typeof object,
)(EMPTY_OBJECT) as <Item extends Entry>(
	iterable: ReadOnlyIterable<Item>,
) => ReadOnlyRecord<EntryKey<Item>, EntryValue<Item>>;
