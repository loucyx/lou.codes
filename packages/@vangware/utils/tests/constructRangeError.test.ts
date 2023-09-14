import type { Test } from "@vangware/test";
import { constructRangeError } from "../src/constructRangeError.js";

export default {
	given: "a constructRangeError",
	must: "return new instance of RangeError",
	received: () => constructRangeError().constructor.name,
	wanted: () => "RangeError",
} satisfies Test<string>;
