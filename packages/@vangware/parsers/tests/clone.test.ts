import type { Tests } from "@vangware/test";
import type { Primitive, ReadOnlyArray, ReadOnlyRecord } from "@vangware/types";
import { clone } from "../src/clone.js";

export default [
	{
		given: "an empty object",
		must: "return copy of object",
		received: () => clone({}),
		wanted: () => ({}),
	},
	{
		given: "an object with a string",
		must: "return copy of object",
		received: () => clone({ foo: "bar" }),
		wanted: () => ({ foo: "bar" }),
	},
	{
		given: "an empty array",
		must: "return copy of empty array",
		received: () => clone([]),
		wanted: () => [],
	},
	{
		given: "an array with numbers",
		must: "return copy of array",
		received: () => clone([1, 2, 3]),
		wanted: () => [1, 2, 3],
	},
	{
		given: "a string",
		must: "return copy of string",
		received: () => clone("string"),
		wanted: () => "string",
	},
	{
		given: "an non serializable object ",
		must: "return undefined",
		received: () => clone({ function: () => undefined }),
		wanted: () => undefined,
	},
	{
		given: "a a number",
		must: "return a copy of number",
		received: () => clone(1),
		wanted: () => 1,
	},
] satisfies Tests<Primitive | ReadOnlyArray | ReadOnlyRecord>;
