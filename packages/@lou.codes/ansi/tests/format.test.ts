import { format } from "../src/format.js";
import { test } from "./test.js";

export const formatTests = test(import.meta.url)(
	{
		given: "a number 1, a number 2 and a string",
		must: "return that string wrapped with ansi for 1 and for 2",
		received: () => format(2)(1)("foobar"),
		wanted: () => "\u001B[1mfoobar\u001B[2m",
	},
	{
		given: "a number 1, a number 2 and a template literal",
		must: "return that template literal as a string wrapped with ansi for 1 and for 2",
		received: () => format(2)(1)`foobar ${10}`,
		wanted: () => "\u001B[1mfoobar 10\u001B[2m",
	},
);
