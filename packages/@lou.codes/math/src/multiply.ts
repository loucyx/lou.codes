import { pipe } from "./pipe.js";
import { preciseMultiply } from "./preciseMultiply.js";

/**
 * Curried multiply operation using {@link pipe} with {@link preciseMultiply}.
 *
 * @category Operations
 * @example
 * ```typescript
 * const double = multiply(2);
 *
 * double(6.5); // 13
 * ```
 * @see {@link preciseMultiply}
 * @see {@link pipe}
 *
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply = pipe(preciseMultiply) as (
	multiplier: number,
) => (multiplicand: number) => number;
