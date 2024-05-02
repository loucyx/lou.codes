import type { Precise } from "./Precise.js";
import { createPrecise } from "./createPrecise.js";

/**
 * Curried multiply operation using the internal {@link Precise} type.
 *
 * @category Internal
 * @example
 * ```typescript
 * const double = preciseMultiply(2n);
 *
 * double(65n, -1n); // [13n]
 * ```
 * @see {@link createPrecise}
 * @see {@link Precise}
 *
 * @param multiplierBase Multiplier base to use in the multiplication.
 * @param multiplierExponent Multiplier exponent to use in the multiplication.
 * @returns Curried function with `multiplierBase` and `multiplierExponent` in context.
 */
export const preciseMultiply =
	(multiplierBase: bigint, multiplierExponent = 0n) =>
	(multiplicandBase: bigint, multiplicandExponent = 0n) =>
		createPrecise(
			multiplicandBase * multiplierBase,
			multiplicandExponent + multiplierExponent,
		);
