import { valueOrListRegExp } from "./valueOrListRegExp.js";
import { valueOrRangeRegExp } from "./valueOrRangeRegExp.js";

/**
 * Regular expression to match values, ranges or lists.
 *
 * @category Regular Expression
 * @example
 * ```typescript
 * valueRangeOrListRegExp(13); // "(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))"
 * ```
 * @param value Value to match by itself, as a range or as a list.
 * @returns RegExp to match value, range or list.
 */
export const valueRangeOrListRegExp = <Value extends number | string>(
	value: Value,
) => valueOrListRegExp(valueOrRangeRegExp(value));
