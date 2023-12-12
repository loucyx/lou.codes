import type { Test } from "@lou.codes/test";
import { thunk } from "../src/thunk.js";

const double = (value: number) => value * 2;
const thunkDouble = thunk(double);

export const thunkTest = {
	given: "a thunk for a double function",
	must: "receive a delayed double function",
	received: () => thunkDouble(2)(),
	wanted: () => 4,
} satisfies Test<number>;
