import { compare } from "@lou.codes/diff";
import type { Differences } from "./Differences.js";
import type { Test } from "./Test.js";
import type { TestResult } from "./TestResult.js";
import { EXCEPTION, UNKNOWN_ERROR } from "./constants.js";

/**
 * Takes a `Test` object and returns a promise with a `TestResult`.
 *
 * @category Test
 * @example
 * ```typescript
 * evaluate({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "🟩",
 * 	wanted: () => "🟩",
 * }); // Promise<{ given: "🟢", , must: "🟩" }>
 * evaluate({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "❌",
 * 	wanted: () => "🟩",
 * }); // Promise<{ differences: […], given: "🟢", , must: "🟩" }>
 * ```
 * @param testDescription A `Test` object.
 * @returns A promise with a `TestResult` object.
 */
export const evaluate = async <Value>(testDescription: Test<Value>) => {
	// eslint-disable-next-line functional/no-let
	let differences = [] as Differences;

	try {
		differences = [
			...compare({
				left: await testDescription.wanted(),
				right: await testDescription.received(),
			}),
		];
	} catch (error: unknown) {
		differences = [
			{
				error:
					error instanceof Error ?
						`${error.name}: ${error.message}${
							error.stack
								?.split("\n")[1]
								?.trim()
								.replace(/(?<stack>.+)/u, " ($1)") ?? ""
						}`
					:	error ?? UNKNOWN_ERROR,
				kind: EXCEPTION,
			},
		];
	}

	return {
		...(differences.length > 0 ? { differences } : undefined),
		given: testDescription.given,
		must: testDescription.must,
	} satisfies TestResult;
};
