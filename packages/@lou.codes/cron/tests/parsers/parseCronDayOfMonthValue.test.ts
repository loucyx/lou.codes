import type { Tests } from "@lou.codes/test";
import { parseCronDayOfMonthValue } from "../../src/parsers/parseCronDayOfMonthValue.js";
import type { CronDayOfMonthValue } from "../../src/types/CronDayOfMonthValue.js";

export const parseCronDayOfMonthValueTests = [
	{
		given: "A valid dayOfMonth value",
		must: "return that value",
		received: () => parseCronDayOfMonthValue(1),
		wanted: () => "1",
	},
	{
		given: "Other valid dayOfMonth value",
		must: "return that value",
		received: () => parseCronDayOfMonthValue(31),
		wanted: () => "31",
	},
	{
		given: "Invalid dayOfMonth value",
		must: "return undefined",
		received: () => parseCronDayOfMonthValue(99 as CronDayOfMonthValue),
		wanted: () => undefined,
	},
] as Tests<string>;
