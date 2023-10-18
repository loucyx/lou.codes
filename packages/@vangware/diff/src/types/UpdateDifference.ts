import type { UPDATE } from "../constants.js";
import type { Difference } from "./Difference.js";

export type UpdateDifference<Left = unknown, Right = unknown> = Difference<
	typeof UPDATE
> & {
	/**
	 * Original value.
	 */
	readonly left: Left;
	/**
	 * New value.
	 */
	readonly right: Right;
};
