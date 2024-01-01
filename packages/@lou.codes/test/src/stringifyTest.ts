import { bold } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants";
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
 * }); // "[PASS] Given 🟢, must 🟩."
 * stringifyTest({
 * 	differences: [...],
 * 	given: "🟢",
 * 	must: "🟩",
 * }); // "[FAIL] Given 🟢, must 🟩, but..."
 * ```
 * @param testResult Test result object.
 * @returns Readable string.
 */
export const stringifyTest = (testResult: TestResult) =>
	`${testResult.differences === undefined ? PASS : FAIL} Given ${bold(
		testResult.given,
	)}, must ${bold(testResult.must)}${
		testResult.differences === undefined ? "." : ", but...\n"
	}${
		testResult.differences
			?.map(
				(difference, index, differences) =>
					`\t${
						index === differences.length - 1 ? "└" : "├"
					} ${stringifyDifference(difference)}`,
			)
			.join("\n") ?? EMPTY_STRING
	}`;
