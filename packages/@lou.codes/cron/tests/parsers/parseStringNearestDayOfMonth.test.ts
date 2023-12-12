import type { Tests } from "@lou.codes/test";
import { parseStringNearestDayOfMonth } from "../../src/parsers/parseStringNearestDayOfMonth.js";

export const parseStringNearestDayOfMonthTests = [
	{
		given: "a valid W with value 2",
		must: "return CronEvery",
		received: () => parseStringNearestDayOfMonth("2W"),
		wanted: () => ({ nearest: 2 }),
	},
	{
		given: "an invalid W",
		must: "return undefined",
		received: () => parseStringNearestDayOfMonth("INVALID"),
		wanted: () => undefined,
	},
] as Tests;
