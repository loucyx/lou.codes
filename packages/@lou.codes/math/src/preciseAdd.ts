import type { MaybeInfinity } from "./MaybeInfinity.js";
import type { Precise } from "./Precise.js";
import { bigIntMin } from "./bigIntMin.js";
import { createPrecise } from "./createPrecise.js";
import { preciseToNumber } from "./preciseToNumber.js";

/**
 * Curried add operation using the internal {@link Precise} type.
 *
 * @category Internal
 * @example
 * ```typescript
 * const addDot2 = preciseAdd(2n);
 *
 * addDot2(1n, -1n); // [3n, -1n]
 * ```
 * @see {@link bigIntMin}
 * @see {@link createPrecise}
 * @see {@link Precise}
 * @see {@link preciseToNumber}
 *
 * @param addendRightBase Addend base to use in the right side of the addition.
 * @param addendRightExponent Addend exponent to use in the right side of the addition.
 * @returns Curried function with `addendRightBase` and `addendRightExponent` in context.
 */
export const preciseAdd =
	(addendRightBase: MaybeInfinity, addendRightExponent = 0n) =>
	(addendLeftBase: MaybeInfinity, addendLeftExponent = 0n) => {
		const commonExponent = bigIntMin(
			addendLeftExponent,
			addendRightExponent,
		);

		return createPrecise(
			BigInt(
				preciseToNumber(
					addendLeftBase,
					addendLeftExponent - commonExponent,
				) +
					preciseToNumber(
						addendRightBase,
						addendRightExponent - commonExponent,
					),
			),
			commonExponent,
		);
	};
