import type { Tests } from "@vangware/test";
import { omit } from "../src/omit.js";

const omitFoo = omit("foo");

export default [
	{
		given: "an omit for the `foo` property and an object with said property",
		must: "return the object without `foo`",
		received: () => omitFoo({ bar: "bar", foo: "foo" }),
		wanted: () => ({ bar: "bar" }),
	},
	{
		given: "an omit for the `foo` property and an object without said property",
		must: "return the same object",
		received: () => omitFoo({ bar: "bar" }),
		wanted: () => ({ bar: "bar" }),
	},
	{
		given: "an omit for the `foo` property and an empty object",
		must: "return the same object",
		received: () => omitFoo({}),
		wanted: () => ({}),
	},
] satisfies Tests<object>;
