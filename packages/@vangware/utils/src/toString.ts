import type { Strigifiable } from "@vangware/types";

/**
 * Parses given value to string, if number is given, then that's used as a radix
 * and a function is returned expecting an actual value.
 *
 * @category Common
 * @example
 * ```typescript
 * const toDecimal = toString(10);
 *
 * toDecimal(10); // "10"
 * toString(16)(16); // "10"
 * toString(2)(2); // "10"
 * toString({}); // "[object Object]"
 * toString({ toString: _ => "test" }); // "test"
 * ```
 * @returns string or function expecting a value.
 */
export const toString = <
	const Input extends Strigifiable | { readonly toString: () => string },
>(
	input: Input,
) =>
	(input?.toString() ?? `${input as string}`) as Input extends Strigifiable
		? `${Input}`
		: Input extends { readonly toString: () => string }
		? ReturnType<Input["toString"]>
		: string;
