import type { Enumerate } from "./Enumerate.js";

/**
 * Hours values in numeric format (from `0` to `23`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for hour values, limited to valid values from `0`
 * to `23`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const hours: Iterable<Hours> = [0, 1, 2, 3, 20, 21, 22, 23];
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type Hours = Enumerate<23>;
