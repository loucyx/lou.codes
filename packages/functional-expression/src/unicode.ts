import type { Strigifiable } from "@lou.codes/types";
import { escape } from "./escape.js";

/**
 * Unicode escaped character in the form \u{FFFF}. Supports a full range of
 * unicode point escapes with any number of hex digits.
 *
 * Requires the unicode flag (u).
 *
 * @category Escaped Characters
 */
export const unicode = <const HexadecimalValue extends Strigifiable>(
	hexadecimalValue: HexadecimalValue,
) => escape(`u{${hexadecimalValue}}`);
