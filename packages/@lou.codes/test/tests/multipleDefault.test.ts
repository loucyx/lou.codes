import type { Tests } from "../src/Tests.js";

export default [
	{
		given: "a default test array",
		must: "work",
		received: () => true,
		wanted: () => true,
	},
] satisfies Tests;
