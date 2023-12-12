import type { Test } from "@lou.codes/test";
import { constructSet } from "../src/constructSet.js";

export const constructSetTest = {
	given: "a constructSet",
	must: "return new instance of Set",
	received: () => constructSet().constructor.name,
	wanted: () => "Set",
} satisfies Test<string>;
