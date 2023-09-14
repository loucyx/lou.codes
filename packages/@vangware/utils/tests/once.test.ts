import type { Test } from "@vangware/test";
import { once } from "../src/once.js";

const double = (value: number) => value * 2;
const onceDouble = once(double);

export default {
	given: "a onceDouble function and an array of values",
	must: "run once and then return the same result",
	received: () => [2, 3, 4, 5, 6, 7].map(onceDouble),
	wanted: () => [4, 4, 4, 4, 4, 4],
} satisfies Test<ReadonlyArray<number>>;
