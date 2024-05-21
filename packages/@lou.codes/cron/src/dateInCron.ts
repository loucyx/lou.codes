import type { CronObject } from "./CronObject.js";
import { compareField } from "./compareField.js";
import {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.js";
import { isAllToken } from "./isAllToken.js";

/**
 * Check if given cron expression object includes given date.
 *
 * @category Internal
 * @param cron Cron object.
 * @returns Curried function with `cron` in context.
 */
export const dateInCron = (cron: CronObject) => (date: Readonly<Date>) =>
	(isAllToken(cron[MINUTE_NAME]) ||
		compareField(date.getMinutes(), cron[MINUTE_NAME])) &&
	(isAllToken(cron[HOUR_NAME]) ||
		compareField(date.getHours(), cron[HOUR_NAME])) &&
	(isAllToken(cron[DAY_OF_MONTH_NAME]) ||
		compareField(date.getDate(), cron[DAY_OF_MONTH_NAME])) &&
	(isAllToken(cron[MONTH_NAME]) ||
		compareField(date.getMonth() + 1, cron[MONTH_NAME])) &&
	(isAllToken(cron[DAY_OF_WEEK_NAME]) ||
		compareField(date.getDay(), cron[DAY_OF_WEEK_NAME]));
