import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { parseBinary } from "../src/parseBinary.js";

export const parseBinaryTests = [
	{
		given: "a valid binary string",
		must: "return correct value",
		received: () => parseBinary("101"),
		wanted: () => 0b101,
	},
	{
		given: "a binary string with a dot",
		must: "return correct value",
		received: () => parseBinary("101.5"),
		wanted: () => 0b101,
	},
	{
		given: "a invalid string",
		must: "return correct value",
		received: () => parseBinary("invalid"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
