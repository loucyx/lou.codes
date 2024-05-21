import type { Tests } from "@lou.codes/test";
import { compareField } from "../src/compareField.js";

export const compareFieldTests = [
	{
		given: "Two equal values",
		must: "return true",
		received: () => compareField(13, 13),
		wanted: () => true,
	},
	{
		given: "Two different values",
		must: "return false",
		received: () => compareField(13, 99),
		wanted: () => false,
	},
	{
		given: "Value and a range that contains it",
		must: "return true",
		received: () => compareField(13, { from: 0, to: 99 }),
		wanted: () => true,
	},
	{
		given: "Value and a range that doesn't contain it",
		must: "return true",
		received: () => compareField(13, { from: 0, to: 10 }),
		wanted: () => false,
	},
	{
		given: "Value and a list that contains it",
		must: "return true",
		received: () => compareField(13, [10, 13]),
		wanted: () => true,
	},
	{
		given: "Value and a list that doesn't contain it",
		must: "return true",
		received: () => compareField(13, [10, 12]),
		wanted: () => false,
	},
	{
		given: "Value and a list with a range that contains it",
		must: "return true",
		received: () => compareField(13, [10, { from: 11, to: 99 }]),
		wanted: () => true,
	},
	{
		given: "Value and a list with a range that doesn't contain it",
		must: "return true",
		received: () => compareField(13, [5, { from: 10, to: 12 }]),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
