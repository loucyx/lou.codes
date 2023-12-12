import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { iterableToArray } from "../src/iterableToArray.js";
import { range } from "../src/range.js";

const range1 = range(1);
const rangeFrom5 = range1(5);
const range2n = range(2n);
const rangeFrom0n = range2n(0n);

export const rangeTests = [
	{
		given: "a range to a bigger number (step 1)",
		must: "return iterable from small number to big number",
		received: () => iterableToArray(rangeFrom5(10)),
		wanted: () => [5, 6, 7, 8, 9, 10],
	},
	{
		given: "a range to the same number (step 1)",
		must: "return iterable with only the given number",
		received: () => iterableToArray(rangeFrom5(5)),
		wanted: () => [5],
	},
	{
		given: "a range to a smaller number (step 1)",
		must: "return iterable from big number to small number",
		received: () => iterableToArray(rangeFrom5(0)),
		wanted: () => [5, 4, 3, 2, 1, 0],
	},
	{
		given: "a range to a bigger number (step 2n)",
		must: "return iterable from small number to big number",
		received: () => iterableToArray(rangeFrom0n(10n)),
		wanted: () => [0n, 2n, 4n, 6n, 8n, 10n],
	},
	{
		given: "a range to the same number (step 2n)",
		must: "return iterable with only the given number",
		received: () => iterableToArray(rangeFrom0n(0n)),
		wanted: () => [0n],
	},
	{
		given: "a range to a smaller number",
		must: "return iterable from big number to small number",
		received: () => iterableToArray(rangeFrom0n(-10n)),
		wanted: () => [0n, -2n, -4n, -6n, -8n, -10n],
	},
	{
		given: "a range to a bigger odd number (step 2n)",
		must: "return iterable from small number to big number",
		received: () => iterableToArray(rangeFrom0n(11n)),
		wanted: () => [0n, 2n, 4n, 6n, 8n, 10n],
	},
] satisfies Tests<ReadOnlyArray<bigint | number>>;
