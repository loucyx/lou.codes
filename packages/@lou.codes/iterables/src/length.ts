import { reduce } from "./reduce.js";

/**
 * Get the length of an iterable.
 *
 * @category Reducers
 * @example
 * ```typescript
 * length([1, 2, 3]); // 3
 * ```
 * @param iterable Iterable to get the length from.
 * @returns Promise with the length of the iterable.
 */
export const length = reduce(_ => (total: number) => total + 1)(0);
