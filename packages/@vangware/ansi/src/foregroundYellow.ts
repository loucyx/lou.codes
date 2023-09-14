import { foregroundColor } from "./foregroundColor.js";

/**
 * **Yellow** foreground code wrapper.
 *
 * @category Foreground
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **yellow** foreground.
 * @example
 * ```typescript
 * foregroundYellow("Vangware"); // "\x1b[33mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundYellow`Vangware`; // "\x1b[33mVangware\x1b[39m"
 * ```
 * @see {@link foregroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(33);
