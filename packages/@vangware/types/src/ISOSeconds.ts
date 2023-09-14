import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO seconds values in string format (from `"00"` to `"59"`).
 *
 * @category Date
 * @remarks
 * Stricter than `string` type for seconds values, limited to valid values from
 * `"00"` to `"59"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const seconds: Iterable<ISOSeconds> = ["00", "30", "59"];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Digit}
 * @see {@link Enumerate}
 */
export type ISOSeconds = `${Enumerate<5>}${Digit}`;
