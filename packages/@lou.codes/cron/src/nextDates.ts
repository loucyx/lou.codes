import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import { createIterableIterator } from "@lou.codes/iterables";
import { isString, isUndefined } from "@lou.codes/predicates";
import type { CronObject } from "./CronObject.js";
import type { CronString } from "./CronString.js";
import { dateInCron } from "./dateInCron.js";
import { parse } from "./parse.js";
import { stringify } from "./stringify.js";

/**
 * Get next ISO date iterator for the given date and the given cron expression.
 *
 * @category Util
 * @example
 * ```typescript
 * take(2)(nextDates(new Date("1989-10-13T10:15:00.000Z"))("* * * * *"));
 * // [Date("1989-10-13T10:16:00.000"), Date("1989-10-13T10:17:00.000Z")]
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextDates =
	(date: Readonly<Date>) => (cron: CronObject | CronString) =>
		createIterableIterator(function* () {
			const cronObject = parse(
				isString(cron) ? cron : (
					stringify(cron) ?? (EMPTY_STRING as CronString)
				),
			);

			// eslint-disable-next-line functional/no-conditional-statements
			if (!isUndefined(cronObject)) {
				const validDate = dateInCron(cronObject);
				const now = new Date(
					date.toISOString().replace(/\d{2}\.\d{3}/u, "00.000"),
				);

				// eslint-disable-next-line functional/no-loop-statements
				for (;;) {
					// eslint-disable-next-line @typescript-eslint/no-unused-expressions
					validDate((now.setMinutes(now.getMinutes() + 1), now)) ?
						yield new Date(now)
					:	undefined;
				}
			}
		});
