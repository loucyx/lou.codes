import { foregroundCyan } from "@lou.codes/ansi";
import { formatPropertyPath } from "../src/formatPropertyPath.js";
import type { Tests } from "../src/types/Tests.js";

const pathArray = ["a", "property", "path"];

export const formatPropertyPathTests = [
	{
		given: "an array with a few items",
		must: 'return a concatenation using "."',
		received: () => formatPropertyPath(pathArray),
		wanted: () => pathArray.map(foregroundCyan).join("."),
	},
	{
		given: "an empty array",
		must: 'return "it"',
		received: () => formatPropertyPath([]),
		wanted: () => "it",
	},
] satisfies Tests<string>;
