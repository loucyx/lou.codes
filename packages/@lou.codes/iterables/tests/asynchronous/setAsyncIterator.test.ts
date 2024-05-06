import type { Tests } from "@lou.codes/test";
import { setAsyncIterator } from "../../src/asynchronous/setAsyncIterator.js";

export const setAsyncIteratorTests = [
	{
		given: 'a value "🟢" and an object `{ foo: "bar" }`',
		must: "add that value as an iterator",
		received: () => setAsyncIterator("🟢")({ foo: "bar" }),
		wanted: () => ({ [Symbol.asyncIterator]: "🟢", foo: "bar" }),
	},
] satisfies Tests<object>;
