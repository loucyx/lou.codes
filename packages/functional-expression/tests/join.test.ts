import type { Tests } from "@lou.codes/test";
import { join } from "../src/join.js";

export const joinTests = [
	{
		given: "a 1 and a 3",
		must: "join strings as 13",
		received: () => join(1, 3),
		wanted: () => "13",
	},
] satisfies Tests<string>;
