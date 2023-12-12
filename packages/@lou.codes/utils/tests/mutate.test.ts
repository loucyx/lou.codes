import type { Tests } from "@lou.codes/test";
import { mutate } from "../src/mutate.js";

const mutateFoo = mutate({ foo: "bar" });
const emptyObject = {};
const fooObject = { foo: "foo" };

export const mutateTests = [
	{
		given: 'a mutate function that sets a `foo` property to `"bar"` and an empty object',
		must: "return object with added property",
		received: () => (mutateFoo(emptyObject), emptyObject),
		wanted: () => ({ foo: "bar" }),
	},
	{
		given: 'a mutate function that sets a `foo` property to `"bar"` and an object with that same property',
		must: "return object with added property",
		received: () => (mutateFoo(fooObject), fooObject),
		wanted: () => ({ foo: "bar" }),
	},
] satisfies Tests<object>;
