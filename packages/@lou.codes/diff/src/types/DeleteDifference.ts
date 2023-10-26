import type { DELETE } from "../constants.js";
import type { Difference } from "./Difference.js";

/**
 * Object that represents a deletion difference (a value or property was removed).
 *
 * @category Difference
 * @template Left Type of the removed value.
 * @example
 * ```typescript
 * const deleteDifference: DeleteDifference<string> = {
 * 	kind: "DELETE",
 * 	path: ["foo", "bar"],
 * 	left: "Lou"
 * };
 * ```
 */
export type DeleteDifference<Left = unknown> = Difference<typeof DELETE> & {
	/**
	 * Original value.
	 */
	readonly left: Left;
};
