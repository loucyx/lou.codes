import type { Test } from "@lou.codes/test";
import { constructReferenceError } from "../src/constructReferenceError.js";

export const constructReferenceErrorTest = {
	given: "a constructReferenceError",
	must: "return new instance of ReferenceError",
	received: () => constructReferenceError().constructor.name,
	wanted: () => "ReferenceError",
} satisfies Test<string>;
