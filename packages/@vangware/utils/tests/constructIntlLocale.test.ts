import type { Test } from "@vangware/test";
import { constructIntlLocale } from "../src/constructIntlLocale.js";

export default {
	given: "a constructIntlLocale",
	must: "return new instance of Intl.Locale",
	received: () => constructIntlLocale("en-US").constructor.name,
	wanted: () => "Locale",
} satisfies Test<string>;
