import type { Tests } from "@lou.codes/test";
import { range } from "../src/range.js";

export const rangeTests = [
	{
		given: "a 10 and a 13",
		must: "add a - between them",
		received: () => range(10)(13),
		wanted: () => "10-13",
	},
] satisfies Tests<string>;
