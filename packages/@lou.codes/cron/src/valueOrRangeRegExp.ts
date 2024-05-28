import { group, join, optional } from "functional-expression";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Regular expression to match values or ranges.
 *
 * @category Regular Expression.
 * @example
 * ```typescript
 * valueOrRangeRegExp(13); // "13(?:-13)?"
 * ```
 * @param value Value to match by itself or as a range.
 * @returns RegExp to match value or range.
 */
export const valueOrRangeRegExp = <Value extends number | string>(
	value: Value,
) => join(value, optional(group(RANGE_EXPRESSION_SEPARATOR_TOKEN, value)));
