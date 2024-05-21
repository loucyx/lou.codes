import type { Tests } from "@lou.codes/test";
import { valueOrRangeRegExp } from "../src/valueOrRangeRegExp.js";

export const valueOrRangeRegExpTests = [
	{
		given: "a number 13",
		must: "return value or range regular expression",
		received: () => valueOrRangeRegExp(13),
		wanted: () => "13(?:-13)?",
	},
] satisfies Tests<string>;
