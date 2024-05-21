import type { DayOfMonth, DayOfWeek, Hours, Minutes } from "@lou.codes/types";
import type { Field } from "./Field.js";
import type { MonthValue } from "./MonthValue.js";
import type {
	DAY_OF_MONTH_NAME,
	DAY_OF_WEEK_NAME,
	HOUR_NAME,
	MINUTE_NAME,
	MONTH_NAME,
} from "./fieldNames.js";

/**
 * Object that represents the 5 cron expression fields.
 *
 * @category Cron Object
 *
 * @see {@link Field}
 * @see {@link MonthValue}
 */
export type CronObject = {
	readonly [MINUTE_NAME]: Field<Minutes>;
	readonly [HOUR_NAME]: Field<Hours>;
	readonly [DAY_OF_MONTH_NAME]: Field<DayOfMonth>;
	readonly [MONTH_NAME]: Field<MonthValue>;
	readonly [DAY_OF_WEEK_NAME]: Field<DayOfWeek>;
};
