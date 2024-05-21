import type { Strigifiable } from "@lou.codes/types";

/**
 * Matches 0 or 1 of the preceding token, effectively making it optional. Also
 * makes the preceding quantifier lazy, causing it to match as few characters as
 * possible. By default, quantifiers are greedy, and will match as many
 * characters as possible.
 *
 * @category Quantifiers & Alternation
 */
export const optional = <const Token extends Strigifiable>(token: Token) =>
	`${token}?` as const;
