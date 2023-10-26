import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { parseHexadecimal } from "../src/parseHexadecimal.js";

export default [
	{
		given: "a valid hexadecimal string",
		must: "return correct value",
		received: () => parseHexadecimal("101"),
		wanted: () => 0x101,
	},
	{
		given: "a hexadecimal string with a dot",
		must: "return correct value",
		received: () => parseHexadecimal("101.5"),
		wanted: () => 0x101,
	},
	{
		given: "a invalid string",
		must: "return correct value",
		received: () => parseHexadecimal("invalid"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
