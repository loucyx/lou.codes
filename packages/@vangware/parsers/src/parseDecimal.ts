import { parseInteger } from "./parseInteger.js";

/**
 * Parses a `string` to a decimal `number`.
 *
 * @category Number
 * @remarks
 * Parses a `string` to a decimal `number`, returning `undefined` instead of
 * `NaN` if it fails.
 * @example
 * ```typescript
 * parseDecimal("101"); // 101
 * parseDecimal("101.5"); // 101
 * parseDecimal("invalid"); // undefined
 * ```
 * @see {@link parseInteger}
 *
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseDecimal = parseInteger(10);
