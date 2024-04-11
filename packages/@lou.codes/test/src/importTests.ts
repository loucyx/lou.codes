import { importTest } from "./importTest.js";
import type { ReadOnlyURLs } from "./ReadOnlyURLs.js";
import type { TestTuple } from "./TestTuple.js";

/**
 * Imports all the tests of the given Iterable of urls and yields `TestTuple`.
 *
 * @category File System
 * @example
 * ```typescript
 * testsImport([
 * 	"file:///example/test-1.test.js",
 * 	"file:///example/test-2.test.js",
 * ]);
 * // AsyncIterable<
 * // 	[
 * // 		[
 * // 			"file:///example/test-1.test.js",
 * // 			{
 * // 				given: "example",
 * // 				must: "example",
 * // 				received: () => "value",
 * // 				wanted: () => "value",
 * // 			},
 * // 		],
 * // 		[
 * // 			"file:///example/test-2.test.js",
 * // 			{
 * // 				given: "example",
 * // 				must: "example",
 * // 				received: () => "value",
 * // 				wanted: () => "value",
 * // 			},
 * // 		],
 * // 	]
 * // >;
 * ```
 * @param urls Array of urls of tests.
 * @yields `TestTuple` containing url and test for it.
 */
export const importTests = async function* (urls: ReadOnlyURLs) {
	// eslint-disable-next-line functional/no-loop-statements
	for await (const url of urls) {
		// eslint-disable-next-line functional/no-loop-statements
		for await (const test of importTest(url)) {
			yield [url, test] as TestTuple;
		}
	}
};
