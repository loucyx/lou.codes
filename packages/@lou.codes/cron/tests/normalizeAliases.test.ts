import type { Tests } from "@lou.codes/test";
import { normalizeAliases } from "../src/normalizeAliases.js";

export const normalizeAliasesTests = [
	{
		given: "a valid expression with no aliases",
		must: "return same expression",
		received: () => normalizeAliases("* * * * *"),
		wanted: () => "* * * * *",
	},
	{
		given: "a valid expression with month and day of week aliased",
		must: "return expression with aliases normalized",
		received: () => normalizeAliases("* * 13 oct fri"),
		wanted: () => "* * 13 10 5",
	},
] satisfies Tests<string>;
