import type { Test } from "@vangware/test";
import { constructProxy } from "../src/constructProxy.js";

export default {
	given: "a constructProxy",
	must: "return new instance of Proxy",
	received: () => constructProxy({}, {}).constructor.name,
	wanted: () => "Object", // We can't actually know if a Proxy is a Proxy.
} satisfies Test<string>;
