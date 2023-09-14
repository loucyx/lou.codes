import type { Tests } from "@vangware/test";
import { whenFalsy } from "../src/whenFalsy.js";

const even = (value: number) => value % 2 === 0;
const half = (value: number) => value / 2;
const whenFalsyIsEven = whenFalsy(even)(half);

export default [
	{
		given: "a whenFalsy function that halves odd numbers receiving an even number",
		must: "receive half the number",
		received: () => whenFalsyIsEven(2),
		wanted: () => 2,
	},
	{
		given: "a whenFalsy function that halves odd numbers receiving an odd number",
		must: "receive double the number",
		received: () => whenFalsyIsEven(3),
		wanted: () => 1.5,
	},
] satisfies Tests<number>;
