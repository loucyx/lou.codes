/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import deepDiff from "deep-diff";
import type { Differences } from "./index.js";
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
	new Promise<Differences<Awaited<Value>>>(resolve =>
		resolve(
			Promise.all([wanted(), received()]).then(
				([awaitedWanted, awaitedReceived]) =>
					(deepDiff
						.diff(awaitedWanted, awaitedReceived)
						?.filter(
							difference =>
								difference.kind !== "N" ||
								typeof difference.rhs !== "undefined",
						) ?? []) as Differences<Awaited<Value>>,
			),
		),
	)
		.catch(
			(error: unknown) =>
				[
					{ error: error ?? new Error("Unknown Error"), kind: "X" },
				] as Differences<Awaited<Value>>,
		)
		.then(
			differences =>
				({
					...(differences.length > 0 ? { differences } : undefined),
					given,
					must,
				}) as TestResult<Value>,
		);
