import type { Test } from "@vangware/test";
import { constructRegExp } from "../src/constructRegExp.js";

export default {
	given: "a constructRegExp",
	must: "return new instance of RegExp",
	received: () => constructRegExp("").constructor.name,
	wanted: () => "RegExp",
} satisfies Test<string>;
