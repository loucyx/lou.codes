import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { Maybe, ReadOnlyArray } from "@lou.codes/types";
import { parseNumberMap } from "../src/parseNumberMap.js";

export const parseDecimalMapTests = [
	{
		given: "a number 10 and a 13",
		must: "return parsed values",
		received: () => iterableToArray(parseNumberMap(["10", "13"])),
		wanted: () => [10, 13],
	},
	{
		given: "ranges with padding zeroes",
		must: "return parsed values",
		received: () => iterableToArray(parseNumberMap(["01", "02"])),
		wanted: () => [1, 2],
	},
	{
		given: "numbers beyond 59",
		must: "return undefined",
		received: () => iterableToArray(parseNumberMap(["99", "60"])),
		wanted: () => [undefined, undefined],
	},
] satisfies Tests<ReadOnlyArray<Maybe<number>>>;
