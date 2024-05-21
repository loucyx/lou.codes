import type { ReadOnlyArray, Strigifiable } from "@lou.codes/types";
import { START } from "./constants.js";
import { set } from "./set.js";

/**
 * Match any character that is not in the set.
 *
 * @category Character classes
 */
export const notSet = <const Tokens extends ReadOnlyArray<Strigifiable>>(
	...tokens: Tokens
) => set(START, ...tokens);
