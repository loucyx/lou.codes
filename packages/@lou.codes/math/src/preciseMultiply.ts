import { isBigInt } from "@lou.codes/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.js";
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
	(multiplierBase: MaybeInfinity, multiplierExponent = 0n) =>
	(multiplicandBase: MaybeInfinity, multiplicandExponent = 0n) =>
		isBigInt(multiplicandBase) && isBigInt(multiplierBase) ?
			createPrecise(
				multiplicandBase * multiplierBase,
				multiplicandExponent + multiplierExponent,
			)
		:	createPrecise(Infinity);
