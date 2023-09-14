import type { Tests } from "@vangware/test";
import { whenIsIsomorphicIterable } from "../src/whenIsIsomorphicIterable.js";

const whenIsAsynchronousIterableTest = whenIsIsomorphicIterable(() => "truthy")(
	() => "falsy",
);

export default [
	{
		given: "a whenIsAsynchronousIterable with an array",
		must: "receive the truthy value",
		received: () => whenIsAsynchronousIterableTest([]),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsAsynchronousIterable without an array",
		must: "receive the falsy value",
		received: () => whenIsAsynchronousIterableTest(false),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
