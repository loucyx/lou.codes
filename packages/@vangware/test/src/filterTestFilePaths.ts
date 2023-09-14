import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";
import type { ReadOnlyURLs } from "./types/ReadOnlyURLs.js";

/**
 * Takes an iterable of URLs and only yields the ones that finish with `.test.*`.
 *
 * @example
 * ```typescript
 * filterTestFilePaths(["/path/to/tests/a.test.js", "/path/to/tests/b.ts"]); // ["/path/to/tests/a.test.js"]
 * ```
 * @param readOnlyURLs Iterable of URLs.
 * @yields Test URLs.
 */
export const filterTestFilePaths = async function* (
	readOnlyURLs: ReadOnlyURLs,
): AsyncGenerator<ReadOnlyURL, void> {
	// eslint-disable-next-line functional/no-loop-statements
	for await (const readOnlyURL of readOnlyURLs) {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		/\.(?<testExtensions>spec|test)\.(?<importableExtensions>cjs|cts|js|jsx|mjs|mts|ts|tsx)$/gu.test(
			readOnlyURL.pathname,
		)
			? yield readOnlyURL
			: undefined;
	}
};
