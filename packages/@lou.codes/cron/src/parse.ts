import { entriesToObject, length } from "@lou.codes/iterables";
import type { Maybe } from "@lou.codes/types";
import type { CronObject } from "./CronObject.js";
import type { CronString } from "./CronString.js";
import { cronRegExp } from "./cronRegExp.js";
import { normalizeAliases } from "./normalizeAliases.js";
import { parseFieldTuplesMap } from "./parseFieldTuplesMap.js";
import { zipFieldNames } from "./zipFieldNames.js";

/**
 * Parses a cron expression into an object representation.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parse("* * * * *"); // { minute: "*", hour: "*", dayOfMonth: "*", month: "*", dayOfWeek: "*" }
 * parse("* * 13 10 *"); // { minute: "*", hour: "*", dayOfMonth: 13, month: 10, dayOfWeek: "*" }
 * parse("5 * 10,11,13 1-10 *"); // { minute: 5, hour: "*", dayOfMonth: [10, 11, 13], month: { from: 1, to: 10 }, dayOfWeek: "*" }
 * parse("* * 31 2 *"); // undefined
 * parse("nope"); // undefined
 * ```
 * @see {@link parseFieldTuplesMap}
 * @see {@link zipFieldNames}
 * @see {@link normalizeAliases}
 *
 * @param expression Cron expression to be parsed.
 * @returns Object representing that expression or `undefined` if expression is
 * invalid.
 */
export const parse = (expression: CronString) => {
	const entries = parseFieldTuplesMap(
		zipFieldNames(
			new RegExp(cronRegExp, "iu")
				.exec(normalizeAliases(expression))
				?.slice(1) ?? [],
		),
	);

	return (
		length(entries) === 0 ? undefined : (
			entriesToObject(entries)
		)) as Maybe<CronObject>;
};
