import type { Test } from "../src/Test.js";

export const singleTests = {
	given: "a single test",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
