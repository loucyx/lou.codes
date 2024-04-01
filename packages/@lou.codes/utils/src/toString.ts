import type { Strigifiable } from "@lou.codes/types";

/**
 * Parses given value to string.
 *
 * @category Common
 * @example
 * ```typescript
 * toString(10); // "10"
 * toString({}); // "[object Object]"
 * toString({ toString: _ => "test" }); // "test"
 * ```
 * @returns stringified value.
 */
export const toString = <
	const Input extends Strigifiable | { readonly toString: () => string },
>(
	input: Input,
) =>
	(input?.toString() ?? `${input as string}`) as Input extends Strigifiable ?
		`${Input}`
	: Input extends { readonly toString: () => string } ?
		ReturnType<Input["toString"]>
	:	string;
