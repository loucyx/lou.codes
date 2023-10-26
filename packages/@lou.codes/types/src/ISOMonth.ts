import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO Month values in string format (from `"01"` to `"12"`).
 *
 * @category Date
 * @remarks
 * Union type stricter than `string` type for month values, limited to valid
 * values from `"01"` to `"12"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const months: Iterable<ISOMonth> = ["01", "06", "12"];
 * ```
 * @see [Date](https://mdn.io/Date)
 * @see {@link Digit}
 * @see {@link Enumerate}
 */
export type ISOMonth = `0${Exclude<Digit, 0>}` | `1${Enumerate<2>}`;
