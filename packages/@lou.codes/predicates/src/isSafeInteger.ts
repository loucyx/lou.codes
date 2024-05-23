import { isSafeInteger as numberIsSafeInteger } from "@lou.codes/constants/Number.js";
import type { Unary } from "@lou.codes/types";

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
export const isSafeInteger = numberIsSafeInteger as Unary<number, boolean>;
