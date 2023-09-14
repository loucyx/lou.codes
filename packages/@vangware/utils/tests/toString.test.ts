import type { Tests } from "@vangware/test";
import { toString } from "../src/toString.js";

export default [
	{
		given: "a toString for a string",
		must: "receive same string",
		received: () => toString("foo"),
		wanted: () => "foo",
	},
	{
		given: "a toString for a number",
		must: "receive number as string",
		received: () => toString(13),
		wanted: () => "13",
	},
	{
		given: "a toString for a null",
		must: "receive null as string",
		// eslint-disable-next-line no-null/no-null
		received: () => toString(null),
		wanted: () => "null",
	},
	{
		given: "a toString for a undefined",
		must: "receive undefined as string",
		received: () => toString(undefined),
		wanted: () => "undefined",
	},
	{
		given: "a toString for a boolean",
		must: "receive boolean as string",
		received: () => toString(true),
		wanted: () => "true",
	},
	{
		given: "a toString for a bigint",
		must: "receive bigint as string",
		received: () => toString(13n),
		wanted: () => "13",
	},
	{
		given: "an object with a `toString` method",
		must: "receive returned value of `toString`",
		received: () => toString({ toString: () => "foo" as const }),
		wanted: () => "foo",
	},
	{
		given: "an object",
		must: "receive default [object Object]",
		received: () => toString({}),
		wanted: () => "[object Object]",
	},
] satisfies Tests<string>;
