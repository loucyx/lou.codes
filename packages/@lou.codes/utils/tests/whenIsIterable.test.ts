import type { Tests } from "@lou.codes/test";
import { whenIsIterable } from "../src/whenIsIterable.js";

const whenIsIterableTest = whenIsIterable(() => "truthy")(() => "falsy");

export const whenIsIterableTests = [
	{
		given: "a whenIsIterable with an array",
		must: "receive the truthy value",
		received: () =>
			whenIsIterableTest(
				(function* () {
					yield* [];
				})(),
			),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsIterable without an array",
		must: "receive the falsy value",
		received: () => whenIsIterableTest(false),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
