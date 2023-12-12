import type { Test } from "@lou.codes/test";
import { constructIntlLocale } from "../src/constructIntlLocale.js";

export const constructIntlLocaleTest = {
	given: "a constructIntlLocale",
	must: "return new instance of Intl.Locale",
	received: () => constructIntlLocale("en-US").constructor.name,
	wanted: () => "Locale",
} satisfies Test<string>;
