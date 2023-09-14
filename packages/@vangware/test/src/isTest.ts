import type { Test } from "./types/Test.js";

/**
 * Check if given value is a `Test`.
 *
 * @category Test
 * @example
 * ```typescript
 * isTest({ given: "🟢", must: "🟩", received: () => "🟩", wanted: () => "🟩" }); // true
 * isTest({ given: "🟢", must: "🟩", received: "🟩", wanted: "🟩" }); // false
 * isTest({ given: 1, must: 2, received: 3, wanted: 4 }); // false
 * isTest(); // false
 * ```
 * @param value Value to check.
 * @returns `true` if is a `Test`, `false` otherwise.
 */
export const isTest = <Actual = unknown>(value: Actual | Test): value is Test =>
	// eslint-disable-next-line no-null/no-null
	value !== null &&
	typeof value === "object" &&
	"given" in value &&
	typeof value.given === "string" &&
	"must" in value &&
	typeof value.must === "string" &&
	"received" in value &&
	typeof value.received === "function" &&
	"wanted" in value &&
	typeof value.wanted === "function";
