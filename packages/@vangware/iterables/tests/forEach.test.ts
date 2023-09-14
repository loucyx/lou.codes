import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { forEach } from "../src/forEach.js";
import { range } from "../src/range.js";

const forEachTest = <Item>(iterable: Iterable<Item>) => {
	// eslint-disable-next-line functional/no-let, functional/prefer-readonly-type
	const output: Array<Item> = [];

	// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
	forEach((item: Item) => output.push(item))(iterable);

	return output;
};

export default [
	{
		given: "a string",
		must: "loop over every letter of that string",
		received: () => forEachTest("Vangware"),
		wanted: () => [..."Vangware"],
	},
	{
		given: "an array",
		must: "loop over every item of that array",
		received: () => forEachTest(["🟢", "🟩"]),
		wanted: () => ["🟢", "🟩"],
	},
	{
		given: "a generator",
		must: "loop over every yielded value",
		received: () => forEachTest(range(1)(0)(10)),
		wanted: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	},
] satisfies Tests<ReadOnlyArray>;
