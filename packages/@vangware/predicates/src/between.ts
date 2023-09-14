import type { Numeric } from "@vangware/types";

/**
 * Takes a `start` and `end` and returns a boolean if `value` number or string is between them.
 *
 * @category Primitive
 * @example
 * ```typescript
 * const between0 = between(0);
 * const between0And10 = between0(10);
 *
 * between0And10(5); // true
 * between0And10(-1); // false
 * between0And10(11); // false
 * ```
 * @param start Minimum boundary.
 * @returns Curried function with `start` in context.
 */
export const between =
	(start: Numeric | string) =>
	(end: Numeric | string) =>
	(value: Numeric | string) =>
		(start === end && value === start) ||
		(start < end && value >= start && value <= end) ||
		(value <= start && value >= end);
