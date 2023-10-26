import type { Test } from "@lou.codes/test";
import type { Entry } from "@lou.codes/types";
import { entryKey } from "../src/entryKey.js";

const entry = ["foo", "bar"] as Entry<string, string>;

export default {
	given: "an entry",
	must: "return entry key",
	received: () => entryKey(entry),
	wanted: () => entry[0],
} satisfies Test<string>;
