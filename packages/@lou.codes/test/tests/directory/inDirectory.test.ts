import type { Test } from "../../src/types/Test.js";

export default {
	given: "a single test in a directory",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
