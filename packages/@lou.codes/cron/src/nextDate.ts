import { head } from "@lou.codes/iterables";
import type { CronObject } from "./CronObject.js";
import type { CronString } from "./CronString.js";
import { nextDates } from "./nextDates.js";

/**
 * Get next ISO date string for the given date and the given cron expression.
 *
 * @category Util
 * @example
 * ```typescript
 * nextDate(new Date("1989-10-13T10:15:00.000"))("* * * * *"); // Date("1989-10-13T10:16:00.000")
 * ```
 * @param date Base date to get the next date from.
 * @returns Curried function with date set.
 */
export const nextDate = (date: Readonly<Date>) => {
	const nextDatesFor = nextDates(date);

	return (cron: CronObject | CronString) => head(nextDatesFor(cron));
};
