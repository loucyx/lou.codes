import type { Enumerate } from "./Enumerate.js";

/**
 * Generates a range of numbers using `Enumerate` with given `Length` and
 * omitting the first `From` numbers.
 *
 * @category Number
 * @remarks
 * This type is equivalent to an array of numbers where the first `From` elements
 * are excluded and the length of the array is `Length - From`. The idea is to
 * use it to generate a range of numbers from the given `From`, and of the given
 * `Length`.
 * @example
 * ```typescript
 * type From5To10 = Range<5, 10>; // 5, 6, 7, 8, 9, 10
 * ```
 * @see {@link Enumerate}
 */
export type Range<From extends number, To extends number> =
	| Exclude<Enumerate<To>, Enumerate<From>>
	| From;
