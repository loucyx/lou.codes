import type { Tests } from "@lou.codes/test";
import { isStringHoursValue } from "../../src/validations/isStringHoursValue.js";

export const isStringHoursValueTests = [
	{
		given: "a valid number value in the range 0-23",
		must: "return true",
		received: () => isStringHoursValue("12"),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 0-23",
		must: "return false",
		received: () => isStringHoursValue("50"),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isStringHoursValue("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
