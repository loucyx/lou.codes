import type { Test } from "@vangware/test";
import { constructPromise } from "../src/constructPromise.js";

export default {
	given: "a constructPromise",
	must: "return new instance of Promise",
	received: () => constructPromise(() => undefined).constructor.name,
	wanted: () => "Promise",
} satisfies Test<string>;
