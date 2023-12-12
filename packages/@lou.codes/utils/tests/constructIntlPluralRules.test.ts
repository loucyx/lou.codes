import type { Test } from "@lou.codes/test";
import { constructIntlPluralRules } from "../src/constructIntlPluralRules.js";

export const constructIntlPluralRulesTest = {
	given: "a constructIntlPluralRules",
	must: "return new instance of Intl.PluralRules",
	received: () => constructIntlPluralRules().constructor.name,
	wanted: () => "PluralRules",
} satisfies Test<string>;
