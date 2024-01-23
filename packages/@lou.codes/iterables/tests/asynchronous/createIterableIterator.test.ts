import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { createIterableIterator } from "../../src/asynchronous/createIterableIterator.js";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";

const numbers = [0, 1, 2, 3];
const iterableIteratorNumbers = createIterableIterator(function* () {
	// eslint-disable-next-line functional/no-loop-statements
	for (const number of numbers) {
		yield number;
	}
});
const asyncIterableIteratorNumbers = createIterableIterator(async function* () {
	// eslint-disable-next-line functional/no-loop-statements
	for (const number of numbers) {
		yield await Promise.resolve(number);
	}
});

export const createIterableIteratorTest = [
	{
		given: "an iterable iterator that we'll run twice",
		must: "should return the values twice",
		received: () => [
			...iterableIteratorNumbers,
			...iterableIteratorNumbers,
		],
		wanted: () => [0, 1, 2, 3, 0, 1, 2, 3],
	},
	{
		given: "an asynchronous iterable iterator that we'll run twice",
		must: "should return the values twice",
		received: async () => [
			...(await iterableToArray(asyncIterableIteratorNumbers)),
			...(await iterableToArray(asyncIterableIteratorNumbers)),
		],
		wanted: () => [0, 1, 2, 3, 0, 1, 2, 3],
	},
] satisfies Tests<ReadOnlyArray<number>>;
