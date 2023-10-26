import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
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
