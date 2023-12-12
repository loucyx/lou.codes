import type { Tests } from "@lou.codes/test";
import { whenTruthy } from "../src/whenTruthy.js";

const even = (value: number) => value % 2 === 0;
const half = (value: number) => value / 2;
const whenTruthyIsEven = whenTruthy(even)(half);

export const whenTruthyTests = [
	{
		given: "a whenTruthy function that halves even numbers receiving an even number",
		must: "receive half the number",
		received: () => whenTruthyIsEven(2),
		wanted: () => 1,
	},
	{
		given: "a whenTruthy function that halves even numbers receiving an odd number",
		must: "receive double the number",
		received: () => whenTruthyIsEven(3),
		wanted: () => 3,
	},
] satisfies Tests<number>;
