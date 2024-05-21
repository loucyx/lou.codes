import type { Strigifiable } from "@lou.codes/types";

/**
 * Matches 0 or more of the preceding token.
 *
 * @category Quantifiers & Alternation
 */
export const allow = <const Token extends Strigifiable>(token: Token) =>
	`${token}*` as const;
