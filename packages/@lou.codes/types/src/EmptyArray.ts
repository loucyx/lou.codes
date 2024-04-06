import type { EMPTY_ARRAY } from "@lou.codes/constants/empty.js";

/**
 * Empty array.
 *
 * @category Array
 * @remarks
 * This is a type alias for an readonly empty array. Trying to access items on
 * it will give a compile-time error.
 * @example
 * ```typescript
 * const emptyArray: EmptyArray = [];
 * ```
 */
export type EmptyArray = typeof EMPTY_ARRAY;
