import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO minutes values in string format (from `"00"` to `"59"`).
 *
 * @category Date
 * @remarks
 * Stricter than `string` type for minute values, limited to valid values from
 * `"00"` to `"59"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const minutes: Iterable<ISOMinutes> = ["00", "30", "59"];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Digit}
 * @see {@link Enumerate}
 */
export type ISOMinutes = `${Enumerate<5>}${Digit}`;
