import type { Tests } from "@vangware/test";
import { when } from "../src/when.js";

const even = (value: number) => value % 2 === 0;
const half = (value: number) => value / 2;
const double = (value: number) => value * 2;
const whenIsEven = when(even)(half)(double);

export default [
	{
		given: "a when function that halves even numbers and doubles odd numbers and an even number",
		must: "receive half the number",
		received: () => whenIsEven(2),
		wanted: () => 1,
	},
	{
		given: "a when function that halves even numbers and doubles odd numbers and an odd number",
		must: "receive double the number",
		received: () => whenIsEven(3),
		wanted: () => 6,
	},
] satisfies Tests<number>;
