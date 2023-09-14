import type { Tests } from "@vangware/test";
import { pick } from "../src/pick.js";

const pickFoo = pick("foo");

export default [
	{
		given: "a pick for the `foo` property and an object with said property",
		must: "return the object only with `foo`",
		received: () => pickFoo({ bar: "bar", foo: "foo" }),
		wanted: () => ({ foo: "foo" }),
	},
	{
		given: "a pick for the `foo` property and an object without said property",
		must: "return an empty",
		received: () => pickFoo({ bar: "bar" }),
		wanted: () => ({}),
	},
	{
		given: "a pick for the `foo` property and an empty object",
		must: "return the same object",
		received: () => pickFoo({}),
		wanted: () => ({}),
	},
] satisfies Tests<object>;
