import type { Tests } from "@lou.codes/test";
import { isValidExpression } from "../src/isValidExpression.js";

export const isValidExpressionTests = [
	{
		given: "a string that is a *",
		must: "return false",
		received: () => isValidExpression("*"),
		wanted: () => false,
	},
	{
		given: "a valid expression",
		must: "return true",
		received: () => isValidExpression("* * * * *"),
		wanted: () => true,
	},
	{
		given: "a valid expression with irregular spacing",
		must: "return true",
		received: () => isValidExpression("	* *  *   *    *	"),
		wanted: () => true,
	},
	{
		given: "a valid expression with all values set",
		must: "return true",
		received: () => isValidExpression("1,2-5 1,2-5 1,2-5 1,2-5 1,2-5"),
		wanted: () => true,
	},
] satisfies Tests<boolean>;
