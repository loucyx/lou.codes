import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a hexadecimal `number`.
 *
 * @category Number
 * @remarks
 * Parses a `string` to a hexadecimal `number`, returning `undefined` instead of
 * `NaN` if it fails.
 * @example
 * ```typescript
 * parseHexadecimal("101"); // 0x101 -> 257
 * parseHexadecimal("101.5"); // 0x101 -> 257
 * parseHexadecimal("invalid"); // undefined
 * ```
 * @see {@link parseInteger}
 *
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseHexadecimal = parseInteger(16);
