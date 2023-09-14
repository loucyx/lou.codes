import type { Enumerate } from "./Enumerate.js";

/**
 * ISO milliseconds values in number format (from `0` to `999`).
 *
 * @category Date
 * @remarks
 * Stricter than `number` type for millisecond values, limited to valid values
 * from `0` to `999`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const milliseconds: Iterable<Milliseconds> = [1, 250, 999];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Enumerate}
 */
export type Milliseconds = Enumerate<999>;
