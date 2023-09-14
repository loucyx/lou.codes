import type { Unary } from "@vangware/types";

/**
 * Check if value passed is a safe integer.
 *
 * @category Primitives
 * @example
 * ```typescript
 * isSafeInteger(13); // true
 * isSafeInteger(10.13); // false
 * ```
 */
export const isSafeInteger = Number.isSafeInteger as Unary<number, boolean>;
