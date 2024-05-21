import {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.js";

/**
 * Field names in order.
 *
 * @category Internal
 */
export const fieldNamesTuple = [
	MINUTE_NAME,
	HOUR_NAME,
	DAY_OF_MONTH_NAME,
	MONTH_NAME,
	DAY_OF_WEEK_NAME,
] as const;
