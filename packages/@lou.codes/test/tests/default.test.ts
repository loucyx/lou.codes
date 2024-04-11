import type { Test } from "../src/Test.js";

// eslint-disable-next-line import/no-default-export
export default {
	given: "a default test",
	must: "work",
	received: () => true,
	wanted: () => true,
} satisfies Test;
