import type { Tests } from "@vangware/test";
import { constructRegExp } from "../src/constructRegExp.js";
import { whenIsPrototypeOfObject } from "../src/whenIsPrototypeOfObject.js";

const whenIsPrototypeOfObjectTest = whenIsPrototypeOfObject(() => "truthy")(
	() => "falsy",
);

export default [
	{
		given: "a whenIsPrototypeOfObject with an object with Object prototype.",
		must: "receive the truthy value",
		received: () => whenIsPrototypeOfObjectTest({}),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsPrototypeOfObject an array.",
		must: "receive the falsy value",
		received: () => whenIsPrototypeOfObjectTest([]),
		wanted: () => "falsy",
	},
	{
		given: "a whenIsPrototypeOfObject with an object without the Object prototype.",
		must: "receive the falsy value",
		received: () => whenIsPrototypeOfObjectTest(constructRegExp("")),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
