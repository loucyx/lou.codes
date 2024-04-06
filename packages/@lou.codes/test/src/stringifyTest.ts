import { dimmed, foregroundRed } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import { FAIL, PASS } from "./constants.js";
import { stringifyDifference } from "./stringifyDifference.js";
import type { TestResult } from "./types/TestResult.js";

/**
 * Takes a `TestResult` and returns a readable string..
 *
 * @category Output
 * @example
 * ```typescript
 * stringifyTest({
 * 	given: "🟢",
 * 	must: "🟩",
 * }); // "✓ Given 🟢, does 🟩."
 * stringifyTest({
 * 	differences: […],
 * 	given: "🟢",
 * 	must: "🟩",
 * }); // "× Given 🟢, must 🟩, but…"
 * ```
 * @param testResult Test result object.
 * @returns Readable string.
 */
export const stringifyTest = (testResult: TestResult) => {
	const pass = testResult.differences === undefined;

	return `${pass ? PASS : FAIL}${dimmed` Given `}${
		testResult.given
	}${dimmed(pass ? ", does " : ", must ")}${testResult.must}${dimmed(
		pass ? "." : ", but…\n",
	)}${
		testResult.differences
			?.map(
				(difference, index, differences) =>
					`${foregroundRed(
						index === differences.length - 1 ? "└" : "├",
					)} ${stringifyDifference(difference)}`,
			)
			.join("\n") ?? EMPTY_STRING
	}`;
};
