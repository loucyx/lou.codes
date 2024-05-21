import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { zipRangeNames } from "../src/zipRangeNames.js";

export const zipRangeNamesTests = [
	{
		given: "a number 10 and a 13",
		must: "return zipped array with from and to",
		received: () => iterableToArray(zipRangeNames(["10", "13"])),
		wanted: () => [
			["from", "10"],
			["to", "13"],
		],
	},
] satisfies Tests<ReadOnlyArray<readonly ["from" | "to", string]>>;
