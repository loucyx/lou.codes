import type { CREATE } from "../constants.js";
import type { Difference } from "./Difference.js";

export type CreateDifference<Right = unknown> = Difference<typeof CREATE> & {
	/**
	 * New value.
	 */
	readonly right: Right;
};
