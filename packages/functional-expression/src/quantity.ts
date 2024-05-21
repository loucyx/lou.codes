import type { Strigifiable } from "@lou.codes/types";

/**
 * Matches the specified quantity of the previous token. {1,3} will match 1 to
 * 3. {3} will match exactly 3. {3,} will match 3 or more.
 *
 * @category Quantifiers & Alternation
 */
export const quantity =
	<const Quantities extends Strigifiable>(quantities: Quantities) =>
	<const Token extends string>(token: Token) =>
		`${token}{${quantities}}` as const;
