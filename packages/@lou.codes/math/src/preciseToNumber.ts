import type { Precise } from "./Precise.js";

/**
 * Turns a {@link Precise} into a `number`.
 *
 * @category Internal
 * @example
 * ```typescript
 * preciseToNumber(3n, -1n); // 0.3
 * ```
 * @see {@link Precise}
 *
 * @param precise {@link Precise} to convert.
 * @returns Number represented by the passed `precise` value.
 */
export const preciseToNumber = (
	base: bigint | typeof Infinity,
	exponent = 0n,
) => parseFloat(`${base}e${exponent}`);
