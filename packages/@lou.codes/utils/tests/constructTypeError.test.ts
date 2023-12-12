import type { Test } from "@lou.codes/test";
import { constructTypeError } from "../src/constructTypeError.js";

export const constructTypeErrorTest = {
	given: "a constructTypeError",
	must: "return new instance of TypeError",
	received: () => constructTypeError().constructor.name,
	wanted: () => "TypeError",
} satisfies Test<string>;
