import type { Tests } from "@lou.codes/test";
import { optional } from "../src/optional.js";

export const optionalTests = [
	{
		given: "a number 13",
		must: "add a ? to the right",
		received: () => optional(13),
		wanted: () => "13?",
	},
] satisfies Tests<string>;
