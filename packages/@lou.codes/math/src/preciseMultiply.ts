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
 * @param multiplier Multiplier {@link Precise} to use in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const preciseMultiply =
	(...[multiplierBase, multiplierExponent = 0n]: Precise) =>
	(...[multiplicandBase, multiplicandExponent = 0n]: Precise) =>
		createPrecise(
			multiplicandBase * multiplierBase,
			multiplicandExponent + multiplierExponent,
		);
