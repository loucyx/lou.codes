import { compare } from "@vangware/diff";
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
 * @param test A `Test` object.
 * @returns A promise with a `TestResult` object.
 */
export const test = <Value>({ given, must, received, wanted }: Test<Value>) =>
	new Promise<Differences>(resolve =>
		resolve(
			Promise.all([wanted(), received()]).then(([left, right]) => [
				...compare({ left, right }),
			]),
		),
	)
		.catch(
			(error: unknown) =>
				[
					{
						error:
							error instanceof Error
								? `${error.name}: ${error.message}`
								: error ?? UNKNOWN_ERROR,
						kind: EXCEPTION,
					},
				] satisfies Differences,
		)
		.then(
			differences =>
				({
					...(differences.length > 0 ? { differences } : undefined),
					given,
					must,
				}) as TestResult,
		);
