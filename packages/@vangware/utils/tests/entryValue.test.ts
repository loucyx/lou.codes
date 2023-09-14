import type { Test } from "@vangware/test";
import type { Entry } from "@vangware/types";
import { entryValue } from "../src/entryValue.js";

const entry = ["foo", "bar"] as Entry<string, string>;

export default {
	given: "an entry",
	must: "return entry value",
	received: () => entryValue(entry),
	wanted: () => entry[1],
} satisfies Test<string>;
