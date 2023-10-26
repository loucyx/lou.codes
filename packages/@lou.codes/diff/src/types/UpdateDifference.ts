import type { UPDATE } from "../constants.js";
import type { Difference } from "./Difference.js";

/**
 * Object that represents an update difference (a value or property changed).
 *
 * @category Difference
 * @template Left Type of the new value.
 * @template Right Type of the original value.
 * @example
 * ```typescript
 * const updateDifference: UpdateDifference<string, number> = {
 * 	kind: "UPDATE",
 * 	path: ["foo", "bar"],
 * 	left: "Lou",
 * 	right: 42
 * };
 * ```
 */
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
