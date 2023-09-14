import type { Test } from "@vangware/test";
import { constructIntlPluralRules } from "../src/constructIntlPluralRules.js";

export default {
	given: "a constructIntlPluralRules",
	must: "return new instance of Intl.PluralRules",
	received: () => constructIntlPluralRules().constructor.name,
	wanted: () => "PluralRules",
} satisfies Test<string>;
