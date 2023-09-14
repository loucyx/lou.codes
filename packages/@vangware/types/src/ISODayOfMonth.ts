import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * Day of the month values in string format (`"01"` to `"31"`).
 *
 * @category Date
 * @remarks
 * Union type stricter than `string` type for day of the month values, limited
 * to valid values from `"01"` to `"31"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const days: Iterable<ISODayOfMonth> = ["01", "15", "31"];
 * ```
 * @see {@link Digit}
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type ISODayOfMonth =
	| `0${Exclude<Digit, 0>}`
	| `${1 | 2}${Digit}`
	| `3${Enumerate<1>}`;
