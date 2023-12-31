import type { Tests } from "@lou.codes/test";
import { CRON_LAST } from "../../src/constants.js";
import { parseCronLastValue } from "../../src/parsers/parseCronLastValue.js";
import type { CronDayOfWeekValueNumber } from "../../src/types/CronDayOfWeekValueNumber.js";

export const parseCronLastValueTests = [
	{
		given: "a valid L",
		must: "return CronEvery",
		received: () => parseCronLastValue({ last: 1 }),
		wanted: () => `1${CRON_LAST}`,
	},
	{
		given: "an invalid L",
		must: "return undefined",
		received: () =>
			parseCronLastValue({ last: 99 as CronDayOfWeekValueNumber }),
		wanted: () => undefined,
	},
] as Tests<string>;
