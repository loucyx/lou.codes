import type { Test } from "@lou.codes/test";
import { construct } from "../src/construct.js";

const constructRegExp = construct(RegExp);

export const constructTest = {
	given: "a class being constructed",
	must: "return new instance of the class",
	received: () => constructRegExp("").constructor.name,
	wanted: () => "RegExp",
} satisfies Test<string>;
