import type { Tests } from "@lou.codes/test";
import { allow } from "../src/allow.js";

export const allowTests = [
	{
		given: "a number 13",
		must: "add a star to the right",
		received: () => allow(13),
		wanted: () => "13*",
	},
] satisfies Tests<string>;
