import { optionalFormat } from "./optionalFormat.js";

/**
 * **Bold** code wrapper.
 *
 * @category Text
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **bold** around it.
 * @example
 * ```typescript
 * bold("Vangware"); // "\x1b[1mVangware\x1b[22m"
 * // It can also be used as a tag function for tagged templates:
 * bold`Vangware`; // "\x1b[1mVangware\x1b[22m"
 * ```
 * @see {@link optionalFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 *
 * @param `input` string value to be formatted.
 * @returns `input` string with **bold** format.
 */
export const bold = optionalFormat(22)(1);
