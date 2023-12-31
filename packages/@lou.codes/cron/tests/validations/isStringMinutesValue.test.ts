import type { Tests } from "@lou.codes/test";
import { isStringMinutesValue } from "../../src/validations/isStringMinutesValue.js";

export const isStringMinutesValueTests = [
	{
		given: "a valid number value in the range 0-59",
		must: "return true",
		received: () => isStringMinutesValue("30"),
		wanted: () => true,
	},
	{
		given: "an invalid number outside the range 0-59",
		must: "return false",
		received: () => isStringMinutesValue("80"),
		wanted: () => false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: () => isStringMinutesValue("INVALID"),
		wanted: () => false,
	},
] as Tests<boolean>;
