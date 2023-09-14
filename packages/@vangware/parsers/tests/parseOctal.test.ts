import type { Tests } from "@vangware/test";
import type { Maybe } from "@vangware/types";
import { parseOctal } from "../src/parseOctal.js";

export default [
	{
		given: "a valid octal string",
		must: "return correct value",
		received: () => parseOctal("101"),
		wanted: () => 0o101,
	},
	{
		given: "a octal string with a dot",
		must: "return correct value",
		received: () => parseOctal("101.5"),
		wanted: () => 0o101,
	},
	{
		given: "a invalid string",
		must: "return correct value",
		received: () => parseOctal("invalid"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number>>;
