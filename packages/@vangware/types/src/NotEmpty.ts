import type { ArrayLike } from "./ArrayLike.js";
import type { Empty } from "./Empty.js";

/**
 * Type for a non-empty `ArrayLike`, `object` or `string`.
 *
 * @category Array
 * @category Object
 * @category String
 * @remarks
 * This type is useful for cases where you want to ensure that a value is not
 * empty. For example, if you have an array that should always have at least
 * one element, you could type it as `NotEmpty<ArrayLike<ElementType>>`.
 * @example
 * ```typescript
 * const notEmptyString: NotEmpty<string> = "🟢";
 * const notEmptyArray: NotEmpty<ReadOnlyArray> = ["🟢", "🟩"];
 * const notEmptyRecord: NotEmpty<ReadOnlyRecord> = { "🟢": "🟩" };
 * ```
 * @see {@link Empty}
 *
 * @template Type The type to check.
 */
export type NotEmpty<Type extends ArrayLike | object | string> = Exclude<
	Type,
	Empty
>;
