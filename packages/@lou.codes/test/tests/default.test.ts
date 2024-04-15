import type { Test } from "../src/Test.js";

export default {
	given: "a default test",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
