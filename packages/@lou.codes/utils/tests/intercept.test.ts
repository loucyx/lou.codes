import type { Tests } from "@lou.codes/test";
import { intercept } from "../src/intercept.js";

const interceptFoo = intercept({
	foo: () => "bar" as const,
});
const emptyObject = {} as const;
const fooObject = { foo: "foo" } as const;

export const interceptTests = [
	{
		given: 'a intercept function that sets a `foo` property to `"bar"` and an empty object',
		must: "return object with added property, and keep the original object the same",
		received: () => [interceptFoo(emptyObject), emptyObject],
		wanted: () => [{ foo: "bar" }, {}],
	},
	{
		given: 'a intercept function that sets a `foo` property to `"bar"` and an object with that same property',
		must: "return object with added property, and keep the original object the same",
		received: () => [interceptFoo(fooObject), fooObject],
		wanted: () => [{ foo: "bar" }, { foo: "foo" }],
	},
] satisfies Tests<object>;
