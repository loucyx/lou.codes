import { foregroundColor } from "./foregroundColor.js";

/**
 * **Black** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **black** foreground.
 * @example
 * ```typescript
 * foregroundBlack("Lou"); // "\u001B[30mLou\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBlack`Lou`; // "\u001B[30mLou\u001B[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **black** foreground.
 */
export const foregroundBlack = foregroundColor(30);
