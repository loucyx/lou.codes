import type { Strigifiable } from "@lou.codes/types";

/**
 * Matches 1 or more of the preceding token.
 *
 * @category Quantifiers & Alternation
 */
export const exists = <const Token extends Strigifiable>(token: Token) =>
	`${token}+` as const;
