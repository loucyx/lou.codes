import type { Test } from "@lou.codes/test";
import { constructRegExp } from "../src/constructRegExp.js";

export const constructRegExpTest = {
	given: "a constructRegExp",
	must: "return new instance of RegExp",
	received: () => constructRegExp("").constructor.name,
	wanted: () => "RegExp",
} satisfies Test<string>;
