import type { Tests } from "../src/types/Tests.js";

// eslint-disable-next-line import/no-default-export
export default [
	{
		given: "a default test array",
		must: "work",
		received: () => true,
		wanted: () => true,
	},
] satisfies Tests;
