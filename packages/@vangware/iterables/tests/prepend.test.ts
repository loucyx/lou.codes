import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { prepend } from "../src/prepend.js";

const prependNumbers = prepend([0, 1, 2, 3, 4]);

export default [
	{
		given: "an array of numbers an array of strings",
		must: "return both arrays concatenated",
		received: () => iterableToArray(prependNumbers(["foo", "bar"])),
		wanted: () => [0, 1, 2, 3, 4, "foo", "bar"],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
