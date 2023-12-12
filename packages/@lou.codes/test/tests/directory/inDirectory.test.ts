import type { Test } from "../../src/types/Test.js";

export const inDirectoryTest = {
	given: "a single test in a directory",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
