import { exists, group, or } from "functional-expression";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Regular expression to match lists.
 *
 * @category Regular Expression
 * @example
 * ```typescript
 * valueOrListRegExp(13); // "(?:13|(?:(?:13,)+13))"
 * ```
 * @param value Value to match by itself or as a list.
 * @returns RegExp to match value or list.
 */
export const valueOrListRegExp = <Value extends number | string>(
	value: Value,
) =>
	group(
		or(
			value,
			group(exists(group(value, LIST_EXPRESSION_SEPARATOR_TOKEN)), value),
		),
	);
