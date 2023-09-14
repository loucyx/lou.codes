import type { Test } from "@vangware/test";
import { flip } from "../src/flip.js";

const concat = (first: string) => (second: string) => `${first}${second}`;
const flippedConcat = flip(concat);

export default {
	given: "a concat function and a flip function",
	must: "return the result of the function with the flipped arguments",
	received: () => flippedConcat("3")("1"),
	wanted: () => "13",
} satisfies Test<string>;
