import { underlined } from "@vangware/ansi";
import type { IsomorphicIterable } from "@vangware/types";
import { FAILED_TESTS, TEST } from "./constants.js";
import { relativePath } from "./relativePath.js";
import { stringifyTest } from "./stringifyTest.js";
import { test } from "./test.js";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";
import type { TestTuple } from "./types/TestTuple.js";

/**
 * Run tests in given iterable of urls and test objects and return a string with
 * the results.
 *
 * @category Output
 * @category Test
 * @example
 * ```typescript
 * runAndStringifyTests([
 * 	"file:///tests/example.test.ts",
 * 	{
 * 		given: "🟢",
 * 		must: "🟩",
 * 		received: () => "🟩",
 * 		wanted: () => "🟩",
 * 	},
 * ]);
 * // [TEST] file:///tests/example.test.ts
 * // [PASS] Given 🟢, must 🟩.
 * ```
 * @param testTuples Iterable of test tuples.
 * @yields Strings to be shown to the consumer.
 */
export const runAndStringifyTests = async function* (
	testTuples: IsomorphicIterable<TestTuple>,
) {
	// eslint-disable-next-line functional/prefer-immutable-types
	const fails: Array<[url: ReadOnlyURL, resultString: string]> = [];
	// eslint-disable-next-line functional/no-let
	let lastPath = "";

	// eslint-disable-next-line functional/no-loop-statements
	for await (const [url, testObject] of testTuples) {
		const result = await test(testObject);
		const resultString = stringifyTest(result);

		// eslint-disable-next-line functional/no-conditional-statements
		if (lastPath !== url.href) {
			// eslint-disable-next-line functional/immutable-data
			lastPath = url.href;
			yield `${TEST} ${underlined(relativePath(url))}`;
		}

		// eslint-disable-next-line functional/no-conditional-statements
		if (result.differences !== undefined) {
			// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
			fails.push([url, resultString]);
		}

		yield resultString;
	}

	// eslint-disable-next-line functional/no-conditional-statements
	if (fails.length > 0) {
		// eslint-disable-next-line functional/immutable-data
		lastPath = "";
		yield FAILED_TESTS;
		// eslint-disable-next-line functional/no-loop-statements
		for (const [url, resultString] of fails) {
			// eslint-disable-next-line functional/no-conditional-statements
			if (lastPath !== url.href) {
				// eslint-disable-next-line functional/immutable-data
				lastPath = url.href;
				yield `${TEST} ${underlined(relativePath(url))}`;
			}

			yield resultString;
		}
	}
};
