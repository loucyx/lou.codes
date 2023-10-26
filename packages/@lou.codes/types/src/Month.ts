import type { Enumerate } from "./Enumerate.js";

/**
 * ISO Month values in number format (from `0` to `11`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for month values, limited to valid values from
 * `0` to `11`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const months: Iterable<ISOMonth> = [1, 6, 11];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Enumerate}
 */
export type Month = Enumerate<11>;
