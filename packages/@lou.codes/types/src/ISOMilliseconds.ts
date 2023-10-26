import type { Digit } from "./Digit.js";

/**
 * ISO milliseconds values in string format (from `"000"` to `"999"`).
 *
 * @category Date
 * @remarks
 * Stricter than `string` type for millisecond values, limited to valid values
 * from `"000"` to `"999"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const milliseconds: Iterable<ISOMilliseconds> = ["001", "250", "999"];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Digit}
 */
export type ISOMilliseconds = `${Digit}${Digit}${Digit}`;
