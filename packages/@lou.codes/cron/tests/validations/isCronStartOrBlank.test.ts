import type { Tests } from "@lou.codes/test";
import { CRON_START_OR_BLANK } from "../../src/constants.js";
import { isCronStartOrBlank } from "../../src/validations/isCronStartOrBlank.js";

export const isCronStartOrBlankTests = [
	{
		given: "a ? value",
		must: "return true",
		received: () => isCronStartOrBlank(CRON_START_OR_BLANK),
		wanted: () => true,
	},
	{
		given: "a value different than L",
		must: "return false",
		received: () => isCronStartOrBlank("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
