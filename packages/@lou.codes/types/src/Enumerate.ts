/**
 * Union of numbers from 0 to `To`
 *
 * @category Number
 * @remarks
 * Recursively generates a type with an union of numbers from 0 to Length - 1.
 * This has the same limit TypeScript has for recursive types.
 * @example
 * ```typescript
 * type From0To10 = Enumerate<10>;
 * ```
 *
 * @template To Last number of the union (starts at 0).
 * @template Accumulator Accumulator for the recursion (for internal use).
 */
export type Enumerate<
	To extends number,
	Accumulator extends Array<number> = [],
> = Accumulator["length"] extends To
	? Accumulator[number] | To
	: Enumerate<To, [...Accumulator, Accumulator["length"]]>;
