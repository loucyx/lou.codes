import { freeze } from "@lou.codes/constants/Object.js";
import { EMPTY_OBJECT } from "@lou.codes/constants/empty.js";
import type {
	Entry,
	EntryKey,
	EntryValue,
	ReadOnlyIterable,
	ReadOnlyRecord,
} from "@lou.codes/types";
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
		(object: ReadOnlyRecord<Key, Value>) =>
			freeze({ ...object, [key]: value }) as ReadOnlyRecord<Key, Value>,
)(EMPTY_OBJECT) as <Item extends Entry>(
	iterable: ReadOnlyIterable<Item>,
) => ReadOnlyRecord<EntryKey<Item>, EntryValue<Item>>;
