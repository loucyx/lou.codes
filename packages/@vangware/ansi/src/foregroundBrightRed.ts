import { foregroundColor } from "./foregroundColor.js";

/**
 * **Bright red** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright red** foreground.
 * @example
 * ```typescript
 * foregroundBrightRed("Vangware"); // "\x1b[91mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightRed`Vangware`; // "\x1b[91mVangware\x1b[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **bright red** foreground.
 */
export const foregroundBrightRed = foregroundColor(91);
