import type { Tests } from "@vangware/test";
import { set } from "../src/set.js";

const setFoo = set("foo")(true);

export default [
	{
		given: "a setter and an object with that property on it",
		must: "return object with updated property",
		received: () => setFoo({ foo: false }),
		wanted: () => ({ foo: true }),
	},
	{
		given: "a setter and an object without that property on it",
		must: "return object with new property",
		received: () => setFoo({}),
		wanted: () => ({ foo: true }),
	},
] satisfies Tests<object>;
