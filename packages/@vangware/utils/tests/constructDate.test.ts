import type { Test } from "@vangware/test";
import { constructDate } from "../src/constructDate.js";

export default {
	given: "a constructDate",
	must: "return new instance of Date",
	received: () => constructDate().constructor.name,
	wanted: () => "Date",
} satisfies Test<string>;
