import { captureNamed, escape, or } from "functional-expression";
import { ALL_TOKEN } from "./tokens.js";
import { valueRangeOrListRegExp } from "./valueRangeOrListRegExp.js";

/**
 * Regular expression to match a cron expression field.
 *
 * @category Regular Expression
 * @example
 * ```typescript
 * fieldRegExp("example", 13); // "(?<example>\\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))"
 * ```
 * @param name Named group name.
 * @param value Possible values the expression can have.
 * @returns Named group capturing the given value by itself, in a list or range.
 */
export const fieldRegExp = <Name extends string, Value extends string>(
	name: Name,
	value: Value,
) => captureNamed(name)(or(escape(ALL_TOKEN), valueRangeOrListRegExp(value)));
