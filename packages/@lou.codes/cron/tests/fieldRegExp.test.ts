import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { fieldRegExp } from "../src/fieldRegExp.js";

export const fieldRegExpTests = [
	{
		given: "a test named expression with the value 13",
		must: "return regular expression for a cron field",
		received: () => fieldRegExp("test", "13"),
		wanted: () =>
			raw`(?<test>\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))`,
	},
] satisfies Tests<string>;
