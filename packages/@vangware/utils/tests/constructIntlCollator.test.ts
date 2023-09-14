import type { Test } from "@vangware/test";
import { constructIntlCollator } from "../src/constructIntlCollator.js";

export default {
	given: "a constructIntlCollator",
	must: "return new instance of Intl.Collator",
	received: () => constructIntlCollator().constructor.name,
	wanted: () => "Collator",
} satisfies Test<string>;
