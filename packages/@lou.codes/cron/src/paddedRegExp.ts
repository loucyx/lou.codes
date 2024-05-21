import { join, optional } from "functional-expression";

/**
 * Regular expression to match field with an optional `0` to it's left.
 *
 * @category Regular Expression.
 * @example
 * ```typescript
 * paddedRegExp(5); // "0?5"
 * ```
 * @param value Value to pad.
 * @returns RegExp to match value with padded `0`.
 */
export const paddedRegExp = <Value extends string | number>(value: Value) =>
	join(optional(0), value);
