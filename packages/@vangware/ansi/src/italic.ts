import { optionalFormat } from "./optionalFormat.js";

/**
 * **Italic** code wrapper.
 *
 * @category Text
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **italic** around it.
 * @example
 * ```typescript
 * italic("Vangware"); // "\x1b[3mVangware\x1b[23m"
 * // It can also be used as a tag function for tagged templates:
 * italic`Vangware`; // "\x1b[3mVangware\x1b[23m"
 * ```
 * @see {@link optionalFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 *
 * @param `input` string value to be formatted.
 * @returns `input` string with **italic** format.
 */
export const italic = optionalFormat(23)(3);
