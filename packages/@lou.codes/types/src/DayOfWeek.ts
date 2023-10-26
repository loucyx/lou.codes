import type { Enumerate } from "./Enumerate.js";

/**
 * Day of the week values in numeric format (from `0` to `6`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for day of the week values, limited to valid
 * values from `0` to `6`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const daysOfWeek: Iterable<DayOfWeek> = [0, 1, 2, 3, 4, 5, 6];
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type DayOfWeek = Enumerate<6>;
