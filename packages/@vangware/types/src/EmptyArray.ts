/**
 * Empty array.
 *
 * @category Array
 * @remarks
 * This is a type alias for an readonly empty array. Trying to access items on
 * it should give a compile-time error.
 * @example
 * ```typescript
 * const emptyArray: EmptyArray = [];
 * ```
 */
export type EmptyArray = readonly [];
