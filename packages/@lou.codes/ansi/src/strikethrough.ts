import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **strikethrough** text.
 *
 * @category Text
 * @example
 * ```typescript
 * strikethrough("Lou"); // "\x1b[9mLou\x1b[29m"
 * // It can also be used as a tag function for tagged templates:
 * strikethrough`Lou`; // "\x1b[9mLou\x1b[29m"
 * ```
 * @see {@link optionalFormat}
 *
 * @returns `input` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(29)(9);
