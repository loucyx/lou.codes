import type { Tests } from "@vangware/test";
import type { Maybe } from "@vangware/types";
import { get } from "../src/get.js";

const getFoo = get("foo");

export default [
	{
		given: "a getter and an object with that property on it",
		must: "return property value",
		received: () => getFoo({ foo: true }),
		wanted: () => true,
	},
	{
		given: "a getter and an object without that property on it",
		must: "return property value",
		received: () => getFoo({} as { readonly foo: boolean }),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<boolean>>;
