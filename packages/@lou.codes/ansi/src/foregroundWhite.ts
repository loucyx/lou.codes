import { foregroundColor } from "./foregroundColor.js";

/**
 * **White** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **white** foreground.
 * @example
 * ```typescript
 * foregroundWhite("Lou"); // "\u001B[37mLou\u001B[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundWhite`Lou`; // "\u001B[37mLou\u001B[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(37);
