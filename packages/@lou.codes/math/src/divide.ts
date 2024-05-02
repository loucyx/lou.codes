import { pipe } from "./pipe.js";
import { preciseDivide } from "./preciseDivide.js";

/**
 * Curried divide operation using {@link pipe} with {@link preciseDivide}.
 *
 * @category Operations
 * @example
 * ```typescript
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @see {@link preciseDivide}
 * @see {@link pipe}
 *
 * @param divisor Divisor to be used in the division.
 * @returns Curried function with `divisor` in context.
 */
export const divide = pipe(preciseDivide) as (
	divisor: number,
) => (dividend: number) => number;
