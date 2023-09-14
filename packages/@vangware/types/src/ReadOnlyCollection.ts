import type { ArrayLike } from "./ArrayLike.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Read-only collection ({@link ArrayLike} or {@link ReadOnlyRecord}).
 *
 * @category Array
 * @category Object
 * @remarks
 * Read-only type union of {@link ArrayLike} or {@link ReadOnlyRecord}.
 * @example
 * ```typescript
 * const record: ReadOnly<Record<string, Array<number>>> = {
 * 	"🟢": [1, 2, 3],
 * 	"🟩": [4, 5, 6],
 * };
 * record["🟢"][0] = 7; // Error
 * ```
 * @see {@link ArrayLike}
 * @see {@link ReadOnlyRecord}
 *
 * @template Item Type of the items in the collection.
 */
export type ReadOnlyCollection<Item = unknown> =
	| ArrayLike<Item>
	| ReadOnlyRecord<PropertyKey, Item>;
