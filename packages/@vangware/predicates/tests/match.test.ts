import type { Tests } from "@vangware/test";
import { match } from "../src/match.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const matchNumbersString = match("/\\d+/u");
const matchNumbersRegExp = match(/\d+/u);
const matchWithErrors = match("/('/u");

export default [
	{
		given: "match based on string and a number",
		received: () => matchNumbersString("123"),
		...wantedTrue,
	},
	{
		given: "match based on string and a string with no numbers",
		received: () => matchNumbersString("foo"),
		...wantedFalse,
	},
	{
		given: "match based on a regular expression and a number",
		received: () => matchNumbersRegExp("123"),
		...wantedTrue,
	},
	{
		given: "match based on a regular expression and a string with no numbers",
		received: () => matchNumbersRegExp("foo"),
		...wantedFalse,
	},
	{
		given: "match with syntax errors",
		received: () => matchWithErrors("foo"),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
