import type { Test } from "@vangware/test";
import { constructSyntaxError } from "../src/constructSyntaxError.js";

export default {
	given: "a constructSyntaxError",
	must: "return new instance of SyntaxError",
	received: () => constructSyntaxError().constructor.name,
	wanted: () => "SyntaxError",
} satisfies Test<string>;
