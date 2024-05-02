import { pipe } from "./pipe.js";
import { preciseSubtract } from "./preciseSubtract.js";

/**
 * Curried subtract operation using {@link pipe} with {@link preciseSubtract}.
 *
 * @category Operations
 * @example
 * ```typescript
 * const previous = subtract(1);
 *
 * previous(14); // 13
 * ```
 * @see {@link preciseSubtract}
 * @see {@link pipe}
 *
 * @param subtrahend Subtrahend value to be used in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const subtract = pipe(preciseSubtract) as (
	subtrahend: number,
) => (minuend: number) => number;
