import type { Tests } from "../../src/types/Tests.js";

export const multipleInDirectoryTest = [
	{
		given: "a test array in a directory",
		must: "work",
		received: () => true,
		wanted: () => true,
	},
] satisfies Tests;
