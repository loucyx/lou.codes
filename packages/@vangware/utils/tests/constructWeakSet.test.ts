import type { Test } from "@vangware/test";
import { constructWeakSet } from "../src/constructWeakSet.js";

export default {
	given: "a constructWeakSet",
	must: "return new instance of WeakSet",
	received: () => constructWeakSet().constructor.name,
	wanted: () => "WeakSet",
} satisfies Test<string>;
