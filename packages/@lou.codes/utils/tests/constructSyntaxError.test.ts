import type { Test } from "@lou.codes/test";
import { constructSyntaxError } from "../src/constructSyntaxError.js";

export default {
	given: "a constructSyntaxError",
	must: "return new instance of SyntaxError",
	received: () => constructSyntaxError().constructor.name,
	wanted: () => "SyntaxError",
} satisfies Test<string>;
