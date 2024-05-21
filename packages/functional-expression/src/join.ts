import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { ReadOnlyArray, Strigifiable, StringJoin } from "@lou.codes/types";

/**
 * Util to join strings.
 *
 * @category Util
 */
export const join = <const Tokens extends ReadOnlyArray<Strigifiable>>(
	...tokens: Tokens
) => tokens.join(EMPTY_STRING) as StringJoin<Tokens, typeof EMPTY_STRING>;
