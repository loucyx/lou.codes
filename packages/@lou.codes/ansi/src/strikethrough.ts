import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **strikethrough** text.
 *
 * @category Text
 * @example
 * ```typescript
 * strikethrough("Lou"); // "\u001B[9mLou\u001B[29m"
 * // It can also be used as a tag function for tagged templates:
 * strikethrough`Lou`; // "\u001B[9mLou\u001B[29m"
 * ```
 * @see {@link optionalFormat}
 *
 * @returns `input` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(29)(9);
