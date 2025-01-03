import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import type { RegularExpression } from "@lou.codes/types";
import { match } from "../src/match.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const matchNumbersString = match(raw`/\d+/u` as RegularExpression);
const matchNumbersRegExp = match(/\d+/u);
const matchWithErrors = match("/('/u");

export const matchTests = [
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
