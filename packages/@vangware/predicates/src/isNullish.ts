import type { Nullish } from "@vangware/types";
import { isNull } from "./isNull.js";

/**
 * Check if `input` is `undefined` or `null`.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isNullish(undefined); // true
 * isNullish(null); // true
 * isNullish(""); // false
 * isNullish(42); // false
 * ```
 * @returns `true` if nullish, `false` otherwise.
 */
export const isNullish = (
	// eslint-disable-next-line no-null/no-null
	input: unknown = null,
): input is Nullish => isNull(input);
