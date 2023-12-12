import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { undefineNaN } from "../src/undefineNaN.js";

export const undefineNaNTests = [
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
