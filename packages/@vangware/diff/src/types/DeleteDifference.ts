import type { DELETE } from "../constants.js";
import type { Difference } from "./Difference.js";

export type DeleteDifference<Left = unknown> = Difference<typeof DELETE> & {
	/**
	 * Original value.
	 */
	readonly left: Left;
};
