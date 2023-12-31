import type { Tests } from "@lou.codes/test";
import { isCronDayOfMonthValue } from "../../src/validations/isCronDayOfMonthValue.js";

export const isCronDayOfMonthValueTests = [
	{
		given: "a valid number value in the range 1-31",
		must: "return true",
		received: () => isCronDayOfMonthValue(13),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 1-31",
		must: "return false",
		received: () => isCronDayOfMonthValue(50),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isCronDayOfMonthValue("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
