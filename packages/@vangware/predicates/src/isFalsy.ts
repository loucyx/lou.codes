import type { Falsy } from "@vangware/types";

/**
 * Check if given `input` is falsy (0, NaN, "", false, or nullish).
 *
 * @category Common
 * @example
 * ```typescript
 * isFalsy(false); // true
 * isFalsy(0); // true
 * isFalsy(NaN); // true
 * isFalsy(""); // true
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(42); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if falsy, `false` otherwise.
 */
export const isFalsy = (
	input: unknown,
	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
): input is Falsy => !input;
