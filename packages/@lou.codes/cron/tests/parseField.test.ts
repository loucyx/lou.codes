import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import type { Field } from "../src/Field.js";
import { parseField } from "../src/parseField.js";

export const parseFieldTests = [
	{
		given: "a *",
		must: "get *",
		received: () => parseField("*"),
		wanted: () => "*",
	},
	{
		given: "a number",
		must: "get that parsed number",
		received: () => parseField("13"),
		wanted: () => 13,
	},
	{
		given: "a list",
		must: "get that list number",
		received: () => parseField("10,11,12,13"),
		wanted: () => [10, 11, 12, 13],
	},
	{
		given: "a range",
		must: "get that list range",
		received: () => parseField("10-13"),
		wanted: () => ({ from: 10, to: 13 }),
	},
	{
		given: "an invalid string",
		must: "get undefined",
		received: () => parseField("invalid"),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<Field<number>>>;
