import type { Test } from "@lou.codes/test";
import { constructIntlRelativeTimeFormat } from "../src/constructIntlRelativeTimeFormat.js";

export const constructIntlRelativeTimeFormatTest = {
	given: "a constructIntlRelativeTimeFormat",
	must: "return new instance of Intl.RelativeTimeFormat",
	received: () => constructIntlRelativeTimeFormat().constructor.name,
	wanted: () => "RelativeTimeFormat",
} satisfies Test<string>;
