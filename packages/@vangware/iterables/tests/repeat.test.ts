import type { Tests } from "@vangware/test";
import { iterableToArray } from "../src/iterableToArray.js";
import { repeat } from "../src/repeat.js";

const repeat3Times = repeat(3);

export default [
	{
		given: 'a call to repeat with the string "test" and the number 3',
		must: 'return an array with 3 strings "test" on it',
		received: () => iterableToArray(repeat3Times("test")),
		wanted: () => ["test", "test", "test"],
	},
] satisfies Tests<ReadonlyArray<string>>;
