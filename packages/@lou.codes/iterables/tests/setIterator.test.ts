import type { Tests } from "@lou.codes/test";
import { setIterator } from "../src/setIterator.js";

export const setIteratorTests = [
	{
		given: 'a value "🟢" and an object `{ foo: "bar" }`',
		must: "add that value as an iterator",
		received: () => setIterator("🟢")({ foo: "bar" }),
		wanted: () => ({ [Symbol.iterator]: "🟢", foo: "bar" }),
	},
] satisfies Tests<object>;
