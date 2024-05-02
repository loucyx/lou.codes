import type { Precise } from "./Precise.js";
import { numberToPrecise } from "./numberToPrecise.js";
import { preciseMultiply } from "./preciseMultiply.js";
import { preciseToNumber } from "./preciseToNumber.js";

/**
 * Curried divide operation using the internal {@link Precise} type.
 *
 * @category Internal
 * @example
 * ```typescript
 * const half = preciseDivide(2n);
 *
 * half(1n); // [5n, -1n]
 * ```
 * @see {@link numberToPrecise}
 * @see {@link Precise}
 * @see {@link preciseMultiply}
 * @see {@link preciseToNumber}
 *
 * @param divisor Divisor {@link Precise} to use in the division.
 * @returns Curried function with `divisor` in context.
 */
export const preciseDivide = (
	...[divisorBase, divisorExponent = 0n]: Precise
) =>
	(divisorBase === 0n ?
		() => undefined
	:	preciseMultiply(
			...numberToPrecise(
				preciseToNumber(1n, -divisorExponent) /
					preciseToNumber(divisorBase, 0n),
			),
		)) as (...[dividendBase, dividendExponent]: Precise) => Precise;
