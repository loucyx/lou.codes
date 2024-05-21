import type { Tests } from "@lou.codes/test";
import { isAllToken } from "../src/isAllToken.js";

export const isAllTokenTests = [
	{
		given: "a string that is a *",
		must: "return true",
		received: () => isAllToken("*"),
		wanted: () => true,
	},
	{
		given: "a string that isn't a *",
		must: "return false",
		received: () => isAllToken("nope"),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
