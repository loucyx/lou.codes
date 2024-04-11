import type { Tests } from "../../src/Tests.js";

export const multipleInDirectoryTest = [
	{
		given: "a test array in a directory",
		must: "work",
		received: () => true,
		wanted: () => true,
	},
] satisfies Tests;
