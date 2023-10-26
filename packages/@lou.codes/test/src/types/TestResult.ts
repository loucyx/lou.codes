import type { Differences } from "./Differences.js";
import type { Test } from "./Test.js";

/**
 * Object that describes a test result (given, must and differences).
 *
 * @category Test
 * @example
 * ```typescript
 * const testResult: TestResult<string> = {
 * 	given: "🟢",
 * 	must: "🟩",
 * 	differences: [
 * 		{
 * 			kind: "UPDATE",
 * 			path: ["🟢", "🟩"],
 * 			left: "🟢",
 * 			right: "🟩",
 * 		}
 * 	],
 * };
 * ```
 * @see {@link Differences}
 * @see {@link Test}
 *
 * @template Value Type of value being tested.
 */
export type TestResult = Pick<Test, "given" | "must"> & {
	/** Differences between `given` and `must` (`undefined` when equal). */
	readonly differences?: Differences;
};
