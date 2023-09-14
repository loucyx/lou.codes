import type { Test } from "@vangware/test";
import { construct } from "../src/construct.js";

const constructRegExp = construct(RegExp);

export default {
	given: "a class being constructed",
	must: "return new instance of the class",
	received: () => constructRegExp("").constructor.name,
	wanted: () => "RegExp",
} satisfies Test<string>;
