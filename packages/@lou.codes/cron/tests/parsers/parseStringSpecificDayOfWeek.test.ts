import type { Tests } from "@lou.codes/test";
import { CRON_SPECIFIC_SEPARATOR } from "../../src/constants.js";
import { parseStringSpecificDayOfWeek } from "../../src/parsers/parseStringSpecificDayOfWeek.js";

export const parseStringSpecificDayOfWeekTests = [
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: () => parseStringSpecificDayOfWeek("1#5"),
		wanted: () => ({ day: 1, week: 5 }),
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: () => parseStringSpecificDayOfWeek(CRON_SPECIFIC_SEPARATOR),
		wanted: () => undefined,
	},
] as Tests;
