import type { Test } from "@lou.codes/test";
import { constructRangeError } from "../src/constructRangeError.js";

export const constructRangeErrorTest = {
	given: "a constructRangeError",
	must: "return new instance of RangeError",
	received: () => constructRangeError().constructor.name,
	wanted: () => "RangeError",
} satisfies Test<string>;
