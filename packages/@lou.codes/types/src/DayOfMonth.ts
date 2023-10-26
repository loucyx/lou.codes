import type { Enumerate } from "./Enumerate.js";
import type { Range } from "./Range.js";

/**
 * Day of the month values in numeric format (from `1` to `31`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for day of the month values, limited to valid
 * values from `1` to `31`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const days: Iterable<DayOfMonth> = [1, 2, 3, 28, 29, 30, 31];
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type DayOfMonth = Range<1, 31>;
