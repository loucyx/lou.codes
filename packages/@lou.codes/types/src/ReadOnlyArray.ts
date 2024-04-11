/**
 *  An alternative for TypeScript's `ReadonlyArray` type, with its type set to
 * `unknown` by default.
 *
 * @category Array
 * @remarks
 * There's already a native `ReadonlyArray` type, but this type has a default
 * type parameter to make it easier to use when the type of an array is
 * `unknown`.
 * @example
 * ```typescript
 * const array: ReadOnlyArray<{ "🟢": number }> = [{ "🟢": 1}, { "🟢": 2 }];
 * array[0]["🟢"] = 3; // Error
 * ```
 *
 * @template Item Type of the items in the array.
 */
export type ReadOnlyArray<Item = unknown> = ReadonlyArray<Item>;
