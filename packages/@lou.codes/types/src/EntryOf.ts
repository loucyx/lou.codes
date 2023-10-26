import type { Entry } from "./Entry.js";
import type { KeyOf } from "./KeyOf.js";
import type { ReadOnlyCollection } from "./ReadOnlyCollection.js";
import type { ValueOf } from "./ValueOf.js";

/**
 * Object or array {@link Entry}.
 *
 * @category Array
 * @category Object
 * @remarks
 * Get the {@link Entry} type out of an object or array.
 * @example
 * ```typescript
 * const object = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const entries: EntryOf<typeof object> = Object.entries(object)[0];
 * ```
 * @see {@link Entry}
 * @see {@link KeyOf}
 * @see {@link ReadOnlyCollection}
 * @see {@link ValueOf}
 *
 * @template Input Array or record type.
 */
export type EntryOf<Input extends ReadOnlyCollection> = Entry<
	KeyOf<Input>,
	ValueOf<Input>
>;
