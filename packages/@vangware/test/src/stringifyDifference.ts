import { stringifyDifferenceDictionary } from "./stringifyDifferenceDictionary.js";
import type { Difference } from "./types/Difference.js";

/**
 * Takes a `Difference` object and returns a string using `stringifyDifferenceDictionary`.
 *
 * @category Output
 * @example
 * ```typescript
 * stringifyDifference({
 * 	kind: "D",
 * 	lhs: "🟢",
 * 	path: ["🟢", "🟩"],
 * }); // "🟢.🟩 is missing."
 *
 * stringifyDifference({
 * 	kind: "X",
 * 	error: "❌",
 * }); // "there was an uncaught error: ❌."
 * ```
 * @param difference Difference object.
 * @returns Formatted string.
 */
export const stringifyDifference = <Value>({
	kind,
	...difference
}: Difference<Value>) =>
	stringifyDifferenceDictionary[kind](difference as never);
