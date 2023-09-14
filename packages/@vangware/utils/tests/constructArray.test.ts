import type { Test } from "@vangware/test";
import { constructArray } from "../src/constructArray.js";

export default {
	given: "a constructArray",
	must: "return new instance of Array",
	received: () => constructArray().constructor.name,
	wanted: () => "Array",
} satisfies Test<string>;
