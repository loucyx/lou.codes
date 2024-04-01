import type { Test } from "@lou.codes/test";
import { constructTextEncoder } from "../src/constructTextEncoder.js";

export const constructTextEncoderTest = {
	given: "a constructTextEncoder",
	must: "return new instance of TextEncoder",
	received: () => constructTextEncoder().constructor.name,
	wanted: () => "TextEncoder",
} satisfies Test<string>;
