import { undefineNaN } from "./undefineNaN.js";

/**
 * Safe `parseFloat` alternative.
 *
 * @category Number
 * @remarks
 * Parses a `string` to a float `number`. Returns `undefined` instead of `NaN`
 * if it fails.
 * @example
 * ```typescript
 * parseFloatingPoint(10); // 10
 * parseFloatingPoint(13.10); // 13.1
 * parseFloatingPoint("invalid"); // undefined
 * ```
 * @see {@link undefineNaN}
 *
 * @param string String to parse.
 * @returns Parsed number or `undefined` if invalid.
 */
export const parseFloatingPoint = (string: string) =>
	undefineNaN(parseFloat(string));
