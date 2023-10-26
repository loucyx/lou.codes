import type { Tests } from "@lou.codes/test";
import { isCronList } from "../../src/validations/isCronList.js";

export default [
	{
		given: "a value with commas",
		must: "return true",
		received: () => isCronList(["value", "value", "value"]),
		wanted: () => true,
	},
	{
		given: "a value without commas",
		must: "return false",
		received: () => isCronList("value"),
		wanted: () => false,
	},
] as Tests<boolean>;
