import type { Test } from "@lou.codes/test";
import { constructMap } from "../src/constructMap.js";

export default {
	given: "a constructMap",
	must: "return new instance of Map",
	received: () => constructMap().constructor.name,
	wanted: () => "Map",
} satisfies Test<string>;
