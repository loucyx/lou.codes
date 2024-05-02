import { pipe } from "./pipe.js";
import { preciseAdd } from "./preciseAdd.js";

/**
 * Curried add operation using {@link pipe} with {@link preciseAdd}.
 *
 * @category Operations
 * @example
 * ```typescript
 * const addDot2 = add(2);
 *
 * addDot2(0.1); // 0.3
 * ```
 * @see {@link preciseAdd}
 * @see {@link pipe}
 *
 * @param addendRight Addend value to be on the right side.
 * @returns Curried function with `addendRight` in context.
 */
export const add = pipe(preciseAdd) as (
	addendRight: number,
) => (addendLeft: number) => number;
