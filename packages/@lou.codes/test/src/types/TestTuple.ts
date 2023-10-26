import type { ReadOnlyURL } from "./ReadOnlyURL.js";
import type { Test } from "./Test.js";

/**
 * Tuple used to describe a test result and its path.
 *
 * @category File System
 * @category Test
 * @see {@link Test}
 * @see {@link ReadOnlyURL}
 */
export type TestTuple<Value = unknown> = readonly [
	path: ReadOnlyURL,
	test: Test<Value>,
];
