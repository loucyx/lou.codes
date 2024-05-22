import { match } from "@lou.codes/predicates";
import { build } from "functional-expression";
import type { CronString } from "./CronString.js";
import { cronRegExp } from "./cronRegExp.js";

/**
 * Validates if a string is a cron expression.
 *
 * @category Cron String
 * @see {CronString}
 */
export const isValidExpression = match(build("iu")(cronRegExp)) as (
	string: string,
) => string is CronString;
