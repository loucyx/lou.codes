import { between, isNumber } from "@lou.codes/predicates";
import type { CronSecondsValue } from "../types/CronSecondsValue.js";

/**
 * Check if given is `CronSecondsValue`.
 *
 * @category
 * @example
 * ```typescript
 * isCronSecondsValue(30); // true
 * isCronSecondsValue(80); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronSecondsValue`, `false` otherwise.
 */
export const isCronSecondsValue = (value: unknown): value is CronSecondsValue =>
	isNumber(value) && between(0)(59)(value);
