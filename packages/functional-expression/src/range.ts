import type { Strigifiable } from "@lou.codes/types";

/**
 * Matches a character having a character code between the two specified
 * characters inclusive. Must be used with `set`.
 *
 * @category Character classes
 */
export const range =
	<From extends Strigifiable>(from: From) =>
	<To extends Strigifiable>(to: To) =>
		`${from}-${to}` as const;
