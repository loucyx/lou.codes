import type { Enumerate } from "./Enumerate.js";

/**
 * ISO minutes values in number format (from `0` to `59`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for minute values, limited to valid values from
 * `0` to `59`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const minutes: Iterable<Minutes> = [0, 30, 59];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Enumerate}
 */
export type Minutes = Enumerate<59>;
