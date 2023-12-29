import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { prepend } from "../../src/asynchronous/prepend.js";

const prependNumbers = prepend([0, 1, 2, 3, 4]);

export const prependTests = [
	{
		given: "an array of numbers an array of strings",
		must: "return both arrays concatenated",
		received: () => iterableToArray(prependNumbers(["foo", "bar"])),
		wanted: () => [0, 1, 2, 3, 4, "foo", "bar"],
	},
] satisfies Tests<ReadOnlyArray<number | string>>;
