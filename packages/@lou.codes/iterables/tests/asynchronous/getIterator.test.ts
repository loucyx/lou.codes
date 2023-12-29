import type { Tests } from "@lou.codes/test";
import { getIterator } from "../../src/asynchronous/getIterator.js";

const array = [0, 1, 2];

export const getIteratorTests = [
	{
		given: "an array",
		must: "return array's iterator",
		received: () => getIterator(array),
		wanted: () => array[Symbol.iterator](),
	},
] satisfies Tests;
