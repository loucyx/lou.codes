import type { Tests } from "@lou.codes/test";
import { isCronMonthValueNumber } from "../../src/validations/isCronMonthValueNumber.js";

export const isCronMonthValueNumberTests = [
	{
		given: "a valid number value in the range 1-12",
		must: "return true",
		received: () => isCronMonthValueNumber(10),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 1-12",
		must: "return false",
		received: () => isCronMonthValueNumber(50),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isCronMonthValueNumber("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
