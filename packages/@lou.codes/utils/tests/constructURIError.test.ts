import type { Test } from "@lou.codes/test";
import { constructURIError } from "../src/constructURIError.js";

export const constructURIErrorTest = {
	given: "a constructURIError",
	must: "return new instance of URIError",
	received: () => constructURIError().constructor.name,
	wanted: () => "URIError",
} satisfies Test<string>;
