import { stringifyDifferenceDictionary } from "./stringifyDifferenceDictionary.js";
import type { Difference } from "./types/Difference.js";

/**
 * Takes a `Difference` object and returns a string using `stringifyDifferenceDictionary`.
 *
 * @category Output
 * @example
 * ```typescript
 * stringifyDifference({
 * 	kind: "DELETE",
 * 	left: "🟢",
 * 	path: ["🟢", "🟩"],
 * }); // "🟢.🟩 is missing."
 *
 * stringifyDifference({
 * 	kind: 8,
 * 	error: "❌",
 * }); // "there was an uncaught error: ❌."
 * ```
 * @param difference Difference object.
 * @returns Formatted string.
 */
export const stringifyDifference = ({ kind, ...difference }: Difference) =>
	stringifyDifferenceDictionary[kind](difference as never);
