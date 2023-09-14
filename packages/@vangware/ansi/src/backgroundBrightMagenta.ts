import { backgroundColor } from "./backgroundColor.js";

/**
 * **Bright magenta** background code wrapper.
 *
 * @category Background
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bright magenta** background around it.
 * @example
 * ```typescript
 * backgroundBrightMagenta("Vangware"); // "\x1b[105mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightMagenta`Vangware`; // "\x1b[105mVangware\x1b[49m"
 * ```
 * @see {@link backgroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **bright magenta** background.
 */
export const backgroundBrightMagenta = backgroundColor(105);
