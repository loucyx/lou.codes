import type { Test } from "@lou.codes/test";
import { constructIntlDateTimeFormat } from "../src/constructIntlDateTimeFormat.js";

export default {
	given: "a constructIntlDateTimeFormat",
	must: "return new instance of Intl.DateTimeFormat",
	received: () => constructIntlDateTimeFormat().constructor.name,
	wanted: () => "DateTimeFormat",
} satisfies Test<string>;
