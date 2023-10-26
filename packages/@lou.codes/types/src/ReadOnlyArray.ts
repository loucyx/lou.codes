import type { ReadOnly } from "./ReadOnly.js";

/**
 * Read-only array.
 *
 * @category Array
 * @remarks
 * There's already a native `ReadonlyArray` type, but this type has a default
 * type parameter to make it easier to use when the type of an array is
 * `unknown`, plus it recursively makes all the items in the array read-only.
 * @example
 * ```typescript
 * const array: ReadOnlyArray<{ "🟢": number }> = [{ "🟢": 1}, { "🟢": 2 }];
 * array[0]["🟢"] = 3; // Error
 * ```
 * @see {@link ReadOnly}
 *
 * @template Item Type of the items in the array.
 */
export type ReadOnlyArray<Item = unknown> = ReadOnly<Array<Item>>;
