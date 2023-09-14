import type { Test } from "@vangware/test";
import { constructTypeError } from "../src/constructTypeError.js";

export default {
	given: "a constructTypeError",
	must: "return new instance of TypeError",
	received: () => constructTypeError().constructor.name,
	wanted: () => "TypeError",
} satisfies Test<string>;
