import type { KeyOf } from "./KeyOf.js";
import type { ReadOnlyCollection } from "./ReadOnlyCollection.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @remarks
 * This type is used to get the type of the values in a collection (items of
 * an `ArrayLike` or properties of a `Record`).
 * @example
 * ```typescript
 * const object = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const key: ValueOf<typeof object> = 1;
 * ```
 * @see {@link ReadOnlyCollection}
 *
 * @template Input Type of the collection.
 */
export type ValueOf<Input extends ReadOnlyCollection> = Input[KeyOf<Input> &
	keyof Input];
