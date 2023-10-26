import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { parseCronMinutesValue } from "../../src/parsers/parseCronMinutesValue.js";
import type { CronMinutesValue } from "../../src/types/CronMinutesValue.js";

export default [
	{
		given: "A valid minutes value",
		must: "return it",
		received: () => parseCronMinutesValue(10),
		wanted: () => "10",
	},
	{
		given: "Other valid minutes value",
		must: "return it",
		received: () => parseCronMinutesValue(59),
		wanted: () => "59",
	},
	{
		given: "Other valid minutes value",
		must: "return it",
		received: () => parseCronMinutesValue(99),
		wanted: () => undefined,
	},
] as Tests<Maybe<`${CronMinutesValue}`>>;
