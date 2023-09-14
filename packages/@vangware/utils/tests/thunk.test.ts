import type { Test } from "@vangware/test";
import { thunk } from "../src/thunk.js";

const double = (value: number) => value * 2;
const thunkTest = thunk(double);

export default {
	given: "a thunk for a double function",
	must: "receive a delayed double function",
	received: () => thunkTest(2)(),
	wanted: () => 4,
} satisfies Test<number>;
