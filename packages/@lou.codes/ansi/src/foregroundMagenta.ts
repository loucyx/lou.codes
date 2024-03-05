import { foregroundColor } from "./foregroundColor.js";

/**
 * **Magenta** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **magenta** foreground.
 * @example
 * ```typescript
 * foregroundMagenta("Lou"); // "\u001B[35mLou\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundMagenta`Lou`; // "\u001B[35mLou\u001B[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **magenta** foreground.
 */
export const foregroundMagenta = foregroundColor(35);
