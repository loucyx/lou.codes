import type { Test } from "@lou.codes/test";
import { constructError } from "../src/constructError.js";

export const constructErrorTest = {
	given: "a constructError",
	must: "return new instance of Error",
	received: () => constructError().constructor.name,
	wanted: () => "Error",
} satisfies Test<string>;
