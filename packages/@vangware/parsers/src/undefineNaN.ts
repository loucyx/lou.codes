import type { Maybe } from "@vangware/types";

/**
 * NaN handler.
 *
 * @category Number
 * @remarks
 * Takes a `number` that could be `NaN` and makes it `undefined` if it is `NaN`.
 * @example
 * ```typescript
 * undefineNaN(10); // 10
 * undefineNaN(13.10); // 13.1
 * undefineNaN(NaN); // undefined
 * ```
 *
 * @template Number Generic of the number to handle.
 * @param number Number to handle.
 * @returns Number if it's not `NaN`, otherwise `undefined`.
 */
export const undefineNaN = <Number extends number>(
	// eslint-disable-next-line @typescript-eslint/ban-types
	number: Number,
	// eslint-disable-next-line @typescript-eslint/ban-types
) => (Number.isNaN(number) ? undefined : number) as Maybe<Number>;
