import type { Tests } from "@vangware/test";
import { isFalsy } from "../src/isFalsy.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a falsy number",
		received: () => isFalsy(0) && isFalsy(NaN),
		...wantedTrue,
	},
	{
		given: "an empty string",
		received: () => isFalsy(""),
		...wantedTrue,
	},
	{
		given: "a false boolean",
		received: () => isFalsy(false),
		...wantedTrue,
	},
	{
		given: "a nullish value",
		// eslint-disable-next-line no-null/no-null
		received: () => isFalsy(null) && isFalsy(undefined),
		...wantedTrue,
	},
	{
		given: "a truthy number",
		received: () => isFalsy(1),
		...wantedFalse,
	},
	{
		given: "a non-empty string",
		received: () => isFalsy("string"),
		...wantedFalse,
	},
	{
		given: "a true boolean",
		received: () => isFalsy(true),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
