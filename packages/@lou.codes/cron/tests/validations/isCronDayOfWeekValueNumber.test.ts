import type { Tests } from "@lou.codes/test";
import { isCronDayOfWeekValueNumber } from "../../src/validations/isCronDayOfWeekValueNumber.js";

export const isCronDayOfWeekValueNumberTests = [
	{
		given: "a valid number value in the range 0-7",
		must: "return true",
		received: () => isCronDayOfWeekValueNumber(5),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 0-7",
		must: "return false",
		received: () => isCronDayOfWeekValueNumber(10),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isCronDayOfWeekValueNumber("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
