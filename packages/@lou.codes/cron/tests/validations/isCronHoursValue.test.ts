import type { Tests } from "@lou.codes/test";
import { isCronHoursValue } from "../../src/validations/isCronHoursValue.js";

export const isCronHoursValueTests = [
	{
		given: "a valid number value in the range 0-23",
		must: "return true",
		received: () => isCronHoursValue(12),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 0-23",
		must: "return false",
		received: () => isCronHoursValue(50),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isCronHoursValue("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
