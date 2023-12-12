import type { Test } from "@lou.codes/test";
import type { Entry } from "@lou.codes/types";
import { entryValue } from "../src/entryValue.js";

const entry = ["foo", "bar"] as Entry<string, string>;

export const entryValueTest = {
	given: "an entry",
	must: "return entry value",
	received: () => entryValue(entry),
	wanted: () => entry[1],
} satisfies Test<string>;
