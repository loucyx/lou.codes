import type { Tests } from "../src/types/Tests.js";

export const multiple = [
	{
		given: "a test array",
		must: "work",
		received: () => true,
		wanted: () => true,
	},
] satisfies Tests;
