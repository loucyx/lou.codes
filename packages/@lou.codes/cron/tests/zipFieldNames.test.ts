import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { zipFieldNames } from "../src/zipFieldNames.js";

export const zipFieldNamesTests = [
	{
		given: "a number 10 and a 13",
		must: "return zipped tuples with some field names",
		received: () => iterableToArray(zipFieldNames(["10", "13"])),
		wanted: () => [
			["minute", "10"],
			["hour", "13"],
		],
	},
] satisfies Tests<
	ReadOnlyArray<
		readonly [
			"minute" | "hour" | "dayOfMonth" | "month" | "dayOfWeek",
			string,
		]
	>
>;
