import type { Tests } from "@lou.codes/test";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { repeat } from "../../src/asynchronous/repeat.js";

const repeat3Times = repeat(3);

export const repeatTests = [
	{
		given: 'a call to repeat with the string "test" and the number 3',
		must: 'return an array with 3 strings "test" on it',
		received: () => iterableToArray(repeat3Times("test")),
		wanted: () => ["test", "test", "test"],
	},
] satisfies Tests<ReadonlyArray<string>>;
