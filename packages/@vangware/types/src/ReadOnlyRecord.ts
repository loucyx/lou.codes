import type { ReadOnly } from "./ReadOnly.js";

/**
 * Read-only record.
 *
 * @category Object
 * @remarks
 * There's already a native `Readonly` and `Record` type, but this type has
 * default type parameters to make it easier to use when the type of a record is
 * `unknown`, plus it recursively makes all the values in the record read-only.
 * @example
 * ```typescript
 * const record: ReadOnlyRecord<string, Array<number>> = {
 * 	"🟢": [1, 2, 3],
 * 	"🟩": [4, 5, 6],
 * };
 * record["🟢"][0] = 7; // Error
 * ```
 * @see {@link ReadOnly}
 *
 * @template Key Type of the keys in the record.
 * @template Value Type of the values in the record.
 */
export type ReadOnlyRecord<
	Key extends PropertyKey = PropertyKey,
	Value = unknown,
> = ReadOnly<Record<Key, Value>>;
