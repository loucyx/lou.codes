import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * Hours values in string format (from `"00"` to `"23"`).
 *
 * @category Date
 * @remarks
 * Union type stricter than `string` type for hour values, limited to valid
 * values from `"00"` to `"23"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const hours: Iterable<ISOHours> = ["00", "06", "23"];
 * ```
 * @see {@link Enumerate}
 * @see [Date](https://mdn.io/Date)
 */
export type ISOHours = `${Enumerate<1>}${Digit}` | `2${Enumerate<3>}`;
