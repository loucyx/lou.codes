import type { Tests } from "@vangware/test";
import type { Maybe } from "@vangware/types";
import { undefineNaN } from "../src/undefineNaN.js";

export default [
	{
		given: "a valid number",
		must: "return correct value",
		received: () => undefineNaN(13),
		wanted: () => 13,
	},
	{
		given: "a octal string with a dot",
		must: "return correct value",
		received: () => undefineNaN(NaN),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
