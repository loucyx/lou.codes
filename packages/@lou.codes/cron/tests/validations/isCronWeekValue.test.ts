import type { Tests } from "@lou.codes/test";
import { isCronWeekValue } from "../../src/validations/isCronWeekValue.js";

export const isCronWeekValueTests = [
	{
		given: "a valid number value in the range 1-5",
		must: "return true",
		received: () => isCronWeekValue(2),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 1-5",
		must: "return false",
		received: () => isCronWeekValue(8),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isCronWeekValue("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
