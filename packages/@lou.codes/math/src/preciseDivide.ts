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
 * @param divisorBase Divisor base to use in the division.
 * @param divisorExponent Divisor exponent to use in the division.
 * @returns Curried function with `divisorBase` and `divisorExponent` in context.
 */
export const preciseDivide = (divisorBase: bigint, divisorExponent = 0n) =>
	(divisorBase === 0n ?
		() => undefined
	:	preciseMultiply(
			...numberToPrecise(
				preciseToNumber(1n, -divisorExponent) /
					preciseToNumber(divisorBase, 0n),
			),
		)) as (dividendBase: bigint, dividendExponent?: bigint) => Precise;
