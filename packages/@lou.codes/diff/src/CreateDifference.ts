import type { CREATE } from "./constants.js";
import type { Difference } from "./Difference.js";

/**
 * Object that represents a creation difference (a new value or property).
 *
 * @category Difference
 * @template Right Type of the new value.
 * @example
 * ```typescript
 * const createDifference: CreateDifference<string> = {
 * 	kind: 1,
 * 	path: ["foo", "bar"],
 * 	right: "Lou"
 * };
 * ```
 */
export type CreateDifference<Right = unknown> = Difference<typeof CREATE> & {
	/**
	 * New value.
	 */
	readonly right: Right;
};
