import { exists, group, or } from "functional-expression";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";
import { valueOrRangeRegExp } from "./valueOrRangeRegExp.js";

/**
 * Regular expression to match values, ranges or lists.
 *
 * @category Regular Expression.
 * @example
 * ```typescript
 * valueRangeOrListRegExp(13); // "(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))"
 * ```
 * @param value Value to match by itself, as a range or as a list.
 * @returns RegExp to match value, range or list.
 */
export const valueRangeOrListRegExp = <Value extends string | number>(
	value: Value,
) =>
	group(
		or(
			valueOrRangeRegExp(value),
			group(
				exists(
					group(
						valueOrRangeRegExp(value),
						LIST_EXPRESSION_SEPARATOR_TOKEN,
					),
				),
				valueOrRangeRegExp(value),
			),
		),
	);
