import { optionalFormat } from "./optionalFormat.js";

/**
 * **Inverse** code wrapper.
 *
 * @category Text
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **inverse** around it.
 * @example
 * ```typescript
 * inverse("Vangware"); // "\x1b[7mVangware\x1b[27m"
 * // It can also be used as a tag function for tagged templates:
 * inverse`Vangware`; // "\x1b[7mVangware\x1b[27m"
 * ```
 * @see {@link optionalFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 *
 * @param `input` string value to be formatted.
 * @returns `input` string with **inverse** format.
 */
export const inverse = optionalFormat(27)(7);
