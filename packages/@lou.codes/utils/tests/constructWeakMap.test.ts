import type { Test } from "@lou.codes/test";
import { constructWeakMap } from "../src/constructWeakMap.js";

export const constructWeakMapTest = {
	given: "a constructWeakMap",
	must: "return new instance of WeakMap",
	received: () => constructWeakMap().constructor.name,
	wanted: () => "WeakMap",
} satisfies Test<string>;
