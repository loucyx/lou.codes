import type { Tests } from "@lou.codes/test";
import { valueRangeOrListRegExp } from "../src/valueRangeOrListRegExp.js";

export const valueRangeOrListRegExpTests = [
	{
		given: "a number 13",
		must: "return string expression",
		received: () => valueRangeOrListRegExp(13),
		wanted: () => "(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))",
	},
] satisfies Tests<string>;
