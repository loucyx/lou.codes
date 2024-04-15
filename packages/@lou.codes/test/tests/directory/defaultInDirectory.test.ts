import type { Test } from "../../src/Test.js";

export default {
	given: "a default test in a directory",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
