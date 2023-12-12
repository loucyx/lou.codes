import type { Tests } from "@lou.codes/test";
import { featureParser } from "../src/featureParser.js";

export const featureParserTests = [
	{
		given: "an object with features",
		must: "return a string with the proper values",
		received: () =>
			featureParser({
				height: 100,
				left: 100,
				menuBar: true,
				noOpener: true,
				resizable: true,
				scrollbars: false,
			}),
		// eslint-disable-next-line max-len
		wanted: () =>
			"height=100,left=100,menubar=1,noopener=1,resizable=1,scrollbars=0",
	},
	{
		given: "an empty object",
		must: "return an empty string",
		received: () => featureParser({}),
		wanted: () => "",
	},
] satisfies Tests<string>;
