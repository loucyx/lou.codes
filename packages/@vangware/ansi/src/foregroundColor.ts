import { optionalFormat } from "./optionalFormat.js";

/**
 * Foreground color code wrapper.
 *
 * @category Foreground
 * @remarks
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for foreground color).
 * @example
 * ```typescript
 * foregroundColor(13)("Vangware"); // "\x1b[13mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundColor(13)`Vangware`; // "\x1b[13mVangware\x1b[39m"
 * ```
 * @see {@link optionalFormat}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `open` ANSI code for foreground.
 * @returns Curried function with `close` ANSI code for foreground in context.
 */
export const foregroundColor = optionalFormat(39);
