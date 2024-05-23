import type { MaybeInfinity } from "./MaybeInfinity.js";
import type { Precise } from "./Precise.js";
import { preciseAdd } from "./preciseAdd.js";

/**
 * Curried subtract operation using the internal {@link Precise} type.
 *
 * @category Internal
 * @example
 * ```typescript
 * const previous = preciseSubtract(1n);
 *
 * previous(14n); // [13n]
 * ```
 * @see {@link Precise}
 * @see {@link preciseAdd}
 *
 * @param subtrahendBase Subtrahend base to use in the subtraction.
 * @param subtrahendExponent Subtrahend exponent to use in the subtraction.
 * @returns Curried function with `subtrahendBase` and `subtrahendExponent` in context.
 */
export const preciseSubtract = (
	subtrahendBase: MaybeInfinity,
	subtrahendExponent = 0n,
) =>
	preciseAdd(-subtrahendBase, subtrahendExponent) as (
		minuendBase: MaybeInfinity,
		minuendExponent?: bigint,
	) => Precise;
