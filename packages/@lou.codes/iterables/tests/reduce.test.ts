import type { Tests } from "@lou.codes/test";
import { reduce } from "../src/reduce.js";

const add = (addend2: number) => (addend1: number) => addend1 + addend2;
const sum = reduce(add);
const sumFrom0 = sum(0);

export default [
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: () => sumFrom0([1, 2, 3]),
		wanted: () => 6,
	},
] satisfies Tests<number>;
