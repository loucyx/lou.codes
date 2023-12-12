import type { Tests } from "@lou.codes/test";
import { isCronRange } from "../../src/validations/isCronRange.js";

export const isCronRangeTests = [
	{
		given: "a valid range (number-number)",
		must: "return true",
		received: () => isCronRange({ from: 10, to: 20 }),
		wanted: () => true,
	},
	{
		given: "an empty object",
		must: "return false",
		received: () => isCronRange({}),
		wanted: () => false,
	},
	{
		given: "a value without hyphens",
		must: "return false",
		received: () => isCronRange("value"),
		wanted: () => false,
	},
] as Tests<boolean>;
