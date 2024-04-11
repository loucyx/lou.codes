import type { ReadOnlyArray } from "@lou.codes/types";
import type { DifferenceKind } from "./DifferenceKind.js";

/**
 * Object that represents a difference between two values.
 *
 * @category Difference
 * @template Kind Type of diff.
 * @example
 * ```typescript
 * const difference: Difference<"CREATE"> = {
 * 	kind: "CREATE",
 * 	path: ["foo", "bar"]
 * };
 * ```
 */
export type Difference<Kind extends DifferenceKind> = {
	/**
	 * Type of diff.
	 */
	readonly kind: Kind;
	/**
	 * Path of diff property.
	 */
	readonly path: ReadOnlyArray<PropertyKey>;
};
