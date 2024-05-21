import type { HexadecimalDigit } from "./HexadecimalDigit.js";
import { escape } from "./escape.js";

/**
 * Hexadecimal escaped character in the form \xFF.
 *
 * @category Escaped Characters
 */
export const hexadecimal = <
	const HexadecimalValue extends `${HexadecimalDigit}${HexadecimalDigit}`,
>(
	hexadecimalValue: HexadecimalValue,
) => escape(`x${hexadecimalValue}`);
