import type { Test } from "@vangware/test";
import { constructIntlRelativeTimeFormat } from "../src/constructIntlRelativeTimeFormat.js";

export default {
	given: "a constructIntlRelativeTimeFormat",
	must: "return new instance of Intl.RelativeTimeFormat",
	received: () => constructIntlRelativeTimeFormat().constructor.name,
	wanted: () => "RelativeTimeFormat",
} satisfies Test<string>;
