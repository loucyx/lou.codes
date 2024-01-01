import { compare } from "@lou.codes/diff";
import { EXCEPTION, UNKNOWN_ERROR } from "./constants.js";
import type { Differences } from "./types/Differences.js";
import type { Test } from "./types/Test.js";
import type { TestResult } from "./types/TestResult.js";

/**
 * Takes a `Test` object and returns a promise with a `TestResult`.
 *
 * @category Test
 * @example
 * ```typescript
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "🟩",
 * 	wanted: () => "🟩",
 * }); // Promise<{ given: "🟢", , must: "🟩" }>
 * test({
 * 	given: "🟢",
 * 	must: "🟩",
 * 	received: () => "❌",
 * 	wanted: () => "🟩",
 * }); // Promise<{ differences: [...], given: "🟢", , must: "🟩" }>
 * ```
 * @param testDescription A `Test` object.
 * @returns A promise with a `TestResult` object.
 */
export const test = async <Value>(testDescription: Test<Value>) => {
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
						`${error.name}: ${error.message}`
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
