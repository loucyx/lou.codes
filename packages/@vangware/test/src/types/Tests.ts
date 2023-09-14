import type { IsomorphicIterable } from "@vangware/types";
import type { Test } from "./Test.js";

/**
 * Iterable of `Test`.
 *
 * @category Test
 * @example
 * ```typescript
 * const tests: Tests<number> = [
 * 	{
 * 		given: "a number",
 * 		must: "make it double",
 * 		received: () => double(2),
 * 		wanted: () => 4,
 * 	}
 * ];
 * ```
 * @see {@link Test}
 *
 * @template Value Type of value being tested.
 */
export type Tests<Value = unknown> = IsomorphicIterable<Test<Value>>;
