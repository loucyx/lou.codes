import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **underlined** text.
 *
 * @category Text
 * @example
 * ```typescript
 * underlined("Vangware"); // "\x1b[4mVangware\x1b[24m"
 * // It can also be used as a tag function for tagged templates:
 * underlined`Vangware`; // "\x1b[4mVangware\x1b[24m"
 * ```
 * @see {@link optionalFormat}
 *
 * @returns `input` string with **underlined** format.
 */
export const underlined = optionalFormat(24)(4);
