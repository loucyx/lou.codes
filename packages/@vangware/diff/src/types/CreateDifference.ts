import type { CREATE } from "../constants.js";
import type { Difference } from "./Difference.js";

/**
 * Object that represents a creation difference (a new value or property).
 *
 * @category Difference
 * @template Right Type of the new value.
 * @example
 * ```typescript
 * const createDifference: CreateDifference<string> = {
 * 	kind: "CREATE",
 * 	path: ["foo", "bar"],
 * 	right: "Vangware"
 * };
 * ```
 */
export type CreateDifference<Right = unknown> = Difference<typeof CREATE> & {
	/**
	 * New value.
	 */
	readonly right: Right;
};
