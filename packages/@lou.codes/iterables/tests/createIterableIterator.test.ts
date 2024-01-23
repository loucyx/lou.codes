import type { Test } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { createIterableIterator } from "../src/createIterableIterator.js";

const numbers = [0, 1, 2, 3];
const iterableIteratorNumbers = createIterableIterator(function* () {
	// eslint-disable-next-line functional/no-loop-statements
	for (const number of numbers) {
		yield number;
	}
});

export const createIterableIteratorTest = {
	given: "an iterable iterator that we'll run twice",
	must: "should return the values twice",
	received: () => [...iterableIteratorNumbers, ...iterableIteratorNumbers],
	wanted: () => [0, 1, 2, 3, 0, 1, 2, 3],
} satisfies Test<ReadOnlyArray<number>>;
