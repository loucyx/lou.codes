import { optionalFormat } from "./optionalFormat.js";

/**
 * **Dimmed** code wrapper.
 *
 * @remarks
 * Given an `input` string, it will return a new string with the ANSI codes for
 * **dimmed** around it.
 * @category Text
 * @example
 * ```typescript
 * dimmed("Vangware"); // "\x1b[2mVangware\x1b[22m"
 * // It can also be used as a tag function for tagged templates:
 * dimmed`Vangware`; // "\x1b[2mVangware\x1b[22m"
 * ```
 * @see {@link optionalFormat}
 * @see [SGR (Select Graphic Rendition) parameters](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters)
 *
 * @param `input` string value to be formatted.
 * @returns `input` string with **dimmed** format.
 */
export const dimmed = optionalFormat(22)(2);
