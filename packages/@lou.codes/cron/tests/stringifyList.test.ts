import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { stringifyList } from "../src/stringifyList.js";

export const stringifyListTests = [
	{
		given: "an array of numbers",
		must: "return stringified list",
		received: () => stringifyList([10, 13]),
		wanted: () => "10,13",
	},
	{
		given: "an invalid value",
		must: "return undefined",
		received: () => stringifyList("nope" as "*"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<string>>;
