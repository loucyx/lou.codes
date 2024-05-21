import type { CronObject } from "./CronObject.js";
import { compareField } from "./compareField.js";
import {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.js";

/**
 * Check if given cron expression object includes given date.
 *
 * @category Internal
 * @param cron Cron object.
 * @returns Curried function with `cron` in context.
 */
export const dateInCron = (cron: CronObject) => (date: Readonly<Date>) =>
	compareField(date.getMinutes(), cron[MINUTE_NAME]) &&
	compareField(date.getHours(), cron[HOUR_NAME]) &&
	compareField(date.getDate(), cron[DAY_OF_MONTH_NAME]) &&
	compareField(date.getMonth() + 1, cron[MONTH_NAME]) &&
	compareField(date.getDay(), cron[DAY_OF_WEEK_NAME]);
