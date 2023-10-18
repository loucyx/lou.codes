import type { ReadOnlyArray } from "@vangware/types";
import type { DifferenceKind } from "./DifferenceKind.js";

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
