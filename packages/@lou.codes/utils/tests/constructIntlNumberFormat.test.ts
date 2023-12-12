import type { Test } from "@lou.codes/test";
import { constructIntlNumberFormat } from "../src/constructIntlNumberFormat.js";

export const constructIntlNumberFormatTest = {
	given: "a constructIntlNumberFormat",
	must: "return new instance of Intl.NumberFormat",
	received: () => constructIntlNumberFormat().constructor.name,
	wanted: () => "NumberFormat",
} satisfies Test<string>;
