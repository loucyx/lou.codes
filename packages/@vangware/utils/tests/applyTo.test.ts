import type { Test } from "@vangware/test";
import { applyTo } from "../src/applyTo.js";

const double = (value: number) => value * 2;
const applyTo2 = applyTo(2);

export default {
	given: "applyTo with a number and a duplicate function",
	must: "return double of number",
	received: () => applyTo2(double),
	wanted: () => 4,
} satisfies Test<number>;
