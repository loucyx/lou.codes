import type { CronObject } from "./CronObject.js";
import { fieldNamesTuple } from "./fieldNamesTuple.js";
import { isValidExpression } from "./isValidExpression.js";
import { stringifyField } from "./stringifyField.js";
import { ALL_TOKEN } from "./tokens.js";

/**
 * Takes a cron object and returns a sting expression.
 *
 * @category Cron Object
 * @example
 * ```typescript
 * stringify({}); // "* * * * *"
 * stringify({ dayOfMonth: 13, month: 10 }); // "* * 13 10 *"
 * stringify({
 * 	minute: 5,
 * 	dayOfMonth: [10, 11, 13],
 * 	month: { from: 1, to: 10 }
 * }); // "5 * 10,11,13 1-10 *"
 * stringify({ month: 2, dayOfMonth: 31 }); // undefined
 * ```
 * @see {@link fieldNamesTuple}
 * @see {@link stringifyField}
 * @see {@link isValidExpression}
 *
 * @param cron Cron object.
 * @returns Cron string expression.
 */
export const stringify = (cron: Partial<CronObject> = {}) => {
	const expression = fieldNamesTuple
		.map(name => stringifyField(cron[name] ?? ALL_TOKEN))
		.join(" ");

	return isValidExpression(expression) ? expression : undefined;
};
