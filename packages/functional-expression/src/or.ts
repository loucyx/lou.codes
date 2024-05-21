import type { ReadOnlyArray, Strigifiable, StringJoin } from "@lou.codes/types";

/**
 * Acts like a boolean OR. Matches the expression before or after the |. It can
 * operate within a group, or on a whole expression. The patterns will be tested
 * in order.
 *
 * @category Quantifiers & Alternation
 */
export const or = <const Tokens extends ReadOnlyArray<Strigifiable>>(
	...tokens: Tokens
) => tokens.join("|") as StringJoin<Tokens, "|">;
