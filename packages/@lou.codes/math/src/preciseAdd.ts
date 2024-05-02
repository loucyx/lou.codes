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
 * @param addendRight Addend {@link Precise} to use in the right side of the addition.
 * @returns Curried function with `addendRight` in context.
 */
export const preciseAdd =
	(...[addendRightBase, addendRightExponent = 0n]: Precise) =>
	(...[addendLeftBase, addendLeftExponent = 0n]: Precise) => {
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
