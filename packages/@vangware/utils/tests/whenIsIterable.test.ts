import type { Tests } from "@vangware/test";
import { whenIsIterable } from "../src/whenIsIterable.js";

const whenIsIterableTest = whenIsIterable(() => "truthy")(() => "falsy");

export default [
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
