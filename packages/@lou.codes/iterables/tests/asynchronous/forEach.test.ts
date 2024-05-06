import type { Tests } from "@lou.codes/test";
import type { IsomorphicIterable, ReadOnlyArray } from "@lou.codes/types";
import { forEach } from "../../src/asynchronous/forEach.js";
import { range } from "../../src/asynchronous/range.js";

const forEachTest = <Item>(iterable: IsomorphicIterable<Item>) => {
	// eslint-disable-next-line functional/prefer-readonly-type
	const output: Array<Item> = [];

	// eslint-disable-next-line functional/immutable-data
	return forEach((item: Item) => void output.push(item))(iterable).then(
		_ => output,
	);
};

export const forEachTests = [
	{
		given: "a string",
		must: "loop over every letter of that string",
		received: () => forEachTest("Lou"),
		wanted: () => [..."Lou"],
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
