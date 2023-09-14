import { backgroundColor } from "./backgroundColor.js";

/**
 * **Cyan** background code wrapper.
 *
 * @category Background
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **cyan** background around it.
 * @example
 * ```typescript
 * backgroundCyan("Vangware"); // "\x1b[46mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundCyan`Vangware`; // "\x1b[46mVangware\x1b[49m"
 * ```
 * @see {@link backgroundColor}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `input` string value to be colored.
 * @returns `input` string with **cyan** background.
 */
export const backgroundCyan = backgroundColor(46);
