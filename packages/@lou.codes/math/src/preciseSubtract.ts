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
 * @param subtrahend Subtrahend {@link Precise} to use in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const preciseSubtract = (
	...[subtrahendBase, subtrahendExponent = 0n]: Precise
) =>
	preciseAdd(-subtrahendBase, subtrahendExponent) as (
		...[minuendBase, minuendExponent]: Precise
	) => Precise;
