import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { Maybe, ReadOnlyArray } from "@lou.codes/types";
import { parseDecimalMap } from "../src/parseDecimalMap.js";

export const parseDecimalMapTests = [
	{
		given: "a number 10 and a 13",
		must: "return parsed values",
		received: () => iterableToArray(parseDecimalMap(["10", "13"])),
		wanted: () => [10, 13],
	},
	{
		given: "two invalid strings",
		must: "return parsed undefined",
		received: () => iterableToArray(parseDecimalMap(["foo", "bar"])),
		wanted: () => [undefined, undefined],
	},
] satisfies Tests<ReadOnlyArray<Maybe<number>>>;
