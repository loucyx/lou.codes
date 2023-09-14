import { foregroundCyan } from "@vangware/ansi";
import type { ReadOnlyArray } from "@vangware/types";

/**
 * Stringifies and colorizes an array representing a property path.
 *
 * @category Output
 * @example
 * ```typescript
 * formatPropertyPath(["foo", "bar"]); // "foo.bar" (with colors)
 * formatPropertyPath([]); // "it"
 * ```
 * @param propertyPath Path to format.
 * @returns String with formatted path.
 */
export const formatPropertyPath = (propertyPath: ReadOnlyArray<PropertyKey>) =>
	propertyPath
		.map(property => foregroundCyan(property.toString()))
		.join(".") || "it";
