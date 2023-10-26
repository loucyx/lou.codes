import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a binary `number`.
 *
 * @category Number
 * @remarks
 * Parses a `string` to a binary `number`, returning `undefined` instead of
 * `NaN` if it fails.
 * @example
 * ```typescript
 * parseBinary("101"); // 0b101 -> 5
 * parseBinary("101.5"); // 0b101 -> 5
 * parseBinary("invalid"); // undefined
 * ```
 * @see {@link parseInteger}
 *
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseBinary = parseInteger(2);
