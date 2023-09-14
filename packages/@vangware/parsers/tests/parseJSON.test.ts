import type { Tests } from "@vangware/test";
import type { Primitive, ReadOnlyArray, ReadOnlyRecord } from "@vangware/types";
import { parseJSON } from "../src/parseJSON.js";

export default [
	{
		given: "a JSON with a malicious __proto__",
		must: "return object without __proto__",
		received: () => parseJSON('{"__proto__":"😈"}'),
		wanted: () => ({}),
	},
	{
		given: "a JSON with an empty object",
		must: "return empty object",
		received: () => parseJSON("{}"),
		wanted: () => ({}),
	},
	{
		given: "a JSON with an object",
		must: "return empty object",
		received: () => parseJSON('{"foo":"bar"}'),
		wanted: () => ({ foo: "bar" }),
	},
	{
		given: "a JSON with an empty array",
		must: "return empty array",
		received: () => parseJSON("[]"),
		wanted: () => [],
	},
	{
		given: "a JSON with an array with numbers",
		must: "return array",
		received: () => parseJSON("[1,2,3]"),
		wanted: () => [1, 2, 3],
	},
	{
		given: "a JSON with a string",
		must: "return a string",
		received: () => parseJSON('"string"'),
		wanted: () => "string",
	},
	{
		given: "a invalid JSON",
		must: "return undefined",
		received: () => parseJSON("invalid"),
		wanted: () => undefined,
	},
	{
		given: "a JSON with a number",
		must: "return a number",
		received: () => parseJSON("1"),
		wanted: () => 1,
	},
] satisfies Tests<Primitive | ReadOnlyArray | ReadOnlyRecord>;
