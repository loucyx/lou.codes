import type { Tests } from "@vangware/test";
import { whenIsAsyncIterable } from "../src/whenIsAsyncIterable.js";

const whenIsAsyncIterableTest = whenIsAsyncIterable(() => "truthy")(
	() => "falsy",
);

export default [
	{
		given: "a whenIsAsyncIterable with an array",
		must: "receive the truthy value",
		received: () =>
			whenIsAsyncIterableTest(
				// eslint-disable-next-line @typescript-eslint/require-await
				(async function* () {
					yield* [];
				})(),
			),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsAsyncIterable without an array",
		must: "receive the falsy value",
		received: () => whenIsAsyncIterableTest(false),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
