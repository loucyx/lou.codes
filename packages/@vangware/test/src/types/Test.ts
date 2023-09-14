import type { Awaitable } from "@vangware/types";

/**
 * Object that describes a test.
 *
 * @category Test
 * @example
 * ```typescript
 * const test: Test<number> = {
 * 	given: "a number",
 * 	must: "make it double",
 * 	received: () => double(2),
 * 	wanted: () => 4,
 * };
 * ```
 *
 * @template Value Type of value being tested.
 */
export type Test<Value = unknown> = {
	/** Description of the given value. */
	readonly given: string;

	/** Description of the wanted value. */
	readonly must: string;

	/** Function that returns a value being tested. */
	readonly received: () => Awaitable<Value>;

	/** Functions that returns the expected value. */
	readonly wanted: () => Awaitable<Value>;
};
