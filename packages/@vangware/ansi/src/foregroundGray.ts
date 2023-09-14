import { foregroundColor } from "./foregroundColor.js";

/**
 * **Gray** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **gray** foreground.
 * @example
 * ```typescript
 * foregroundGray("Vangware"); // "\x1b[90mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundGray`Vangware`; // "\x1b[90mVangware\x1b[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **gray** foreground.
 */
export const foregroundGray = foregroundColor(90);
