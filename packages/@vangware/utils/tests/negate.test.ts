import type { Test } from "@vangware/test";
import { negate } from "../src/negate.js";

const isEven = (value: number) => value % 2 === 0;
const isOdd = negate(isEven);

export default {
	given: "a function that returns true when receiving even numbers",
	must: "return true when calling it with odds",
	received: () => isOdd(1),
	wanted: () => true,
} satisfies Test<boolean>;
