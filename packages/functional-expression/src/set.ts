import type { ReadOnlyArray, Strigifiable } from "@lou.codes/types";
import { join } from "./join.js";

/**
 * Match any character in the set.
 *
 * @category Character classes
 */
export const set = <const Tokens extends ReadOnlyArray<Strigifiable>>(
	...tokens: Tokens
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
) => `[${join(...tokens)}]` as const;
