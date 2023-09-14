import type { Tests } from "@vangware/test";
import type { Maybe } from "@vangware/types";
import { parseDecimal } from "../src/parseDecimal.js";

export default [
	{
		given: "a valid decimal string",
		must: "return correct value",
		received: () => parseDecimal("101"),
		wanted: () => 101,
	},
	{
		given: "a decimal string with a dot",
		must: "return correct value",
		received: () => parseDecimal("101.5"),
		wanted: () => 101,
	},
	{
		given: "a invalid string",
		must: "return correct value",
		received: () => parseDecimal("invalid"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
