import type { Test } from "../src/types/Test.js";

export default {
	given: "a single test",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
