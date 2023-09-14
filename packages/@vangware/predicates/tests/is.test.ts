import type { Tests } from "@vangware/test";
import { is } from "../src/is.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const value = "foo";
const valueCopy = value;
const otherValue = "bar";

export default [
	{
		given: "two equal values",
		received: () => is(value)(valueCopy),
		...wantedTrue,
	},
	{
		given: "two different dates",
		received: () => is(value)(otherValue),
		...wantedFalse,
	},
	{
		given: "two equal objects",
		received: () => is({})({}),
		...wantedFalse,
	},
	{
		given: "two equal arrays",
		received: () => is([])([]),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
