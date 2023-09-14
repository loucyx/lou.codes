import type { Tests } from "@vangware/test";
import { whenIsSymbol } from "../src/whenIsSymbol.js";

const whenIsSymbolTest = whenIsSymbol(() => "truthy")(() => "falsy");

export default [
	{
		given: "a whenIsSymbol with a string",
		must: "receive the truthy value",
		received: () => whenIsSymbolTest(Symbol("test")),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsSymbol without a string",
		must: "receive the falsy value",
		received: () => whenIsSymbolTest("test"),
		wanted: () => "falsy",
	},
] satisfies Tests<string>;
