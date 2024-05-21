import type { Tests } from "@lou.codes/test";
import { captureNamed } from "../src/captureNamed.js";

export const captureNamedTests = [
	{
		given: "a group name test and a number 13",
		must: "add an escape sequence to the left",
		received: () => captureNamed("test")(13),
		wanted: () => "(?<test>13)",
	},
] satisfies Tests<string>;
