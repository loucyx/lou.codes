import { match } from "@lou.codes/predicates";
import type { CronString } from "./CronString.js";
import { cronRegExp } from "./cronRegExp.js";

/**
 * Validates if a string is a cron expression.
 *
 * @category Cron String
 * @see {CronString}
 */
export const isValidExpression = match(`/${cronRegExp}/iu`) as (
	string: string,
) => string is CronString;
