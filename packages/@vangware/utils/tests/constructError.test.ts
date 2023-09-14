import type { Test } from "@vangware/test";
import { constructError } from "../src/constructError.js";

export default {
	given: "a constructError",
	must: "return new instance of Error",
	received: () => constructError().constructor.name,
	wanted: () => "Error",
} satisfies Test<string>;
