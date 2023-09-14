import type { Test } from "@vangware/test";
import { constructIntlNumberFormat } from "../src/constructIntlNumberFormat.js";

export default {
	given: "a constructIntlNumberFormat",
	must: "return new instance of Intl.NumberFormat",
	received: () => constructIntlNumberFormat().constructor.name,
	wanted: () => "NumberFormat",
} satisfies Test<string>;
