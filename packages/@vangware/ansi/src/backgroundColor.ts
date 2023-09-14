import { optionalFormat } from "./optionalFormat.js";

/**
 * Background color code wrapper.
 *
 * @category Background
 * @remarks
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for background color).
 * @example
 * ```typescript
 * backgroundColor(13)("Vangware"); // "\x1b[13mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundColor(13)`Vangware`; // "\x1b[13mVangware\x1b[49m"
 * ```
 * @see {@link optionalFormat}
 * @see [3-bit and 4-bit ANSI colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit)
 *
 * @param `open` ANSI code for background.
 * @returns Curried function with `close` ANSI code for background in context.
 */
export const backgroundColor = optionalFormat(49);
