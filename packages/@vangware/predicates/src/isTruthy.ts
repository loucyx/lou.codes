import type { ReadOnly, Truthy } from "@vangware/types";
import { isFalsy } from "./isFalsy.js";

/**
 * Check if given `input` is truthy (so not 0, NaN, "", false, or nullish).
 *
 * @category Common
 * @example
 * ```typescript
 * isTruthy(42); // true
 * isTruthy(true); // true
 * isTruthy(false); // false
 * isTruthy(0); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if truthy, `false` otherwise.
 */
export const isTruthy = <Input>(
	input: Input | Truthy<ReadOnly<Input>>,
): input is Truthy<ReadOnly<Input>> => !isFalsy(input);
